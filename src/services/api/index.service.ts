import axios, { AxiosRequestConfig } from 'axios'
// import store from "../store";
import { TokenService } from '../token/index.service'

const ApiService = {
  _401interceptor: 0,

  init(baseURL: string) {
    axios.defaults.baseURL = baseURL
  },

  setHeader() {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${TokenService.getToken()}`
  },

  removeHeader() {
    axios.defaults.headers.common = {}
  },

  get(resource: string) {
    return axios.get(resource)
  },

  post(resource: string, data: any) {
    return axios.post(resource, data)
  },

  put(resource: string, data: any) {
    return axios.put(resource, data)
  },

  delete(resource: string) {
    return axios.delete(resource)
  },

  customRequest(data: any) {
    return axios(data)
  },

  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        if (error.request.status === 401) {
          if (error.config.url.includes('auth/local/login')) {
            // Refresh token has failed. Logout the user
            TokenService.removeToken
            throw error
          } else {
            // Refresh the access token
            try {
              // await store.dispatch("auth/refreshToken");
              // Retry the original request
              return this.customRequest({
                method: error.config.method,
                url: error.config.url,
                data: error.config.data,
              })
            } catch (e) {
              // Refresh has failed - reject the original request
              throw error
            }
          }
        }

        // If error was not 401 just reject as is
        throw error
      }
    )
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._401interceptor)
  },
}

export default ApiService
