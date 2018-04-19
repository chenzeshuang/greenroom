const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const api = require('./api')

app.use(bodyParser.json())

//设置跨域 cors
app.all('*', function(req, res, next) {
        console.log(123456)
        res.header("Access-Control-Allow-Origin", "*")
        res.header('Access-Control-Allow-methods', 'POST')
        res.header("Access-Control-Allow-Headers", "Content-Type,Token,plantform")
        res.header('Content-Type', "application/json;charset=utf-8")
        console.log('12345')
        next()
    })
    //启动后端接口
api(app)

app.listen(9000, function() {
    console.log('server listen 9000')
})