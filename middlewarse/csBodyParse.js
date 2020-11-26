const quertstring = require("querystring");

const csBodyParse = (req, res, next)=>{
    let arr = [];
    //分批次接收buffer
    req.on("data",(buffer)=>{
        arr.push(buffer);
    });
    //合并
    req.on("end",()=>{
        let buffer = Buffer.concat(arr);
        let post = quertstring.parse(buffer.toString());
        //将数据挂载req.body上
        req.body = post;
        next();
    })
}
    //导出
    module.exports = csBodyParse;