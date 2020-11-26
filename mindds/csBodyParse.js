const fs = require('fs')
// const { nextTick } = require('process')

let csbodyparse = (req,res,next)=>{
     let str = '';
     str = req.ip;
     let date = new Date();
     str += '/' + `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
     str += '/' + req.url;
     str += '/' + req.method;
     str +='/' + req.headers['user-agent'] + `\r`;
     fs.appendFile(`./logs/${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.log`, str, err => { })
     next()
}
module.exports = csbodyparse