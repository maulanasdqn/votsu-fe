import { defineStore } from "pinia";
import { AuthService } from "../../services/auth/index.service";
import { TokenService } from "../../services/token/index.service";
import { LoginTypes } from "../../utilities/types/login.types";
import { RegisterType } from "../../utilities/types/register.types";

const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    accessToken: TokenService.getToken(),
    refreshToken: TokenService.getRefreshToken(),
  }),

  actions: {
    async login(payload: LoginTypes) {
      try {
        const token = await AuthService.login(payload);
        this.accessToken = token;
        this.authenticated = true;
        return token;
      } catch (error) {
        throw error;
      }
    },

    async register(payload: RegisterType) {
      try {
        const res = await AuthService.register(payload);
        this.authenticated = true;
        return res;
      } catch (error) {
        throw error;
      }
    },

    logout() {
      try {
        AuthService.logout();
        this.authenticated = false;
      } catch (error) {
        throw error;
      }
    },

    async refresh() {
      try {
        const res = await AuthService.refreshToken();
        return res.data;
      } catch (error) {
        throw error;
      }
    },
  },
});

export default useAuthStore;
