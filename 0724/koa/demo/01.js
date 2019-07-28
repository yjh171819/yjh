var koa=require("koa")
var app=new koa()
// ctx=context  执行上下文   把express里面的request和response统一封装在context
// koa  async异步  await等待   await配合async使用           generator 配合* yiled
app.use(async (ctx)=>{
    // ctx.response.body="hello koa"
    // 路由  express =>路由中间件 var router=express.Router()   app.use(router)
    if(ctx.request.url=="/"){
        ctx.body="hello koa"
    }else if(ctx.request.url=="/about"){
        ctx.body="about"
    }
})
app.listen(3000)