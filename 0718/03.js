var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {
   
    // fs.writeFile("./view/1.txt", "写入的内容", { flag: "a" }, (err) => {
    //     if (err) {
    //         throw error
    //     }
    //     res.end("success")
    // })
    // fs.copyFile("./view/1.txt", "./view/3.txt", (err) => {
    //     res.end("复制成功")
    // })
    // fs.rename("./view/1.txt", "./view/11.txt", (err) => {
    //     res.end("success")
    // })
    // 创建
    // fs.mkdir("./aa",(err)=>{
    //     res.end("success")
    // }) 
    // 删除
    // fs.rmdir("./aa",(err)=>{
    //     res.end("success")
    // }) 
    // fs.readdir("./view",(err,data)=>{
    //     console.log(data)
    //     res.end("success")
    // })
    // fs.unlink("./view/3.txt",(err)=>{
    //      res.end("success")
    // })
    // 查看
    // fs.stat("./view/aa",(err,stats)=>{
        // console.log(stats.isFile())
        // console.log( stats.isDirectory())
    //     res.end("success")
    // })
// 流  stream 文件流
// createReadStream  创建一个读取文件流
// data 数据读取的过程 end 数据读取完成   data end 事件
   var stream=fs.createReadStream("./view/11.txt")
   var content=""
   stream.on("data",(chunk)=>{
    //    console.log(chunk)
       content+=chunk
    //    chunk拿你的数据
    //    console.log(content)
   })
//    stream.on("end",(err)=>{
//        console.log("数据接收完毕")
//    })
   stream.on("end",(chunk)=>{
    console.log("数据接收完毕"+content)
   })
   res.end()
}).listen(3000)