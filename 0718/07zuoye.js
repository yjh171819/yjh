var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
if(req.url=="/facicon.ico"){
    return 
}
fs.readdir('./aa',(err,data)=>{
    var arr=[];
    for(let a=0;a< data.length;a++){
        fs.stat("./aa/"+data[a],(err,stats)=>{
            var pd=stats.isDirectory()
            if(pd){
                arr.push(data[a])
            }
        })
    }
    res.end('success')
})
// fs.readdir('aa',function(err,files){
//     var arr=[];
//     for(var i=0;i<files.length;i++){
//         var filename=files[i];
//         var stats=fs.statSync('./aa/'+filename)
//         if(stats.isDirectory()){
//             wenjianjia.push(filename); 
//         }
//     }
//     console.log(wenjianjia)
// })
// res.end("success")
}).listen(3000)