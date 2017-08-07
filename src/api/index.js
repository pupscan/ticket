import http from './http'

export default {
  ticketChart: () => http.get('/ticket/main').then(response => response.data),
  trendByTag: (tagName) => http.get('/ticket/trend/value/' + tagName).then(response => response.data),
  last30daysByTag: (tagName) => http.get('/ticket/trend/' + tagName).then(response => response.data)
}
