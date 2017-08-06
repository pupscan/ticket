import http from './http'

export default {
  ticketChart: () => http.get('/ticket/main').then(response => response.data),
}
