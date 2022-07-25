<script setup lang="ts">
interface props {
  image?: string
  candidate?: string
  poll?: string
}
const props = withDefaults(defineProps<props>(), {
  image: '',
  candidate: '',
  poll: '',
})
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
          <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">
            Jumlah Suara {{ poll }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
