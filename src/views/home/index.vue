<script setup lang="ts">
import { ref, onUpdated } from "vue";
import useThemeStore from "../../store/theme";
import Navbar from "../../components/navbar/main.vue";
const storeTheme = useThemeStore();

onUpdated(() => {});
</script>
<template>
  <Navbar />
  <div
    class="flex gap-x-3 h-full transition-all ease-in-out w-full dark:bg-gray-700 bg-white"
  >
    <div class="flex bg-slate-700 w-full h-auto">
      <div class="flex flex-col px-4 py-34 h-full items-start gap-y-6">
        <h1 class="dark:text-white text-gray-500 font-sans text-6xl">
          Online Voting dengan <span class="font-bold">V O T S U</span>
        </h1>
        <span class="text-white font-bold font-sans text-2xl leading-4 space-4"
          >Membuat pemilihan jadi semakin mudah</span
        >
      </div>
      <div class="flex">
        <img src="" alt="logo" />
      </div>
    </div>
  </div>
</template>
