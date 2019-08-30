import Vue from 'vue'
import Vuex from 'vuex'

import PostForm from '@/modules/posts/form/store'
import PostGrid from '@/modules/posts/grid/store'

Vue.use(Vuex)

const modules = {
  PostForm,
  PostGrid
}

export default new Vuex.Store({
  modules,
  state: {},
  mutations: {},
  actions: {}
})
