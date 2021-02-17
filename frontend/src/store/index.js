import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = process.env.VUE_APP_BASE_PATH
axios.defaults.withCredentials = true

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
  },
  state: {
    key: 'val'
  }
})

export default async function init() {
  return store
}
