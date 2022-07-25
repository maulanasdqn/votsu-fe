<script setup lang="ts">
interface props {
  color?: string;
  isCenter?: boolean;
}

const props = withDefaults(defineProps<props>(), {
  color: "bg-blue-200",
  isCenter: false,
});
</script>
<template>
  <div
    class="flex h-screen items-start justify-between w-full bg-white md:p-16 px-4 dark:bg-gray-700"
    :class="(color, { 'justify-center items-center': isCenter })"
  >
    <slot></slot>
  </div>
</template>
