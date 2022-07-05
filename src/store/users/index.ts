import { defineStore } from 'pinia'
import { AuthService } from '../../services/auth/index.service'
import { TokenService } from '../../services/token/index.service'
import { getUsers } from '../../services/user/index.service'

const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    accessToken: TokenService.getToken(),
    refreshToken: TokenService.getRefreshToken(),
    users: [],
  }),

  getters: {
    getUser(state) {
      return state.users
    },

    getUserCount(state): number {
      return state.users.length
    },
  },

  actions: {
    async login(email: any, password: any) {
      try {
        const token = await AuthService.login(email, password)
        this.accessToken = token
        this.authenticated = true
        return token
      } catch (e) {
        console.log(e)
      }

      return false
    },

    async register(
      email: any,
      password: any,
      fullname: any,
      grade: any,
      studentId: any
    ) {
      try {
        const res = await AuthService.signup(
          email,
          password,
          fullname,
          grade,
          studentId
        )
        this.authenticated = true
        return res
      } catch (e) {
        console.log(e)
      }

      return false
    },

    async me() {
      try {
        const res = await getUsers()
        this.users = res.data
        return res.data
      } catch (e) {
        console.log(e)
      }

      return false
    },
  },
})

export default useAuthStore
