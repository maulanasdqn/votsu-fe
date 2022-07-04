<script setup lang="ts">
import Navbar from '../../components/navbar/main.vue'
import Layout from '../../components/layout/VtsLayout.vue'
import Banner from '../../assets/illustrations/banner-1.jpg'
import Button from '../../components/common/VtsButton.vue'
</script>
<template>
  <Navbar />
  <Layout>
    <div class="flex flex-col w-full md:w-2/3 gap-y-6">
      <h1 class="text-6xl dark:text-white font-bold font-sans">Votsu</h1>
      <h2 class="text-1xl dark:text-white font-medium font-sans">
        Votsu adalah website voting suara sebagai alternatif untuk melakukan
        pemilihan ketua pegurus Himpuan Mahasiswa Teknik Informatika secara
        online. Sistem informasi e-voting merupakan bentuk dari digitalisas
        proses pemungutan suara yang dimana tugasnya meliputi pemilihan ketua
        sebuah oraganisasi di kalangan mahasiswa. Yang dimulai dari pendaftaran
        calon pemimpin dan wakilnya serta calon pemilih. Karena dengan
        digitalisasi pemungutan suara ini proses pemilihan menjadi lebih efisien
        dan mudah serta bisa meminimalisir tingkat kecurangan dibandingkan
        dengan cara konvensional.
      </h2>
    </div>
    <div class="hidden w-auto h-auto items-start md:flex">
      <img :src="Banner" alt="" />
    </div>
  </Layout>
</template>
