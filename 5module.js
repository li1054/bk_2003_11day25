//1.导入
const express = require("express");

//导入路由模块
const frontend = require("./router/frontend");
const backend = require("./router/backend");

//2.创建实例
const app = express();

//3.路由
app.use("/frontend",frontend);
app.use("/backend",backend);

//4.启动
app.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");
});