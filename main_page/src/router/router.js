import Vue from 'vue'
import Router from 'vue-router'

import vAnketaPage from '../components/v-anketa-page'
import vHomePage from '../components/v-home-page'
Vue.use(Router)

let router = new Router({
    routes:[
        {
            path:'/',
            name:'home_page',
            component:vHomePage
        },
        {
            path:'/anketa',
            name:'anketa',
            component:vAnketaPage,
            props:true
        }
    ]
})
export default router;