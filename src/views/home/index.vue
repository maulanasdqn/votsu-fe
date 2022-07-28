<script setup lang="ts">
import Navbar from '../../components/navbar/main.vue'
import Layout from '../../components/layout/VtsLayout.vue'
import Gambar from '../../assets/Landing.png'
</script>
<template>
  <Navbar />
  <Layout>
    <section id="home" class="w-full h-screen">
      <div class="flex flex-col pt-12 w-full gap-y-12">
        <div class="flex md:flex-row flex-col w-full px-10">
          <div class="align-items-center justify-center md:pt-36 pt-4 md:px-18">
            <h1 class="text-4xl font-bold">VOTSU</h1>
            <h2 class="text-1xl py-4 dark:text-white font-medium w-full">
              Votsu adalah website voting suara sebagai alternatif untuk
              melakukan pemilihan ketua pegurus Himpuan Mahasiswa Teknik
              Informatika secara online.
            </h2>
            <div class="flex gap-2">
              <a href="#about">
                <Button text="Pelajari Lebih Lanjut"></Button>
              </a>
              <a href="#candidat">
                <Button is-with-border text="Lihat Kandidat"></Button>
              </a>
            </div>
          </div>
          <img :src="Gambar" alt="" />
        </div>
      </div>
    </section>
  </Layout>
  <Layout>
    <section id="about" class="h-screen">
      <div class="flex flex-col justify-center items-center pt-25">
        <h1 class="text-4xl font-bold text-left text-center">
          Keuntungan memakai Votsu
        </h1>
        <div class="grid gap-4 py-16 px-10 grid-cols-5">
          <div class="p-12 bg-green-700 rounded">
            <div class="flex flex-col py-4">
              <img
                src="https://img.icons8.com/external-basicons-line-edtgraphics/100/000000/external-Cellphone-device-activities-basicons-line-edtgraphics-3.png"
              />
              <h1 class="text-white font-bold py-2 text-center">
                Simpel dan Mudah Digunakan
              </h1>
            </div>
          </div>
          <div class="p-20 bg-green-700 rounded">
            <div class="flex flex-col py-4">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/you-plural.png"
              />
              <h1 class="text-center py-2 text-white font-bold">
                Terhindar Dari Kecurangan
              </h1>
            </div>
          </div>
          <div class="p-20 bg-green-700 rounded">
            <div class="flex flex-col py-6">
              <img
                src="https://img.icons8.com/ios-filled/100/000000/elections.png"
              />
              <h1 class="text-white text-center py-2 font-bold">
                Mengantisipasi Pemilih Gelap
              </h1>
            </div>
          </div>
          <div class="p-20 bg-green-700 rounded">
            <div class="flex flex-col py-6">
              <img
                src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-voting-politics-xnimrodx-lineal-xnimrodx-2.png"
              />
              <h1 class="text-center py-2 text-white font-bold">
                Dimana Saja dan Kapan Saja
              </h1>
            </div>
          </div>
          <div class="p-20 bg-green-700 rounded">
            <div>
              <img
                class="py-4"
                src="https://img.icons8.com/ios-filled/100/000000/laptop.png"
              />
              <h1 class="py-2 text-white font-bold">
                Menggunakan Teknologi Terbaru
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
  <Layout>
    <section class="h-auto" id="candidat">
      <h1 class="text-center font-bold text-4xl pt-20">Kandidat</h1>
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
    </section>
  </Layout>
</template>
