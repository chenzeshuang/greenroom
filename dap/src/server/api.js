const jwt = require('jsonwebtoken')
const http = require('http');
const querystring = require('querystring')
const fs = require('fs')
    //const Mock = require('mockjs')
const _ = require('lodash')

function queryApi(url, methods, params) {
    return new Promise((resolve, reject) => {
        let data = ''
        const options = {
            hostname: 'www.lb717.com',
            port: 80,
            path: url,
            method: methods,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        };

        let request = http.request(options, (response) => {
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                data += chunk
            });
            response.on('end', () => {
                resolve(JSON.stringify(data))
            });
        })
        if (methods.toLowerCase() == 'post') {
            request.write(querystring.stringify(params))
        }

        request.end()
    })
}
module.exports = function(app) {

    //注册接口
    app.post('/user/register', function(req, res) {
        let user = fs.readFileSync('user.json', { encoding: "utf-8" });
        user = JSON.parse(user);
        user.push(req.body);
        fs.writeFile('user.json', JSON.stringify(user), function() {
            res.end(JSON.stringify({
                "success": 1,
                "info": "register success"
            }))
        })
    })

    //login api
    app.post('/dsp-admin/user/login', function(req, res) {

        console.log(req.body)
        let user = fs.readFileSync(__dirname + '/user.json', { encoding: "utf-8" });
        user = JSON.parse(user);
        let login = req.body;
        console.log(login)
        let resInfo = {
            status: 1,
            mag: '登录信息有误',
            data: 'login failed'
        }
        console.log(user)
        user.forEach(usr => {
            if (usr.username == login.username && usr.password == login.password) {
                console.log('123456')
                resInfo.status = 0;
                resInfo.mag = "login success";
                resInfo.user = {
                    name: usr.username,
                    time: new Date().toLocaleTimeString(),
                    nickName: "Jacky"
                }
            }
        });

        if (resInfo.success == 0) {
            resInfo.token = jwt.sign(login, "1511", {
                expiresIn: 60 * 60
            })
        }

        res.end(JSON.stringify(resInfo))

    })

}