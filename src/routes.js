import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './Store/store'

import Home from './components/Home/Index.vue'
import SignIn from './components/Signin/Index.vue'
import Dashboard from './components/Dashboard/Index.vue'
import MainDashboard from './components/Dashboard/Main.vue'
import AddPost from './components/Dashboard/AddPost.vue'
import ListPost from './components/Dashboard/ListPost.vue'

Vue.use(VueRouter)

const authGuard = {
    beforeEnter(to, from, next) {

        const redirect = () => {
            if (store.state.admin.token) {
                if (to.path === '/signin') {
                    next('/dashboard')
                } else {
                    next()
                }
            } else {
                if (to.path === '/signin') {
                    next()
                } else {
                    next('/')
                }
            }
        }

        if (store.state.admin.refreshLoading) {
            store.watch((state, getters) => getters['admin/refreshLoading'], () => {
                redirect()
            })
        } else {
            redirect()
        }
    }
}

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/signin',
    component: SignIn,
    ...authGuard
}, {
    path: '/dashboard',
    component: Dashboard,
    children: [{
            path: '/',
            component: MainDashboard
        },
        {
            path: 'add_posts',
            component: AddPost
        },
        {
            path: 'manage_posts',
            component: ListPost
        }
    ],
    ...authGuard
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