import useUsersStore from "../../store/users";
import useAuthStore from "../../store/auth";
import { useStorageAsync } from "@vueuse/core";
import { ref } from "vue";

export const setAuthenticatedUser = async () => {
  const UserStore = useUsersStore();
  const currentUser = await UserStore.retrieveUserMe();
  const resUser = useStorageAsync(
    "authenticatedUser",
    JSON.stringify(currentUser)
  );
  return resUser;
};

export const getAuthenticatedUser = async () => {
  const resUser: any = localStorage.getItem("authenticatedUser");
  return JSON.parse(resUser);
};

export const onLogout = () => {
  const AuthStore = useAuthStore();
  AuthStore.logout();
};

export const userData = ref({
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
  grade: "",
  departement: "",
  studentId: "",
  role: null,
  candidate: {
    fullname: "",
    email: "",
    voted: "",
    image: "",
    student_id: "",
  },
  is_chosen: false,
});

export const commonData = ref({
  message: "",
});
