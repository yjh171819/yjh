var express=require("express")
app=express()
var fs=require("fs")
// 设置模板引擎  engine引擎
// app.engine("views engine","ejs")
// app.set
// 设置模板引擎为ejs
app.set("view engine","ejs")
// 设置模板的具体目录
app.set("views",__dirname+"/views")
app.get("/",function(req,res){
// express 包含ejs， res.render()
res.render("index",{list:["1","2","3"]})
})
app.listen(3000)