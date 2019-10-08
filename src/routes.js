import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home/Index.vue'
import SignIn from './components/Signin/Index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/signin',
    component: SignIn
}]

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(from, to, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})