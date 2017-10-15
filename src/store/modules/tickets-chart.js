import api from '../../api'

const state = {
    data: [],
    labels: [],
    status: 'loading'
}

const getters = {
    ticketsChartData: state => state.data,
    ticketsChartLabels: state => state.labels,
    ticketsChartStatus: state => state.status,
}

const actions = {
    fetchTicketsChart({commit}) {
        commit('FETCH_TICKET_CHART')
        api.ticketsChart()
            .then(ticketsChart => commit('UPDATE_TICKET_CHART', {ticketsChart}))
            .catch(err => commit('ERROR_TICKET_CHART', {err}))
    }
}

const mutations = {
    'FETCH_TICKET_CHART'(state) {
        state.status = 'loading'
    },
    'UPDATE_TICKET_CHART'(state, {ticketsChart}) {
        state.status = 'loaded'
        state.data = ticketsChart.all
        state.labels = ticketsChart.labels
    },
    'ERROR_TICKET_CHART'(state) {
        state.status = 'error'
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
