var http=require('http')
var url=require('url')
var fs=require('fs')
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    // 数据库存放的内容
    var obj={
        username:"yonghu", password:'123'
    }
    var query=url.parse(req.url,true).query
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(query.username==obj.username&&query.password==obj.password){
        fs.readFile("./from.html",(err,data)=>{
            res.end('登陆成功') 
        })
    }else{
        res.end('登陆失败') 
    }
}).listen(3000)