import { defineStore } from "pinia";
import { UsersService } from "../../services/user/index.service";

const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
    user: {},
    me: {},
  }),

  getters: {
    getUsers(state) {
      return state.users;
    },

    getUserMe(state) {
      return state.me;
    },

    getUserById(state) {
      return state.user;
    },
  },

  actions: {
    async fetchUsers() {
      try {
        const res = await UsersService.fetchUser();
        this.users = res;
        return res;
      } catch (error) {
        throw error;
      }
    },

    async retrieveUserMe() {
      try {
        const res = await UsersService.retrieveMe();
        this.me = res[0]
        return res[0];
      } catch (error) {
        throw error;
      }
    },

    async retrieveUser(id: number) {
      try {
        const res = await UsersService.retrieveUser(id);
        this.user = res[0];
        return res[0];
      } catch (error) {
        throw error;
      }
    },
  },
});

export default useUsersStore;
