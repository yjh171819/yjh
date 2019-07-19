// 引入http模块
var http=require("http")
// 创建服务器
http.createServer((req,res)=>{
    // req=request 请求，res=response  响应
console.log("hello node")
// 结束响应
res.end("end")
}).listen(3000)
// listen 监听端口