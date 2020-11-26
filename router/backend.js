const express = require("express");

const router = express.Router();

router.get("/login",(req,res)=>{
    res.send("前台登陆页面");
})
router.get("/index",(req,res)=>{
    res.send("前台注册页面");
})
router.get("/logout",(req,res)=>{
    res.send("前台退出页面");
})

//导出
module.exports = router;