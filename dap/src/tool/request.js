import Vue from 'vue'
import axios from 'axios'

let instance = axios.create({
    baseURL: 'http://loaclhost:9000'
})

//请求拦截
instance.interceptors.request.use((config) => {
    return config
}, (err) => {
    return Promise.reject(err)
})

//响应拦截
// instance.interceptors.response.use((response) => {
//     if (response.status === 200) {
//         return response.data
//     } else {
//         return reject({
//             status: response.status
//         })
//     }
// }, (err) => {
//     return Promise.reject(err)
// })
// Object.defineProperty(Vue.prototype, '$http', {
//     value: instance
// })


export const login = (loginInfo) => {
    return new Promise((resolve, reject) => {
        console.log(12345)
        axios.post('http://localhost:9000/dsp-admin/user/login', loginInfo).then((res) => {
            console.log(res)
            resolve(res)
        })
    })

}
export default instance