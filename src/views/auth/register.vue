<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { userData } from "../../composables/auth";
import useAuthStore from "../../store/auth";
import { RegisterType } from "../../utilities/types/register.types";
import Logo from "../../assets/logo/LogoVotsu.svg";

const store = useAuthStore();
const router = useRouter();
const isLoading = ref(false);

const register = async () => {
  try {
    isLoading.value = true;
    const payload: RegisterType = {
      email: userData.value.email,
      password: userData.value.password,
      fullname: userData.value.fullname,
      grade: userData.value.grade,
      departement: userData.value.departement,
      studentId: userData.value.studentId,
    };
    await store.register(payload);
    isLoading.value = false;
    router.push("/login");
  } catch (e) {
    console.log(e);
  }
};
</script>
<template>
  <div
    class="flex h-screen justify-center items-center overflow-visible shadow-lg transition-all ease-in-out w-full md:bg-white"
  >
    <div
      class="flex w-full lg:w-1/2 md:px-18 px-6 h-full justify-center bg-white md:bg-white dark:bg-gray-700 h-full flex-col gap-y-6 overflow-y-auto"
    >
      <div class="flex flex-col gap-y-6 py-6 w-full h-full">
        <div class="flex justify-start items-start gap-y-2 flex-col">
          <div class="flex gap-2 py-8">
            <img width="30" :src="Logo" alt="" />
            <h1 class="py-2 font-bold">VOTSU</h1>
          </div>
          <h1
            class="dark:text-white font-sans text-gray-800 font-bold md:text-3xl text-2xl"
          >
            Mari bergabung bersama kami
          </h1>
          <span
            class="md:text-md text-sm text-left font-medium font-sans dark:text-white text-gray-500"
            >Silahkan isi data anda dengan benar</span
          >
        </div>
        <form class="w-auto h-1/2" @submit.prevent="register()">
          <div class="flex flex-col items-center justify-center w-full gap-y-3">
            <div class="flex flex-col gap-y-3 w-full items-center">
              <div class="flex flex-col w-full gap-y-6">
                <div class="flex flex-col gap-y-3">
                  <label
                    for="fullname"
                    class="font-sans dark:text-white text-gray-500 text-sm"
                    >Nama Lengkap <span class="text-red-700 font-bold">*</span>
                  </label>
                  <input
                    v-model="userData.fullname"
                    type="text"
                    name="fullname"
                    class="px-3 py-3 bg-gray-100 border shadow-md border-blue-200 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:ring-yellow-200 dark:focus:ring-gray-400 w-auto rounded-md sm:text-sm focus:ring-1"
                    placeholder="Maulana Sodiqin"
                  />
                </div>
                <div class="flex flex-col gap-y-3">
                  <label
                    for="student_id"
                    class="font-sans dark:text-white text-gray-500 text-sm"
                    >Nomor induk mahasiswa
                    <span class="text-red-700 font-bold">*</span>
                  </label>
                  <input
                    v-model="userData.studentId"
                    type="text"
                    name="student_id"
                    class="px-3 py-3 bg-gray-100 border shadow-md border-blue-200 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:ring-yellow-200 dark:focus:ring-gray-400 w-auto rounded-md sm:text-sm focus:ring-1"
                    placeholder="410370062*****"
                  />
                </div>
                <div class="flex flex-col gap-y-3">
                  <label
                    for="grade"
                    class="font-sans dark:text-white text-gray-500 text-sm"
                    >Kelas
                    <span class="text-red-700 font-bold">*</span>
                  </label>
                  <input
                    v-model="userData.grade"
                    type="text"
                    name="grade"
                    class="px-3 py-3 bg-gray-100 border shadow-md border-blue-200 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:ring-yellow-200 dark:focus:ring-gray-400 w-auto rounded-md sm:text-sm focus:ring-1"
                    placeholder="A1"
                  />
                </div>
                <div class="flex flex-col gap-y-3">
                  <label
                    for="email"
                    class="font-sans dark:text-white text-gray-500 text-sm"
                    >Email <span class="text-red-700 font-bold">*</span>
                  </label>
                  <input
                    v-model="userData.email"
                    type="email"
                    name="email"
                    class="px-3 py-3 bg-gray-100 border shadow-md border-blue-200 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:ring-yellow-200 dark:focus:ring-gray-400 w-auto rounded-md sm:text-sm focus:ring-1"
                    placeholder="maulana@psu.org"
                  />
                </div>
                <div class="flex flex-col gap-y-3">
                  <label
                    for="password"
                    class="font-sans dark:text-white text-gray-500 text-sm"
                    >Kata sandi <span class="text-red-700 font-bold">*</span>
                  </label>
                  <input
                    v-model="userData.password"
                    type="password"
                    name="password"
                    class="px-3 py-3 bg-gray-100 border shadow-md border-blue-200 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:border-yellow-300 dark:focus:ring-gray-400 focus:ring-yellow-200 w-auto rounded-md sm:text-sm focus:ring-1"
                    placeholder="Masukkan kata sandi anda"
                  />
                </div>
                <div class="flex flex-col gap-y-3">
                  <label
                    for="confirm_password"
                    class="font-sans dark:text-white text-gray-500 text-sm"
                    >Konfirmasi kata sandi
                    <span class="text-red-700 font-bold">*</span>
                  </label>
                  <input
                    v-model="userData.confirmPassword"
                    type="password"
                    name="password"
                    class="px-3 py-3 bg-gray-100 border shadow-md border-blue-200 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:border-yellow-300 dark:focus:ring-gray-400 focus:ring-yellow-200 w-auto rounded-md sm:text-sm focus:ring-1"
                    placeholder="Masukkan lagi kata sandi anda"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-start w-full items-center gap-x-4">
              <span
                class="dark:text-white order-2 font-sans text-gray-500 font-medium"
                >Setujui syarat & ketentuan yang berlaku
              </span>
              <input type="checkbox" name="" id="" />
            </div>

            <Button class="w-full" text="Daftar Sekarang" />

            <span class="text-gray-500 dark:text-white font-medium font-sans"
              >Sudah memiliki akun?
              <router-link class="text-blue-400" to="/login">Masuk</router-link>
            </span>
            <span
              class="text-gray-500 text-center dark:text-white font-medium font-sans pb-4"
              >Kembali ke
              <router-link class="text-blue-400" to="/">Home</router-link>
            </span>
          </div>
        </form>
      </div>
    </div>
    <div
      class="lg:flex hidden h-full w-1/2 md:px-6 justify-center bg-gradient-to-bl from-green-700 via-green-400 to-green-500 dark:bg-gray-700 h-full items-center"
    >
      <div class="flex flex-col gap-y-4 w-full">
        <div class="w-full px-8">
          <div class="flex flex-col w-full justify-center">
            <h1 class="text-white font-bold text-5xl">
              "Knowing Yourself is The Beginning Of All Wisdom"
            </h1>
            <p class="text-white py-2 text-2xl">__Aristotle</p>
          </div>
        </div>
      </div>
    </div>
    <Loading v-if="isLoading" />
  </div>
</template>
