var koa=require("koa")
var Router=require("koa-router")
var router=new Router();
var app=new koa();
var bodyparser=require("koa-bodyparser")
app.use(bodyparser())
router.get("/login",(ctx)=>{
     // get
     ctx.response.body={
        url:ctx.request.url,
        query:ctx.request.query,
        queryString:ctx.request.querystring
    }
})
router.post("/reg",(ctx)=>{
    ctx.body=ctx.request.body
    console.log(ctx.body)
})
app.use(router.routes())
// 加载路由引用
app.use(router.allowedMethods())
// 处理异常请求方式
app.listen(3000)