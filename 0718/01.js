// 引入服务器模块
var http=require("http")
// ejs 模板引擎
var ejs=require("ejs")
// fs=file system 文件系统
var fs=require("fs")
// 创建服务器
http.createServer((req,res)=>{
var list=["1","2","3"]
// var newData={
//     list:["1","2","3"]
// }
// 数组要转对象
fs.readFile("./view/index.ejs",(err,data)=>{
 var str=data.toString()
 var result=ejs.render(str,{lists:list})
//  {lists:list}转换为对象 如果是对象就写对象的名 
// var result=ejs.render(str,newData)
// 然后遍历里面的list
 res.end(result)
})
}).listen(3000)
// listen 监听端口