import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from '@/views/Address'
import OrderConfirm from '@/views/OrderConfirm'
import OrderSuccess from '@/views/OrderSuccess'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: GoodsList
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/address',
            name: 'Address',
            component: Address
        },
        {
            path: '/orderconfirm',
            name: 'OrderConfirm',
            component: OrderConfirm
        },
        {
            path: '/ordersuccess',
            name: 'OrderSuccess',
            component: OrderSuccess
        }
    ]
})