import Vue from 'vue'
import Vuex from 'vuex'
import newTickets from './modules/new-tickets'
import tickets from './modules/tickets'
import ticketsChart from './modules/tickets-chart'
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
        ticketsChart,
        tickets,
    },
    strict: debug,
    plugins: debug ? [logger()] : []
})
