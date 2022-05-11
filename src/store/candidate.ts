import { defineStore } from "pinia";

const useCandidateStore = defineStore("candidate", {
  state: () => ({
    candidate: [],
  }),

  getters: {
    getCandidate(state) {
      return state.candidate;
    },

    getCandidateCount(state) {
      return state.candidate.length;
    },
  },
});

export default useCandidateStore;
