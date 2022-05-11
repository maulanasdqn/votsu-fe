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
          Selamat datang kembali
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
            </div>
          </div>
          <span class="dark:text-white font-sans text-gray-600 font-medium"
            >Sudah ingat akun anda? mari 
            <router-link class="text-blue-400" to="/login"> Masuk Kembali</router-link>
          </span>
          <button
            class="dark:bg-gray-600 shadow-lg text-white font-bold border-2 border-gray-400 dark:text-white text-gray-400 rounded-full w-full px-3 py-2 text-1xl h-10"
          >
            KIRIM
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
