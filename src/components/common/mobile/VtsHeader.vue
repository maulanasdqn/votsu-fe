<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

interface props {
  title?: string;
  user?: string;
}

withDefaults(defineProps<props>(), {
  title: "",
  user: "",
});


</script>
<template>
  <header
    class="shadow-md h-12 flex items-center px-6 fixed top-0 w-full md:hidden"
  >
    <figure class="bg-blue-400 p-2 rounded-full h-auto w-auto">
      <figcaption class="text-xs text-white">{{ user }}</figcaption>
    </figure>
    <span class="w-full text-center">{{ title }}</span>
  </header>
</template>
