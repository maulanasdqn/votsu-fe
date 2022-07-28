<script setup lang="ts">
interface props {
  color?: string
  isCenter?: boolean
}

const props = withDefaults(defineProps<props>(), {
  color: 'bg-blue-200',
  isCenter: false,
})
</script>
<template>
  <div
    class="flex flex-col h-screen w-full mt-8"
    :class="(color, { 'justify-center items-center': isCenter })"
  >
    <slot></slot>
  </div>
</template>
