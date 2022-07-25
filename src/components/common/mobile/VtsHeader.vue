<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import useAuthStore from '../../../store/users'

const store = useAuthStore()

const currentUsers = ref({
  fullname: '',
  role: '',
})

onBeforeMount(async () => {
  const resUsers = await store.me()
  currentUsers.value.fullname = resUsers.fullname
  currentUsers.value.role = resUsers.role_id === 1 ? 'Pemilih' : 'Panitia'
})

interface props {
  title?: string;
  user?: string;
}

withDefaults(defineProps<props>(), {
  title: "",
  user: "",
});
</script>
<template>
  <header
    class="shadow-md h-12 flex items-center px-6 fixed top-0 w-full md:hidden"
  >
    <figure class="bg-blue-400 p-2 rounded-full h-auto w-auto">
      <figcaption class="text-xs text-white">{{ user }}</figcaption>
    </figure>
    <span class="w-full text-center">{{ title }}</span>
  </header>
</template>
