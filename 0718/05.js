var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.send("首页")
})
var obj={
    username:"123",
    password:"123"
}
// 接收get方式传输过来的数据通过 req.query
app.get("/new",(req,res)=>{
var query=req.query
if(query.username==obj.username&&query.password==obj.password){
    res.send("登录成功")
}
// res.send("接收成功")
})
app.listen(3000)