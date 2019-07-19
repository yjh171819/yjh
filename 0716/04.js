var http=require("http")
http.createServer((req,res)=>{
    res.end((1+2+3+4).toString())
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    res.end("我喜欢学习node")
}).listen(3000)