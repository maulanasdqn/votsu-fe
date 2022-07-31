import { defineStore } from "pinia";
import { CandidateService } from "../../services/candidate/index.service";
import { CandidateDto } from "../../utilities/dto/candidate.dto";

const useCandidateStore = defineStore("candidate", {
  state: () => ({
    candidates: [],
    candidate: {},
  }),

  getters: {
    getCandidate(state) {
      return state.candidates;
    },

    getCandidateById(state): Object {
      return state.candidate;
    },
  },

  actions: {
    async fetchCandidate() {
      try {
        const res = await CandidateService.fetchCandidate();
        this.candidates = res;
        return res;
      } catch (error) {
        throw error;
      }
    },

    async retrieveCandidate(id: number) {
      try {
        const res = await CandidateService.retrieveCandidate(id);
        this.candidate = res;
        return res;
      } catch (error) {
        throw error;
      }
    },

    async updateCandidate(payload: CandidateDto) {
      try {
        const res = await CandidateService.updateCandidate(payload);
        return res;
      } catch (error) {
        throw error;
      }
    },

    async createCandidate(payload: CandidateDto) {
      try {
        const res = await CandidateService.createCandidate(payload);
        return res;
      } catch (error) {
        throw error;
      }
    },
  },
});

export default useCandidateStore;
