import api from '../../api'

const state = {
  trend: {total: 0, trend: 0},
  last30days: [],
  status: 'loading'
}

const getters = {
  happyTicketsTrend: state => state.trend,
  happyTicketsLast30days: state => state.last30days,
  happyTicketsStatus: state => state.status
}

const actions = {
  fetchHappyTickets({commit}) {
    commit('FETCH_HAPPY_TICKET')
    api.trendByTag('happy')
      .then(trend => commit('UPDATE_HAPPY_TICKET_TREND', {trend}))
      .catch(err => commit('ERROR_HAPPY_TICKET', {err}))
    api.last30daysByTag('happy')
      .then(last30days => commit('UPDATE_HAPPY_TICKET_LAST_30_DAYS', {last30days}))
      .catch(err => commit('ERROR_HAPPY_TICKET', {err}))
  }
}

const mutations = {
  'FETCH_HAPPY_TICKET'(state) {
    state.status = 'loading'
  },
  'UPDATE_HAPPY_TICKET_TREND'(state, {trend}) {
    // state.status = 'loaded'
    state.trend = trend
  },
  'UPDATE_HAPPY_TICKET_LAST_30_DAYS'(state, {last30days}) {
    state.status = 'loaded'
    state.last30days = last30days
  },
  'ERROR_HAPPY_TICKET'(state) {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
