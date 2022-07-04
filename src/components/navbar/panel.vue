<script setup lang="ts">
import HomeBtn from '../../assets/icons/home.svg'
import ElecBtn from '../../assets/icons/elections.svg'
import LogoutBtn from '../../assets/icons/logout.svg'
</script>
<template>
  <nav
    class="flex bg-gray-50 h-auto drop-shadow-md py-4 px-3 w-full gap-x-4 justify-center items-start"
  >
    <div class="rounded-xl p-2 border-1 border-black-300">
      <img width="30" :src="HomeBtn" alt="" />
    </div>
    <div class="rounded-xl p-2 border-1 border-balck-300">
      <img width="30" :src="ElecBtn" alt="" />
    </div>
    <div class="rounded-xl p-2 border-1 border-balck-300">
      <img width="30" :src="LogoutBtn" alt="" />
    </div>
  </nav>
</template>
