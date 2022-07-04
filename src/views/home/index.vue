<script setup lang="ts">
import Navbar from '../../components/navbar/main.vue'
import Layout from '../../components/layout/VtsLayout.vue'
import Banner from '../../assets/illustrations/banner-1.jpg'
</script>
<template>
  <Navbar />
  <Layout
    class="md:items-center py-20 md:py-0 justify-start flex-col md:flex-row"
  >
    <div class="flex flex-col w-full md:w-2/3 gap-y-6">
      <h1 class="text-6xl dark:text-white font-bold font-sans">Votsu</h1>
      <h2 class="text-1xl dark:text-white font-medium font-sans">
        Votsu adalah website voting suara sebagai alternatif untuk melakukan
        pemilihan ketua pegurus Himpuan Mahasiswa Teknik Informatika secara
        online.
      </h2>
    </div>
    <div class="w-auto h-auto justify-center md:flex">
      <img :src="Banner" alt="" />
    </div>
  </Layout>
</template>
