<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { TokenService } from '../../services/token/index.service'
import { useRouter } from 'vue-router'
import useAuthStore from '../../store/users'

const store = useAuthStore()
const router = useRouter()

const currentUsers = ref({
  fullname: '',
  role: '',
})

onBeforeMount(async () => {
  const resUsers = await store.me()
  currentUsers.value.fullname = resUsers.fullname
  currentUsers.value.role = resUsers.role_id === 1 ? 'Pemilih' : 'Panitia'
})

const onLogout = () => {
  TokenService.removeToken()
  router.push('/')
}
</script>
<template>
  <div
    class="w-1/3 hidden h-full shadow-md bg-white md:flex flex-col gap-y-4"
    id="sidenavSecExample"
  >
    <div class="pt-4 px-6">
      <div class="flex items-center bg-blue-300 rounded-md">
        <div class="flex items-center justify-center w-auto px-2">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
            class="rounded-full w-10"
            alt="Avatar"
          />
        </div>
        <div class="grow bg-blue-400 py-2 px-2 rounded-lg">
          <p class="text-sm font-semibold text-white">
            {{ currentUsers.fullname }}
          </p>
          <span class="text-sm font-normal text-white">{{
            currentUsers.role
          }}</span>
        </div>
      </div>
    </div>
    <ul class="relative px-1 gap-y-2 flex flex-col">
      <li class="flex items-center px-4">
        <router-link to="/user/dashboard">Dashboard</router-link>
      </li>
      <li class="flex items-center px-4">
        <router-link to="/user/election">Pemilihan</router-link>
      </li>
      <li @click="onLogout()" class="flex items-center px-4">
        <span>Logout</span>
      </li>
    </ul>
  </div>
</template>
