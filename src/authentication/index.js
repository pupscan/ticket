import http from '../api/http'


export default {
  isLogged: () => http.defaults.headers.common.Authorization,
  login(token = '657132d2-9a94-4271-a79c-cb2b428ec777', type = 'bearer') {
    if (token) {
      http.defaults.headers.common.Authorization = type + ' ' + token
      return Promise.resolve()
    }
    return Promise.reject()
  },
  logout: () => http.defaults.headers.common.Authorization = ''
}
