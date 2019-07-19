var http=require("http")
var sd=require("silly-datetime")
http.createServer((req,res)=>{
// 时间戳格式化
// var time=sd.format(new Date(),"YYYY-MM-DD-hh-mm-ss")
// 距离当前时间的前几秒
var time=sd.fromNow(new Date(),3000)
// console.log(time)
res.end()
}).listen(3000)
