import http from './http'

export default {
  client: clientId => http.get('/clients/client/' + clientId).then(response => response.data),
}
