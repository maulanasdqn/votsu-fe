import ApiService from "../api/index.service";
import { CandidateDto } from "../../utilities/dto/candidate.dto";

const CandidateService = {
  fetchCandidate: async function () {
    const requestData = {
      method: "get",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: "/candidate/",
    };

    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  retrieveCandidate: async function (id: number) {
    const requestData = {
      method: "get",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: `/candidate/${id}`,
    };

    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateCandidate: async function (payload: CandidateDto) {
    const { id } = payload;
    const requestData = {
      method: "put",
      headers: { "Content-Type": "application/json" },
      url: `/users/update/${id}`,
      data: payload,
    };

    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw error;
    }
  },

  createCandidate: async function (payload: CandidateDto) {
    const { fullname, email, image, departement, grade, studentId } = payload;
    const requestData = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: `/candidate/create`,
      data: {
        fullname,
        email,
        image,
        departement,
        grade,
        student_id: studentId,
      },
    };

    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
export { CandidateService };
