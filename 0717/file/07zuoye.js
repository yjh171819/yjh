var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
var query=url.parse(req.url,true).query
if(query.user=='teacher'){
res.end('我是老师，工号为'+query.job)
}else if(query.user=='student'){
res.end('我是学生，工号为'+query.job)
}
}).listen(3000)