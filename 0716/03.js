// url 后面要写链接的东西
var http=require("http")
var fs=require('fs')
http.createServer((req,res)=>{
    if(req.url=="/red"){
        fs.readFile("./static/red.html",(err,data)=>{
            res.end(data)
        })
    }else if(req.url=="/yellow"){
        fs.readFile("./static/yellow.html",(err,data)=>{
            res.end(data)
        })
    }
}).listen(3000)

