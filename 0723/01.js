var db=require("./db")
var express=require("express")
var app=express()
app.get("/add",(req,res)=>{
    // db.add("test",{"name":"wwww"},function(err,data){
    //     res.send("ok")
    // })
    // db.del("test",{"name":"wwww"},function(err,data){
    //     res.send("ok")
    // })
//    db.update("test",{"name":"xyd1"},{$set:{"name":"xyd2"}},function(err,data){
//     res.send("ok")
//    })
     db.find("test",{"name":"xyd2"},function(err,data){
         res.send(data)
     })
})
app.listen(3000)