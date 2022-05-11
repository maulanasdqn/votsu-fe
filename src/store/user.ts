import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
    user: [],
  }),

  getters: {
    getUser(state) {
      return state.user;
    },

    getUserCount(state): number {
      return state.user.length;
    },
  },
});

export default useUserStore;
