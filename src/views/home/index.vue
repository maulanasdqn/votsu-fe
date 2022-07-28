<script setup lang="ts">
import Navbar from '../../components/navbar/main.vue'
import Layout from '../../components/layout/VtsLayout.vue'
import Gambar from '../../assets/Landing.png'
</script>
<template>
  <Navbar />
  <Layout>
    <section id="home" class="w-full">
      <div class="flex flex-col w-full gap-y-12">
        <div class="flex md:flex-row flex-col w-full px-10">
          <div class="align-items-center justify-center md:pt-36 pt-4 md:px-18">
            <h1 class="text-4xl font-bold">VOTSU</h1>
            <h2 class="text-1xl py-4 dark:text-white font-medium w-full">
              Votsu adalah website voting suara sebagai alternatif untuk
              melakukan pemilihan ketua pegurus Himpuan Mahasiswa Teknik
              Informatika secara online.
            </h2>
            <div class="flex gap-2">
              <Button text="Pelajari Lebih Lanjut"></Button>
              <Button is-with-border text="Lihat Kandidat"></Button>
            </div>
          </div>
          <img :src="Gambar" alt="" />
        </div>
      </div>
    </section>
  </Layout>
  <Layout>
    <section class="" id="candidat">
      <h1 class="text-center font-bold text-4xl">Kandidat</h1>
      <p class="text-center text-gray">Pilih kandidat Terbaikmu</p>
      <div
        class="grid items-center md:px-40 px-8 py-4 gap-8 md:grid-cols-3 grid-cols-2"
      >
        <CardPoll
          class="shadow-md"
          candidate="Fahmi Sugiarto"
          image="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
          poll="20"
        />
        <CardPoll
          class="shadow-md"
          candidate="Fahmi Sugiarto"
          image="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
          poll="20"
        />
        <CardPoll
          class="shadow-md"
          candidate="Fahmi Sugiarto"
          image="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
          poll="20"
        />
        <CardPoll
          class="shadow-md"
          candidate="Fahmi Sugiarto"
          image="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
          poll="20"
        />
      </div>
      <div class="flex justify-end w-full items-center h-full"></div>
    </section>
  </Layout>
</template>
