/* eslint-disable */

import Vue from 'vue'
import router from '../../routes'

const FirebaseAuth = "https://identitytoolkit.googleapis.com/v1"
const FirebaseKey = "AIzaSyAbBlF17r37SBRZ28UAJVdHVptWsceP2BY"

const admin = {
    namespaced: true,
    state: {
        token: null,
        refresh: null,
        authFailed: false,
        refreshLoading: true,
        addpost: false,
        adminPost: null,
    },
    getters: {
        isAuth(state) {
            if (state.token) {
                return true
            }
            return false
        },
        refreshLoading(state) {
            return state.refreshLoading
        },
        addPostStatus(state) {
            return state.addpost
        },
        getAdminPost(state) {
            return state.adminPost
        }
    },
    mutations: {
        authUser(state, authData) {
            state.token = authData.idToken
            state.refresh = authData.refreshToken

            if (authData.type == 'signin') {
                router.push('/dashboard')
            }
        },
        authFailed(state, type) {
            if (type == 'reset') {
                state.authFailed = false
            } else {
                state.authFailed = true
            }
        },
        logoutUser(state) {
            state.token = null
            state.refresh = null
            localStorage.removeItem("token")
            localStorage.removeItem("refresh")

            router.push('/')
        },
        refreshLoading(state) {
            state.refreshLoading = false
        },
        addPost(state) {
            state.addpost = true
        },
        clearAddPost(state) {
            state.addpost = false
        },
        getAdminPost(state, posts) {
            state.adminPost = posts
        }
    },
    actions: {
        signIn({
            commit
        }, payload) {
            Vue.http.post(`${FirebaseAuth}/accounts:signInWithPassword?key=${FirebaseKey}`, {
                    ...payload,
                    returnSecureToken: true,
                })
                .then(response => response.json())
                .then(authData => {
                    commit("authUser", {
                        ...authData,
                        type: 'signin'
                    })
                    localStorage.setItem("token", authData.idToken)
                    localStorage.setItem("refresh", authData.refreshToken)
                })
                .catch(error => {
                    commit("authFailed")
                })
        },
        refreshToken({
            commit
        }) {
            const refreshToken = localStorage.getItem("refresh")

            if (refreshToken) {
                Vue.http.post(`https://securetoken.googleapis.com/v1/token?key=${FirebaseKey}`, {
                        grant_type: 'refresh_token',
                        refresh_token: refreshToken
                    })
                    .then(response => response.json())
                    .then(authData => {
                        commit("authUser", {
                            idToken: authData.id_token,
                            refreshToken: authData.refresh_token,
                            type: 'refresh'
                        })

                        commit("refreshLoading")

                        localStorage.setItem("token", authData.id_token)
                        localStorage.setItem("refresh", authData.refresh_token)
                    })
            } else {
                commit("refreshLoading")
            }
        },
        addPost({
            commit,
            state
        }, payload) {
            Vue.http.post(`post.json?auth=${state.token}`, payload)
                .then(response => response.json())
                .then(response => {
                    commit("addPost")
                    setTimeout(() => {
                        commit("clearAddPost")
                    }, 5000)
                })
        },
        getAdminPost({
            commit
        }) {
            Vue.http.get('post.json')
                .then(response => response.json())
                .then(response => {
                    const posts = []
                    for (let key in response) {
                        posts.push({
                            ...response[key],
                            id: key
                        })
                    }
                    commit('getAdminPost', posts)
                })
        },
        deletePost({
            commit,
            state
        }, payload) {
            Vue.http.delete(`post/${payload}.json?auth=${state.token}`)
                .then(response => {
                    let newPosts = []
                    state.adminPost.forEach(post => {
                        if (post.id != payload) {
                            newPosts.push(post)
                        }
                    })
                    commit('getAdminPost', newPosts)
                })
        }
    }
}

export default admin;