<script setup lang="ts">
import { ref } from 'vue'
import Button from '../../components/common/VtsButton.vue'

const fullname = ref('')
const email = ref('')
const password = ref('')
const confirm_password = ref('')
const nim = ref('')

const checkValid = () => {
  if (
    fullname.value.length > 1 &&
    nim.value.includes('4103700') &&
    email.value.includes('@') &&
    email.value.length > 5 &&
    password.value.length > 8 &&
    password.value === confirm_password.value
  ) {
    return true
  } else {
    return false
  }
}
</script>
<template>
  <div
    class="flex h-screen justify-start items-center shadow-lg transition-all ease-in-out w-full md:bg-white bg-yellow-100"
  >
    <div
      class="flex w-full lg:w-1/2 md:w-full md:px-[60px] px-8 h-full justify-center bg-white md:bg-white dark:bg-gray-700 h-auto py-8 flex-col gap-y-6"
    >
      <div class="flex flex-col gap-y-8 w-full">
        <div class="flex justify-start items-start gap-y-2 flex-col">
          <h1
            class="dark:text-white font-sans text-gray-800 font-bold md:text-3xl text-2xl"
          >
            Mari bergabung bersama kami
          </h1>
          <span
            class="md:text-md text-sm text-left font-medium font-sans dark:text-white text-gray-500"
            >Silahkan isi data anda dengan benar</span
          >
        </div>
        <form action="post">
          <div
            class="flex flex-col h-full items-center justify-center w-full gap-y-6"
          >
            <div class="flex flex-col gap-y-6 w-full items-center">
              <div class="flex flex-col w-full gap-y-6">
                <div class="flex flex-col gap-y-3">
                  <label
                    for="fullname"
                    class="font-sans dark:text-white text-gray-500 text-sm"
                    >Nama Lengkap <span class="text-red-700 font-bold">*</span>
                  </label>
                  <input
                    v-model="fullname"
                    type="text"
                    name="fullname"
                    class="px-3 py-3 bg-gray-100 border shadow-md border-blue-200 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:ring-yellow-200 dark:focus:ring-gray-400 w-auto rounded-md sm:text-sm focus:ring-1"
                    placeholder="Maulana Sodiqin"
                  />
                </div>
                <div class="flex flex-col gap-y-3">
                  <label
                    for="student_id"
                    class="font-sans dark:text-white text-gray-500 text-sm"
                    >Nomor induk mahasiswa
                    <span class="text-red-700 font-bold">*</span>
                  </label>
                  <input
                    v-model="nim"
                    type="text"
                    name="student_id"
                    class="px-3 py-3 bg-gray-100 border shadow-md border-blue-200 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:ring-yellow-200 dark:focus:ring-gray-400 w-auto rounded-md sm:text-sm focus:ring-1"
                    placeholder="410370062*****"
                  />
                </div>
                <div class="flex flex-col gap-y-3">
                  <label
                    for="email"
                    class="font-sans dark:text-white text-gray-500 text-sm"
                    >Email <span class="text-red-700 font-bold">*</span>
                  </label>
                  <input
                    v-model="email"
                    type="email"
                    name="email"
                    class="px-3 py-3 bg-gray-100 border shadow-md border-blue-200 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:ring-yellow-200 dark:focus:ring-gray-400 w-auto rounded-md sm:text-sm focus:ring-1"
                    placeholder="maulana@psu.org"
                  />
                </div>
                <div class="flex flex-col gap-y-3">
                  <label
                    for="password"
                    class="font-sans dark:text-white text-gray-500 text-sm"
                    >Kata sandi <span class="text-red-700 font-bold">*</span>
                  </label>
                  <input
                    v-model="password"
                    type="password"
                    name="password"
                    class="px-3 py-3 bg-gray-100 border shadow-md border-blue-200 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:border-yellow-300 dark:focus:ring-gray-400 focus:ring-yellow-200 w-auto rounded-md sm:text-sm focus:ring-1"
                    placeholder="Masukkan kata sandi anda"
                  />
                </div>
                <div class="flex flex-col gap-y-3">
                  <label
                    for="confirm_password"
                    class="font-sans dark:text-white text-gray-500 text-sm"
                    >Konfirmasi kata sandi
                    <span class="text-red-700 font-bold">*</span>
                  </label>
                  <input
                    v-model="confirm_password"
                    type="password"
                    name="password"
                    class="px-3 py-3 bg-gray-100 border shadow-md border-blue-200 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:border-yellow-300 dark:focus:ring-gray-400 focus:ring-yellow-200 w-auto rounded-md sm:text-sm focus:ring-1"
                    placeholder="Masukkan lagi kata sandi anda"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-start w-full items-center gap-x-4">
              <span
                class="dark:text-white order-2 font-sans text-gray-500 font-medium"
                >Setujui syarat & ketentuan yang berlaku
              </span>
              <input type="checkbox" name="" id="" />
            </div>

            <Button
              class="w-full"
              text="Daftar Sekarang"
              :disabled="!checkValid()"
            />

            <span class="text-gray-500 dark:text-white font-medium font-sans"
              >Sudah memiliki akun?
              <router-link class="text-blue-400" to="/login">Masuk</router-link>
            </span>
          </div>
        </form>
        <span
          class="text-gray-500 text-center dark:text-white font-medium font-sans"
          >Kembali ke
          <router-link class="text-blue-400" to="/">Home</router-link>
        </span>
      </div>
    </div>
    <div
      class="lg:flex hidden w-full justify-center bg-gradient-to-bl from-blue-700 via-blue-400 to-blue-500 dark:bg-gray-700 h-full items-center"
    >
      <div
        class="lg:flex hidden w-full justify-center bg-gradient-to-bl from-blue-700 via-blue-400 to-blue-500 dark:bg-gray-700 h-full items-center"
      >
        <div class="flex flex-col gap-y-4">
          <h1 class="text-white lg:text-5xl md:text-4xl font-bold">
            l'exploitation de l'home par 'ihomme
          </h1>
          <span class="text-3xl font-medium text-gray-300 opacity-40"
            >― Soekarno</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
