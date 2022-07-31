import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => ({
    isLoading: false,
  }),

  actions: {
    loadingStart() {
      this.isLoading = true;
    },

    loadingFinish() {
      this.isLoading = false;
    },
  },
});
