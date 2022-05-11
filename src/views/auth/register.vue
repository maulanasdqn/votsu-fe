<script setup lang="ts">
import { onUpdated } from "vue";
import useThemeStore from "../../store/theme";
import Navbar from "../../components/navbar/main.vue";
const storeTheme = useThemeStore();

console.log(storeTheme.getTheme);

onUpdated(() => {});
</script>
<template>
  <Navbar />
  <div
    class="flex h-screen justify-center items-center shadow-lg transition-all ease-in-out w-full dark:bg-gray-700 md:bg-white bg-yellow-100"
  >
    <div
      class="flex md:w-1/2 w-full rounded-lg bg-yellow-100 md:bg-yellow-200 dark:bg-gray-700 dark:md:bg-gray-500 h-auto p-8 flex-col justify-between gap-y-6"
    >
      <div class="flex justify-start items-start gap-y-2 flex-col">
        <h1
          class="dark:text-white font-sans text-gray-500 font-bold md:text-3xl text-2xl"
        >
          Mari bergabung bersama kami
        </h1>
        <span
          class="md:text-md text-sm text-left font-bold font-sans dark:text-white text-gray-500"
          >Silahkan isi data anda dengan benar</span
        >
      </div>
      <hr class="w-full bg-gray-600 dark:bg-white rounded my-2 shadow-md" />
      <form action="post">
        <div
          class="flex flex-col h-full items-center justify-center w-full gap-y-6"
        >
          <div class="flex flex-col gap-y-6 w-full items-center">
            <div class="flex flex-col w-full gap-y-6">
              <div class="flex flex-col gap-y-3">
                <label
                  for="email"
                  class="font-sans dark:text-white text-gray-500 text-sm"
                  >Email <span class="text-red-900 font-bold">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  class="px-3 py-3 bg-gray-100 border shadow-md border-yellow-300 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:ring-yellow-200 dark:focus:ring-gray-400 w-auto rounded-md sm:text-sm focus:ring-1"
                  placeholder="maulana@psu.org"
                />
              </div>
              <div class="flex flex-col gap-y-3">
                <label
                  for="password"
                  class="font-sans dark:text-white text-gray-500 text-sm"
                  >Kata sandi <span class="text-red-900 font-bold">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  class="px-3 py-3 bg-gray-100 border shadow-md border-yellow-300 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:border-yellow-300 dark:focus:ring-gray-400 focus:ring-yellow-200 w-auto rounded-md sm:text-sm focus:ring-1"
                  placeholder="Masukkan kata sandi anda"
                />
              </div>
              <div class="flex flex-col gap-y-3">
                <label
                  for="email"
                  class="font-sans dark:text-white text-gray-500 text-sm"
                  >Konfirmasi kata sandi
                  <span class="text-red-900 font-bold">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  class="px-3 py-3 bg-gray-100 border shadow-md border-yellow-300 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:border-yellow-300 focus:ring-yellow-300 dark:focus:ring-gray-400 w-auto rounded-md sm:text-sm focus:ring-1"
                  placeholder="Masukkan kata sandi anda"
                />
              </div>
            </div>
            <div class="flex flex-col gap-y-3 w-full">
              <label
                for="role"
                class="font-sans dark:text-white text-gray-500 text-sm"
                >Role
                <span class="text-red-900 font-bold">*</span>
              </label>
              <select
                class="px-2 shadow-md py-[12px] md:py-3.5 w-full border-1 dark:focus:border-gray-300 placeholder-slate-500 focus:border-yellow-300 focus:ring-yellow-200 border-yellow-200 focus:outline-none text-slate-500 font-medium rounded-lg bg-white dark:border-gray-300 focus:ring-1 bg-gray-100 text-md"
                name="role"
                id="role"
              >
                <option selected disabled class="rounded">
                  Silahkan Pilih
                </option>
                <option value="app" class="text-gray-400 bg-gray-100 rounded">
                  Yahahaha
                </option>
              </select>
              <div class="flex font-sans items-center gap-x-4 py-2">
                <input
                  type="checkbox"
                  id="syarat"
                  class="border-yellow-200 border-1"
                />
                <label class="text-gray-500 dark:text-white" for="syarat"
                  >Setuju syarat dan ketentuan</label
                >
              </div>
            </div>
          </div>

          <button
            class="dark:bg-gray-600 shadow-lg text-white font-bold border-2 border-gray-400 dark:text-white text-gray-400 rounded-full w-full px-3 py-2 text-1xl h-10 dark:focus:ring-gray-200"
          >
            REGISTER</button
          ><span class="dark:text-white font-sans text-gray-600 font-medium"
            >Sudah punya akun? silahkan
            <router-link class="text-blue-400" to="/login"> Masuk </router-link>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>
