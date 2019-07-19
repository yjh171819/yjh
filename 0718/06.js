// 搭建静态资源服务器
var express=require("express")
var path=require("path")
var app=express()
// 使用静态资源 express.static()
// app.use() 使用 中间件 插件
console.log(__dirname)
var publicpath=path.resolve(__dirname,"public")
app.use(express.static(publicpath))
app.listen(3000)
// mongodb