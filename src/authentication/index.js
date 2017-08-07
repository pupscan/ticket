import http from '../api/http'


export default {
  isLogged: () => http.defaults.headers.common.Authorization,
  login(token, type = 'bearer') {
    if (token) {
      http.defaults.headers.common.Authorization = type + ' ' + token
      return Promise.resolve()
    }
    return Promise.reject()
  },
  logout: () => http.defaults.headers.common.Authorization = ''
}
