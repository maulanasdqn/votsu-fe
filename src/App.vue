<script setup lang="ts">
import { useCommonStore } from './store/common'
const store = useCommonStore()

</script>
<template>
  <router-view />
  <Loading v-if="store.isLoading"/>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144&display=swap");
</style>
