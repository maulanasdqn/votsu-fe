<script setup lang="ts">
import Swal from 'sweetalert2'

interface props {
  image?: string
  candidate?: string
}
const props = withDefaults(defineProps<props>(), {
  image: '',
  candidate: '',
})

const chooseCandidate = async () => {
  try {
    Swal.fire({
      title: 'Apakah anda yakin untuk memilih kandidat ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Tidak',
      confirmButtonText: 'Iya',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Berhasil ',
          `Anda telah memilih kandidat ${props.candidate}`,
          'success'
        )
      }
    })
  } catch (error) {
    console.log(error)
    Swal.fire('Error :(', 'error')
  }
}
</script>

<template>
  <div class="flex justify-center">
    <div class="rounded-lg shadow-lg bg-white max-w-sm">
      <img class="rounded-t-lg p-0 md:p-15" :src="image" alt="" />

      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">
          {{ candidate }}
        </h5>
        <div class="flex justify-center items-center">
          <button
            @click="chooseCandidate()"
            type="button"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Pilih
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
