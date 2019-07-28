var mongoClient=require("mongodb").MongoClient
function ConnectDB(callback){
    var url="mongodb://127.0.0.1:27017"
    mongoClient.connect(url,(err,db)=>{
        var dbName=db.db("adminNew")
        if(err){
            callback(err,null)
            return
        }
        callback(err,db,dbName)
    })
}
// 增
exports.add=function(collection,json,callback){
    ConnectDB((err,db,dbName)=>{
        dbName.collection(collection).insertOne(json,function(err,data){
            if(err){
                callback(err,null)
            }
            callback(err,data)
            // 关闭数据库
            db.close()
        })
    })
}
// 删除
exports.del=function(collection,json,callback){
    ConnectDB((err,db,dbName)=>{
        dbName.collection(collection).deleteOne(json,function(err,data){
            if(err){
                callback(err,null)
            }
            callback(err,data)
            db.close()
        })
    })
}
// 修改
exports.update=function(collection,json,newjson,callback){
    ConnectDB((err,db,dbName)=>{
        dbName.collection(collection).update(json,newjson,function(err,data){
            if(err){
                callback(err,null)
            }
            callback(err,data)
            db.close()
        })
    })
}
// 查找
exports.find=function(collection,json,callback){
    ConnectDB((err,db,dbName)=>{
        dbName.collection(collection).find(json).toArray(function(err,data){
            if(err){
                callback(err,null)
            }
            callback(err,data)
            db.close()
        })
    })
}