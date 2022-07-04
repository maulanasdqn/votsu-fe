<script setup lang="ts">
import BannerEmpty from '../../assets/illustrations/Bloging-Line.svg'
</script>
<template>
  <section class="flex flex-col justify-between w-full h-screen items-center">
    <div class="flex w-full h-full">
      <Sidebar />
      <div class="flex w-full justify-center flex-col items-center">
        <img width="400" :src="BannerEmpty" alt="" />
        <span class="text-md">Anda Belum memilih kandidat manapun</span>
      </div>
    </div>
    <BottomNavbar class="md:hidden" />
  </section>
</template>
