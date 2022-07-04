<script setup lang="ts">
import BannerEmpty from '../../assets/illustrations/Bloging-Line.svg'
import Button from '../../components/common/VtsButton.vue'
</script>
<template>
  <section class="flex flex-col justify-between w-full h-screen items-center">
    <div class="flex w-full h-full">
      <Sidebar />
      <div class="flex w-full justify-center flex-col items-center gap-y-2">
        <img width="400" :src="BannerEmpty" alt="" />
        <span class="text-md">Anda Belum memilih kandidat manapun</span>
        <Button is-with-border text="Ayo Segera Memilih" />
      </div>
    </div>
    <BottomNavbar class="md:hidden" />
  </section>
</template>
