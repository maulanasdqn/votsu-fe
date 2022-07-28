<script setup lang="ts">
import { onBeforeMount, onUpdated, computed, ref, watch } from 'vue'
import { TokenService } from '../../services/token/index.service'
import useThemeStore from '../../store/theme'
import Logo from '../../assets/logo/LogoVotsu.svg'

const storeTheme = useThemeStore()

const isLoggedIn = TokenService.getToken()
const isMobileMenu = ref(false)

const isDark = ref(false)
</script>
<template>
  <nav
    class="sticky top-0 dark:bg-gray-800 bg-white flex w-full h-20 py-4 md:pl-16 justify-between transition-all ease-in-out font-sans"
  >
    <div class="flex px-4 gap-x-4 items-center">
      <h1 class="dark:text-white text-gray-600 font-bold text-3xl">
        <img width="60" :src="Logo" alt="" />
      </h1>
    </div>
    <div class="items-center hidden md:flex text-gray-600 gap-8 cursor-pointer">
      <span><a href="#home">Home</a></span>
      <span> <a href="#about">About</a></span>
      <span> <a href="#candidat">Candidate</a></span>
    </div>

    <div class="flex justify-beetween gap-x-4 items-center px-6 cursor-pointer">
      <div
        v-if="!isLoggedIn"
        class="hidden md:flex justify-center items-center dark:text-white gap-x-3 text-gray-700"
      >
        <router-link
          to="/login"
          class="text-gray-700 text-1xl font-bold flex dark:bg-white dark:text-gray-800 items-center justify-center dark:border-2 dark:border-gray-300 w-auto h-auto dark:rounded-lg p-2"
          >Masuk</router-link
        >
        <router-link
          to="/register"
          class="text-1xl font-bold flex items-center justify-center border-2 dark:bg-gray-800 bg-green-800 dark:rounded-none rounded-lg dark:border-none p-2 text-white"
          >Daftar</router-link
        >
      </div>
      <div
        v-else
        class="hidden md:flex justify-center items-center dark:text-white gap-x-3 text-gray-700"
      >
        <router-link
          to="/user/dashboard"
          class="text-gray-700 text-1xl font-bold flex dark:bg-white dark:text-gray-800 items-center justify-center dark:border-2 dark:border-gray-300 w-auto h-auto dark:rounded-lg p-2"
          >Dashboard</router-link
        >
      </div>
      <div
        class="flex md:hidden justify-center items-center dark:text-white gap-x-3 text-gray-700"
      >
        <span
          @click="isMobileMenu = !isMobileMenu"
          class="text-gray-700 text-1xl font-bold flex dark:bg-white dark:text-gray-800 items-center justify-center dark:border-2 dark:border-gray-300 w-auto h-auto dark:rounded-lg p-2"
          >Menu</span
        >
      </div>
      <div
        v-if="isMobileMenu"
        class="flex flex-col absolute top-14 bg-gray-100 w-auto py-2 px-3 rounded-md gap-y-3"
      >
        <router-link to="/login">Masuk</router-link>
        <router-link to="/register">Daftar</router-link>
      </div>
      <div
        class="flex h-5 w-10 rounded-xl transition-all justify-between dark:bg-white ease-in ease-out bg-gray-100 border-1 border-gray-300 dark:border-gray-400"
      >
        <svg
          v-if="isDark"
          class="w-3 mr-[4px] text-white order-2"
          viewBox="0 0 1000 1000"
        >
          <path
            d="M525.3,989.5C241.2,989.5,10,758.3,10,474.1c0-196.8,109.6-373.6,285.9-461.4c7.9-3.9,17.5-2.4,23.7,3.8c6.2,6.2,7.9,15.8,4,23.7c-32.2,65.4-48.5,135.7-48.5,208.9c0,261.4,212.7,474.1,474.1,474.1c74,0,145-16.7,211-49.5c7.9-3.9,17.5-2.4,23.7,3.8c6.3,6.3,7.9,15.8,3.9,23.7C900.5,879,723.3,989.5,525.3,989.5z"
          /></svg
        ><svg v-else class="w-3 ml-0.5 text-white" viewBox="0 0 1000 1000">
          <path
            d="M500,255c44.4,0,85.4,11,123,32.9c37.5,21.9,67.3,51.6,89.2,89.2C734,414.6,745,455.6,745,500s-11,85.4-32.9,123c-21.9,37.5-51.6,67.3-89.2,89.2C585.4,734,544.4,745,500,745s-85.4-11-123-32.9c-37.5-21.9-67.3-51.6-89.2-89.2C266,585.4,255,544.4,255,500s11-85.4,32.9-123c21.9-37.5,51.6-67.3,89.2-89.2C414.6,266,455.6,255,500,255z M240.3,718.8c11.3,0,20.9,4,28.9,12.1c8,8.1,12,17.8,12,29c0,11.1-4,20.6-12.1,28.7l-57.7,57.7c-8.1,8.1-17.7,12.1-28.7,12.1c-11.3,0-20.9-4-28.9-12c-8-8-12-17.6-12-28.9c0-11.5,3.9-21.2,11.8-29l57.7-57.7C219.4,722.9,229.1,718.8,240.3,718.8L240.3,718.8z M500,826.7c11.3,0,20.9,4,28.9,12c8,8,12,17.6,12,28.9v81.7c0,11.3-4,20.9-12,28.9c-8,8-17.6,12-28.9,12c-11.3,0-20.9-4-28.9-12c-8-8-12-17.6-12-28.9v-81.7c0-11.3,4-20.9,12-28.9C479.1,830.7,488.7,826.7,500,826.7z M50.8,459.2h81.7c11.3,0,20.9,4,28.9,12c8,8,12,17.6,12,28.9c0,11.3-4,20.9-12,28.9c-8,8-17.6,12-28.9,12H50.8c-11.3,0-20.9-4-28.9-12c-8-8-12-17.6-12-28.9c0-11.3,4-20.9,12-28.9C29.9,463.2,39.6,459.2,50.8,459.2z M500,336.7c-45.1,0-83.6,16-115.5,47.9c-31.9,31.9-47.9,70.4-47.9,115.5s16,83.6,47.9,115.5c31.9,31.9,70.4,47.9,115.5,47.9s83.6-16,115.5-47.9c31.9-31.9,47.9-70.4,47.9-115.5s-16-83.6-47.9-115.5C583.6,352.6,545.1,336.7,500,336.7z M760,718.8c11.1,0,20.6,4,28.7,12.1l57.7,57.7c8.1,8.1,12.1,17.8,12.1,29c0,11.1-4,20.6-12.1,28.7s-17.7,12.1-28.7,12.1c-11.3,0-20.9-4-29-12.1L731,788.7c-7.9-7.9-11.8-17.4-11.8-28.7c0-11.3,4-20.9,12-29S748.7,718.8,760,718.8L760,718.8z M182.6,141.4c11.1,0,20.6,4,28.7,12.1l57.7,57.7c8.1,8.1,12.1,17.7,12.1,28.7c0,11.3-4,20.9-12,28.9c-8,8-17.6,12-28.9,12c-11.5,0-21.2-3.9-29-11.8l-57.7-57.7c-7.9-7.9-11.8-17.5-11.8-29c0-11.3,4-20.9,12-28.9C161.7,145.4,171.3,141.4,182.6,141.4L182.6,141.4z M500,10c11.3,0,20.9,4,28.9,12c8,8,12,17.6,12,28.9v81.7c0,11.3-4,20.9-12,28.9c-8,8-17.6,12-28.9,12c-11.3,0-20.9-4-28.9-12c-8-8-12-17.6-12-28.9V50.8c0-11.3,4-20.9,12-28.9C479.1,14,488.7,10,500,10z M867.5,459.2h81.7c11.3,0,20.9,4,28.9,12c8,8,12,17.6,12,28.9c0,11.3-4,20.9-12,28.9c-8,8-17.6,12-28.9,12h-81.7c-11.3,0-20.9-4-28.9-12c-8-8-12-17.6-12-28.9c0-11.3,4-20.9,12-28.9C846.6,463.2,856.2,459.2,867.5,459.2z M817.7,141.4c11.1,0,20.6,4,28.7,12.1s12.1,17.7,12.1,28.7c0,11.3-4,20.9-12.1,29L788.7,269c-7.9,7.9-17.4,11.8-28.7,11.8c-11.7,0-21.4-3.9-29.2-11.6c-7.8-7.8-11.6-17.5-11.6-29.2c0-11.3,3.9-20.8,11.8-28.7l57.7-57.7C796.8,145.5,806.5,141.4,817.7,141.4L817.7,141.4z"
          />
        </svg>
        <div
          class="flex transition-all order-2 dark:order-1 justify-center items-center rounded-full text-white dark:text-gray-500 dark:bg-blue-200 bg-gray-500 w-5.5"
        ></div>
      </div>
    </div>
  </nav>
</template>

<style>
a {
  text-decoration: none;
  color: none;
}
</style>
