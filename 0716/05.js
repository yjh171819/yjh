var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
// var oldquery=url.parse(req.url).query
// console.log(oldquery)
// var query=url.parse(req.url,true).query
// console.log(query)
// url.parse(解析地址栏)url.parse如果第二个参数为true时，则会转换为对象，反之是字符串
// 解析 把多段路径进行合并
// var query=url.resolve("http://127.0.0.1:3000","/name/ma")
// console.log(query)
// 序列化 参数  对象      
var query=url.format({
  protocol: null,
  slashes: null,
  auth: null,
  host: "http://127.0.0.1",
  port: "3000",
  hostname: null,
  hash: null,
  search: '?name=456',
  query: 'name=456',
  pathname: '/',
  path: '?name=456',
  href: '?name=456'
})
// console.log(query)
res.end()
}).listen(3000)