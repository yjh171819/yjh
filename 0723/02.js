var express=require("express")
var bodyparser=require("body-parser")
var router=express.Router()
var db=require("./db")
var app=express();
// post 处理json数据的请求
app.use(bodyparser.json())
// 处理字符串数据的请求
app.use(bodyparser.urlencoded({extended:false}))
app.use(router)
router.post('/register',(req,res)=>{
    var userData={
        username:req.body.username,
        password:req.body.password,
        phone:req.body.phone,
        email:req.body.email,
        createAt:new Date(),
        updateAt:new Date(),
        power:"超级管理员",
        powerCode:0
    }
    db.find('admin',{username:req.body.username},function(err,data){
        // console.log(data)
        if(data!=''){
            res.send('该用户已注册')
        }else{
            db.add('admin',userData,function(err,data){
                res.send('ok')
            })
        }
    })
})
app.listen(3000)