

import Home from '../view/Home/home'
import Plan from '../view/Plan/plan'
import Unit from '../view/Unit/unit'
import Login from '../view/Login/login'
import Creative from '../view/Creative/creative'
import NewMetter from '../view/NewMetter/newmetter'
import Select from '../view/Select/select'





   export const routes=[{

            path: '/',
            redirect: '/home'

        },
        {
            name: '首页',
            path: '/home',
            component: Home
        },
        {
            name: '广告计划',
            path: '/plan',
            component: Plan
        },
        {
            name: '广告单元',
            path: '/unit',
            component: Unit
        },
        {
            name: '广告创意',
            path: '/creative',
            component: Creative
        },
        {
            name: '登录',
            path: '/login',
            component: Login
        },
        {
            name: '新建广告',
            path: '/newmetter',

            component: NewMetter,
            children: [{
                name: '选择广告',
                path: 'select',
                component: Select
            }]
        }
        ]



