import api from '../../api'

const state = {
  tickets: {},
  status: 'loaded'
}

const getters = {
  tickets: state => state.tickets,
  ticketsStatus: state => state.status
}

const actions = {
  fetchClient({commit}, {clientId}) {
    commit('FETCH_TICKETS_CHART')
    api.ticketChart()
      .then(client => commit('UPDATE_TICKETS_CHART', {client}))
      .catch(err => commit('ERROR_TICKETS_CHART', {err}))
  }
}

const mutations = {
  'FETCH_TICKETS_CHART'(state) {
    state.status = 'loading'
  },
  'UPDATE_TICKETS_CHART'(state, {client}) {
    state.status = 'loaded'
    state.client = client
  },
  'ERROR_TICKETS_CHART'(state) {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
