var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
if(req.url=="/favicon.ico"){
    return 
}
fs.readdir('./aa',(err,data)=>{
    var arr=[];
    for(let a=0;a<data.length;a++){
        fs.stat("./aa/"+data[a],(err,stats)=>{
            // var pd=stats.isDirectory()
            if(stats.isDirectory()){
                arr.push(data[a])
            }
            console.log(arr)
        })
    }
    res.end("success")
})
}).listen(3000)