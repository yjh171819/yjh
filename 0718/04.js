var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.send("首页")
})
// 在express中路径不区分大小写，同时支持链式操作
// 获取路由的动态参数
app.get("/about/:id",(req,res)=>{
    res.send("路由接收的参数为"+req.params.id)
})
app.listen(3000)