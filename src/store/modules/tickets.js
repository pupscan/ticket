import api from '../../api'

const state = {
    tickets: [],
    search: '',
    status: 'loading'
}

const getters = {
    ticketsTotal: state => state.tickets.length,
    ticketsList: state => state.tickets,
    ticketsStatus: state => state.status,
}

const actions = {
    fetchTickets({commit},  {search = state.search} = {}) {
        commit('FETCH_TICKET', {search})
        if (search) {
            api.search(search)
                .then(tickets => commit('UPDATE_TICKET', {tickets}))
                .catch(err => commit('ERROR_TICKET', {err}))
        }
        else {
            api.tickets()
                .then(tickets => commit('UPDATE_TICKET', {tickets}))
                .catch(err => commit('ERROR_TICKET', {err}))
        }
    }
}

const mutations = {
    'FETCH_TICKET'(state, {search}) {
        state.search = search
        state.status = 'loading'
    },
    'UPDATE_TICKET'(state, {tickets}) {
        state.status = 'loaded'
        state.tickets = tickets
    },
    'ERROR_TICKET'(state) {
        state.status = 'error'
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
