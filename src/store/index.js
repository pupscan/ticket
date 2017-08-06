import Vue from 'vue'
import Vuex from 'vuex'
import tickets from './modules/tickets'
import logger from './plugins/logger'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tickets,
  },
  strict: debug,
  plugins: debug ? [logger()] : []
})
