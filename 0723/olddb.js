// node链接 mongodb
// 增  insert
// 删  remove
// 改  update
// 查    find
// connect  链接
var express=require("express")
var app=express();
var mongoClient=require("mongodb").MongoClient;
app.get("/",(req,res)=>{
    res.send("首页")
})
app.get("/add",(req,res)=>{
    // connect 链接
    var url="mongodb://127.0.0.1:27017"
    mongoClient.connect(url,(err,db)=>{
    //   链接数据库
    var dbName=db.db("data")
    dbName.collection("test").insertOne({"name":"aa"},(err,data)=>{
        if(err){
            throw err
        }
        res.send({"success":"ok"})
      })
   })
})
app.get("/del",(req,res)=>{
    // connect 链接
    var url="mongodb://127.0.0.1:27017"
    mongoClient.connect(url,(err,db)=>{
    //   链接数据库
    var dbName=db.db("data")
    dbName.collection("test").deleteOne({"name":"aa"},(err,data)=>{
        if(err){
            throw err
        }
        res.send({"success":"ok"})
      })
   })
})
app.get("/update",(req,res)=>{
    // connect 链接
    var url="mongodb://127.0.0.1:27017"
    mongoClient.connect(url,(err,db)=>{
    //   链接数据库
    var dbName=db.db("data")
    dbName.collection("test").update({"name":"yjh1"},{$set:{"name":"bb"}},(err,data)=>{
        if(err){
            throw err
        }
        res.send({"success":"ok"})
      })
   })
})
app.get("/find",(req,res)=>{
    // connect 链接
    var url="mongodb://127.0.0.1:27017"
    mongoClient.connect(url,(err,db)=>{
    //   链接数据库
    var dbName=db.db("data")
    dbName.collection("test").find({"name":"bb"}).toArray((err,data)=>{
        if(err){
            throw err
        }
        res.send({"success":data})
      })
   })
})


app.listen(3000)
