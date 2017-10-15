import http from './http'

export default {
    search: (search) => http.post('/ticket/search', search).then(response => response.data),
    tickets: () => http.get('/ticket/all').then(response => response.data),
    ticketsChart: () => http.get('/ticket/main').then(response => response.data),
    trendByTag: (tagName) => http.get('/ticket/trend/value/' + tagName).then(response => response.data),
    last30daysByTag: (tagName) => http.get('/ticket/trend/' + tagName).then(response => response.data)
}
