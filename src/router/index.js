import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home'
import Voucher from '@/components/Voucher'
import ActivityDetail from '@/components/ActivityDetail'
import PaySuccess from '@/components/PaySuccess'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     name: 'Home',
        //     component: Home
        // },
        {
            path: '/',
            name: 'Voucher',
            component: Voucher
        },
        {
            path: '/activity-detail',
            // 一定要写name,params必须用name来识别路径
            name: 'ActivityDetail',
            component: ActivityDetail
        },
        {
            path: '/pay-success',
            name: 'PaySuccess',
            component: PaySuccess
        }
    ],
    // mode: 'history',
})
