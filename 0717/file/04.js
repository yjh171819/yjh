var http=require("http")
var fd=require("formidable")
var sd=require("silly-datetime")
var path=require('path')
var fs=require("fs")
http.createServer((req,res)=>{
    if(req.url=="favicon.ico"){
        return
    }
    if(req.url=="/dopost"){
      var form=new fd.IncomingForm()
      // console.log(form)
      form.uploadDir="./upload"
      form.parse(req,function(err,fields,files){
          // console.log(files)      
          var oldpath=files.pic.path
          // console.log(oldpath)
          var extname=path.extname(files.pic.name)
          var tt=sd.format(new Date(),"YYYYMMDDhhmmss")
          var newpath="upload/"+tt+extname
          // 获取文件的扩展名
          // console.log(newpath)
          fs.rename(oldpath,newpath,(err)=>{
            res.end('1111')
          })
      })
    }
}).listen(3000)