import Vue from 'vue'
import Vuex from 'vuex'
import newTickets from './modules/new-tickets'
import happyTickets from './modules/happy-tickets'
import unhappyTickets from './modules/unhappy-tickets'
import logger from './plugins/logger'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        newTickets,
        happyTickets,
        unhappyTickets,
    },
    strict: debug,
    plugins: debug ? [logger()] : []
})
