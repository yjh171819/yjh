var express=require("express")
var app=express()
// post的传输方式
var bodyParser=require("body-parser")
// console.log(bodyParser)
var path=require("path")
var publicPath=path.resolve(__dirname,"static")
//path.resolve(__dirname,"static")当前的绝对路径，static要访问到里面的文件
// post json 字符串
// 处理json数据的请求
app.use(bodyParser.json())
// 处理字符串数据的请求
app.use(bodyParser.urlencoded({extends:false}))
app.use(express.static(publicPath))
app.get("/",(req,res)=>{
    res.send("首页")
})
app.post("/dopost",(req,res)=>{
    var body=req.body
    console.log(body)
    res.send("post数据传输")
})
app.listen(3000)