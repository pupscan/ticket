import api from '../../api'

const state = {
  tickets: {},
  trend: {total: 0, trend: 0},
  last30days: [],
  status: 'loaded'
}

const getters = {
  tickets: state => state.tickets,
  ticketsTrend: state => state.trend,
  ticketsLast30days: state => state.last30days,
  ticketsStatus: state => state.status
}

const actions = {
  fetchTickets({commit}) {
    commit('FETCH_TAG')
    api.trendByTag('all')
      .then(trend => commit('UPDATE_TAG_TREND', {trend}))
      .catch(err => commit('ERROR_TAG', {err}))
    api.last30daysByTag('all')
      .then(last30days => commit('UPDATE_TAG_LAST_30_DAYS', {last30days}))
      .catch(err => commit('ERROR_TAG', {err}))
  }
}

const mutations = {
  'FETCH_TAG'(state) {
    state.status = 'loading'
  },
  'UPDATE_TAG_TREND'(state, {trend}) {
    state.status = 'loaded'
    state.trend = trend
  },
  'UPDATE_TAG_LAST_30_DAYS'(state, {last30days}) {
    state.status = 'loaded'
    state.last30days = last30days
  },
  'ERROR_TAG'(state) {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
