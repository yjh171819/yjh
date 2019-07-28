var koa=require("koa")
var app=new koa()
var bodyparser=require("koa-bodyparser")
// bodyparser处理post请求
app.use(bodyparser())
app.use(async (ctx,next)=>{
    // get
    ctx.response.body={
        url:ctx.request.url,
        query:ctx.request.query,
        queryString:ctx.request.querystring
    }
    // post
    // ctx.body=ctx.request.body
})
app.listen(3000)