import Vue from 'vue'
import Router from 'vue-router'

import vCatalog from '../components/catalog/v-catalog.vue'
import vCart from '../components/cart/v-cart.vue'

Vue.use(Router);

let router = new Router({
    routes:[
        {
            path :'/',
            name : 'catalog',
            component:vCatalog 

        },
        {
            path : '/cart',
            name : 'cart',
            component : vCart,
            props : true
        }
    ]
})

export default router;