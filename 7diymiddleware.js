const express = require("express");
const app = express();

const csBodyParse = require("./middlewarse/csBodyParse")
app.use(csBodyParse);

app.post("/post",(req,res)=>{
    console.log(req.body);
})

app.listen(8080,()=>{
    console.log("server is running ar http://127.0.0.1:8080");
})