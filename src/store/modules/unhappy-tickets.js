import api from '../../api'

const state = {
  trend: {total: 0, trend: 0},
  last30days: [],
  status: 'loading'
}

const getters = {
  unhappyTicketsTrend: state => state.trend,
  unhappyTicketsLast30days: state => state.last30days,
  unhappyTicketsStatus: state => state.status
}

const actions = {
  fetchUnhappyTickets({commit}) {
    commit('FETCH_UNHAPPY_TICKET')
    api.trendByTag('unhappy')
      .then(trend => commit('UPDATE_UNHAPPY_TICKET_TREND', {trend}))
      .catch(err => commit('ERROR_UNHAPPY_TICKET', {err}))
    api.last30daysByTag('unhappy')
      .then(last30days => commit('UPDATE_UNHAPPY_TICKET_LAST_30_DAYS', {last30days}))
      .catch(err => commit('ERROR_UNHAPPY_TICKET', {err}))
  }
}

const mutations = {
  'FETCH_UNHAPPY_TICKET'(state) {
    state.status = 'loading'
  },
  'UPDATE_UNHAPPY_TICKET_TREND'(state, {trend}) {
    state.trend = trend
  },
  'UPDATE_UNHAPPY_TICKET_LAST_30_DAYS'(state, {last30days}) {
    state.status = 'loaded'
    state.last30days = last30days
  },
  'ERROR_UNHAPPY_TICKET'(state) {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
