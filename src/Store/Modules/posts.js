/* eslint-disable */
import Vue from 'vue'

const posts = {
    namespaced: true,
    state: {
        listPosts: null,
        content: null,
    },
    getters: {
        getAllPosts(state) {
            // console.log(listPosts)
            return state.listPosts
        },
        getContent(state) {
            return state.content
        }
    },
    mutations: {
        getAllPosts(state, posts) {
            state.listPosts = posts;
            // console.log(posts)
        },
        getContent(state, content) {
            state.content = content
        },
        clearContent(state) {
            state.content = null
        }
    },
    actions: {
        getAllPosts({
            commit
        }) {
            Vue.http.get(`post.json?orderBy="$key"`)
                .then(response => response.json())
                .then(response => {
                    // console.log(response)
                    const posts = [];
                    for (let key in response) {
                        posts.push({
                            ...response[key],
                            id: key
                        })
                    }
                    commit("getAllPosts", posts)
                })
        },
        getContent({
            commit
        }, payload) {
            Vue.http.get(`post.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(response => {
                    let content = {}
                    for (let key in response) {
                        content = {
                            ...response[key]
                        }
                    }
                    commit("getContent", content)
                })
        }
    }
}

export default posts;