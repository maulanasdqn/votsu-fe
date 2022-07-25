<script setup lang="ts">
import Navbar from '../../components/navbar/main.vue'
import Layout from '../../components/layout/VtsLayout.vue'
import Banner from '../../assets/illustrations/BannerIlustration.svg'
</script>
<template>
  <Navbar />
  <Layout>
    <div class="flex flex-col md:w-1/2 w-full gap-y-6 absolute px-4">
      <h1 class="text-6xl dark:text-white font-bold">Votsu</h1>
      <h2 class="text-1xl dark:text-white font-medium">
        Votsu adalah website voting suara sebagai alternatif untuk melakukan
        pemilihan ketua pegurus Himpuan Mahasiswa Teknik Informatika secara
        online.
      </h2>
      <div class="flex gap-x-4">
        <Button text="Pelajari Lebih Lanjut"></Button>
        <Button is-with-border text="Lihat Kandidat"></Button>
      </div>
      <div class="flex items-center gap-8">
        <CardPoll
          candidate="Fahmi Sugiarto"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
          poll="20"
        />
        <CardPoll
          candidate="Fahmi Sugiarto"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
          poll="20"
        />
        <CardPoll
          candidate="Fahmi Sugiarto"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
          poll="20"
        />
      </div>
    </div>
    <div class="flex justify-end w-full items-center h-full">
      <img class="sm:w-1/2 w-full pt-[160px] sm:p-0" :src="Banner" alt="" />
    </div>
  </Layout>
</template>
