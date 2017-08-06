import Vue from 'vue'
import Vuex from 'vuex'
import client from './modules/client'
import logger from './plugins/logger'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    client,
  },
  strict: debug,
  plugins: debug ? [logger()] : []
})
