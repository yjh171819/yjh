var express=require("express")
var router=express.Router()
var app=express()
app.use(router)
router.get("/",(req,res)=>{
    res.send({"success":"ok"})
})
// 验证码
router.get("/getcode",(req,res)=>{
    var randomNum=function(min,max){
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var str="qwertyuiopasdfghjklzxcvbnm0123456789"
    var result=""
    for(var i=0;i<4;i++){
        result+=str[randomNum(0,str.length-1)]
    }
    res.send({"data":result})
})
app.listen(3000)