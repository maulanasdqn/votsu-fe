import ApiService from '../api/index.service'
import { TokenService } from '../token/index.service'
import qs from 'qs'

const AuthService = {
  login: async function (email: any, password: any) {
    const requestData = {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: 'auth/local/login',
      data: qs.stringify({
        email,
        password,
      }),
    }

    try {
      const response = await ApiService.customRequest(requestData)
      console.log(response)
      TokenService.saveToken(response.data.access_token)
      TokenService.saveRefreshToken(response.data.refresh_token)
      ApiService.setHeader()

      ApiService.mount401Interceptor()

      return response.data.access_token
    } catch (error) {
      console.log(error)
    }
  },

  refreshToken: async function () {
    const refreshToken = TokenService.getRefreshToken()

    const requestData = {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: '/auth/refresh',
      data: qs.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    }

    try {
      const response = await ApiService.customRequest(requestData)

      TokenService.saveToken(response.data.access_token)
      TokenService.saveRefreshToken(response.data.refresh_token)
      ApiService.setHeader()

      return response.data.access_token
    } catch (error) {
      console.log(error)
    }
  },

  logout() {
    localStorage.clear()
    ApiService.removeHeader()

    // NOTE: Again, we'll cover the 401 Interceptor a bit later.
    ApiService.unmount401Interceptor()
  },

  signup: async function (email: any, password: any, name: any) {
    const signupData = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: '/auth/local/register',
      data: {
        email: email,
        password: password,
        name: name,
      },
    }

    try {
      return await ApiService.customRequest(signupData)
    } catch (error) {
      console.log(error)
    }
  },

  resetPassword: async function (email: any) {
    const resetData = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: '/auth/reset-password',
      data: {
        email: email,
      },
    }
    try {
      return await ApiService.customRequest(resetData)
    } catch (error) {
      console.log(error)
    }
  },
}
export { AuthService }
