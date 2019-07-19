var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    // rename改文件名
    fs.rename("./static/1.txt","./static/2.txt",(err)=>{
        res.end("success")
    })
}).listen(3000)