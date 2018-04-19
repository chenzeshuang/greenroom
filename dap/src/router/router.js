import Vue from 'vue'
import vueRouter from 'vue-router'
import { routes } from './index'
Vue.use(vueRouter)
let router = new vueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    console.log(to.name)
    console.log(to.path)
    let isLogin = checkLoginStatus()
    if (to.path == '/login') {

        next()

    } else {
        if (!isLogin) {
            next('/login')
        } else {
            next()
        }
    }
})

function checkLoginStatus() {
    let token = localStorage.getItem('token')
    return !!token
}
export default router