<script setup lang="ts">
interface props {
  color?: string;
  text?: string;
  isSmall?: boolean;
  isWithBorder?: boolean;
  isFull?: boolean;
}

const props = withDefaults(defineProps<props>(), {
  color: "",
  text: "",
  isSmall: false,
  isWithBorder: false,
  isFull: false,
});
</script>
<template>
  <button
    class="dark:bg-gray-400 bg-blue-400 h-auto md:px-6 md:py-3 p-3 rounded-xl font-bold text-white shadow-lg hover:bg-blue-500 dark:hover:bg-gray-500 disabled:bg-gray-100 disabled:text-gray-300 disabled:hover:bg-gray-200 text-xs md:text-md"
    :class="
      ({ 'px-4 py-3': isSmall },
      { 'w-full': isFull },
      {
        'border-2 border-blue-400 dark:border-white bg-white dark:text-white dark:bg-gray-800 dark:text-gray-400 text-blue-400 hover:text-white':
          isWithBorder,
      })
    "
  >
    {{ text }}
  </button>
</template>
