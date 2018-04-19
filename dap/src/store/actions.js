import { login } from '../tool/request'
let actions = {
    getToken({ commit }, { data, notify, router }) {
        login(data).then((res) => {
            res = res.data
            if (res.status == 0) {
                commit('serverToken', res.token);
                commit('serverUser', res.user.name)
                localStorage.setItem('token', res.token)
                notify({
                    title: '登录成功',
                    message: '跳转首页',
                    type: 'success'
                })
                setTimeout(() => {
                    router.push({
                        path: '/home'
                    })
                }, 1000);
            } else {
                notify({
                    title: '登录出错',
                    message: '用户名或者密码错误',
                    type: 'error'
                })
            }
        })
    }
}
export default actions