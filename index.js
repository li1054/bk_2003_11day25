const express = require('express')
const app = express()

const csBodyParse = require('./mindds/csBodyParse')
app.use(csBodyParse)
app.all('/',(req,res)=>{

})
app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})
