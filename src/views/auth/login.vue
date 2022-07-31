<script setup lang="ts">
import { useRouter } from "vue-router";
import { TokenService } from "../../services/token/index.service";
import useAuthStore from "../../store/auth/index";
import { userData, commonData } from "../../composables/auth/index";
import { LoginTypes } from "../../utilities/types/login.types";
import { startLoading, finishLoading } from "../../composables/common";

const store = useAuthStore();
const router = useRouter();

const onSubmit = async () => {
  startLoading();
  try {
    const payload: LoginTypes = {
      email: userData.value.email,
      password: userData.value.password,
    };
    await store.login(payload);
    if (TokenService.getToken()) {
      router.push("/user/dashboard");
    }
    finishLoading();
  } catch (error: any) {
    commonData.value.message = error?.message;
    finishLoading();
  }
};
</script>
<template>
  <div
    class="flex h-screen bg-gray-200 justify-start items-center shadow-lg transition-all ease-in-out w-full dark:bg-gray-700 md:bg-white bg-yellow-100"
  >
    <div
      class="flex lg:w-1/2 w-full h-full justify-center bg-white md:bg-white dark:bg-gray-700 dark:md:bg-gray-500 h-auto md:p-8 flex-col gap-y-6"
    >
      <div class="flex flex-col md:gap-y-8 md:px-18 px-6 w-full">
        <div class="flex justify-start items-start gap-y-2 flex-col">
          <div class="flex gap-2 py-8">
            <img width="30" src="../../assets/logo/LogoVotsu.svg" alt="" />
            <h1 class="py-2 font-bold">VOTSU</h1>
          </div>
          <h1
            class="dark:text-white font-sans text-gray-800 font-bold md:text-3xl text-2xl"
          >
            Selamat datang kembali
          </h1>

          <span
            class="md:text-md text-sm text-left font-medium font-sans dark:text-white text-gray-500"
            >Silahkan masuk dengan akun mu</span
          >
        </div>
        <form @submit.prevent="onSubmit()">
          <div
            class="flex flex-col h-full items-center justify-center w-full gap-y-6"
          >
            <div class="flex flex-col gap-y-6 w-full items-center">
              <div class="flex flex-col w-full gap-y-6">
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
                    >Kata sandi
                    <span class="text-red-700 font-bold">*</span>
                  </label>
                  <input
                    v-model="userData.password"
                    type="password"
                    name="password"
                    class="px-3 py-3 bg-gray-100 border shadow-md border-blue-200 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:border-yellow-300 dark:focus:ring-gray-400 focus:ring-yellow-200 w-auto rounded-md sm:text-sm focus:ring-1"
                    placeholder="Masukkan kata sandi anda"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-end w-full">
              <span class="dark:text-white font-sans text-gray-500 font-medium"
                >Lupa kata sandi?
                <router-link class="text-blue-400" to="/forgot">
                  Reset
                </router-link>
              </span>
            </div>
            <Button class="w-full" text="Masuk Sekarang" />
            <span class="text-gray-500 dark:text-white font-medium font-sans"
              >Belum memiliki akun?
              <router-link class="text-blue-400" to="/register"
                >Daftar</router-link
              >
            </span>
          </div>
        </form>
        <span
          class="text-gray-500 text-center dark:text-white font-medium font-sans"
          >Kembali ke
          <router-link class="text-blue-400" to="/">Home</router-link>
        </span>
      </div>
    </div>
    <div
      class="lg:flex items-center hidden w-1/2 md:px-6 justify-center bg-gradient-to-bl from-green-700 via-green-400 to-green-500 dark:bg-gray-700 h-full"
    >
      <div class="w-full px-8">
        <div class="flex flex-col w-full justify-center">
          <h1 class="text-white font-bold text-5xl">
            "Injustice Never Rules Forever"
          </h1>
          <p class="text-white py-2 text-2xl">__Seneca</p>
        </div>
      </div>
    </div>
  </div>
</template>
