import api from '../../api'

const state = {
  trend: {total: 0, trend: 0},
  last30days: [],
  status: 'loading'
}

const getters = {
  newTicketsTrend: state => state.trend,
  newTicketsLast30days: state => state.last30days,
  newTicketsStatus: state => state.status
}

const actions = {
  fetchNewTickets({commit}) {
    commit('FETCH_NEW_TICKET')
    api.trendByTag('all')
      .then(trend => commit('UPDATE_NEW_TICKET_TREND', {trend}))
      .catch(err => commit('ERROR_NEW_TICKET', {err}))
    api.last30daysByTag('all')
      .then(last30days => commit('UPDATE_NEW_TICKET_LAST_30_DAYS', {last30days}))
      .catch(err => commit('ERROR_NEW_TICKET', {err}))
  }
}

const mutations = {
  'FETCH_NEW_TICKET'(state) {
    state.status = 'loading'
  },
  'UPDATE_NEW_TICKET_TREND'(state, {trend}) {
    state.trend = trend
  },
  'UPDATE_NEW_TICKET_LAST_30_DAYS'(state, {last30days}) {
    state.status = 'loaded'
    state.last30days = last30days
  },
  'ERROR_NEW_TICKET'(state) {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
