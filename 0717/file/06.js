var http=require("http")
var ejs=require("ejs")
var fs=require("fs")
http.createServer((req,res)=>{
// 数据
var datas={
    "list":[
        {
            name:"tom",
            age:12
        },{
            name:"toms",
            age:12
        } 
    ]
}
// ejs render渲染 参数 模板 数据 compiler 编译
// 读取模板
fs.readFile("./static/index.ejs",(err,data)=>{
    // template ejs模板
    var template=data.toString()
    var result=ejs.render(template,datas)
    res.end(result)
})

}).listen(3000)