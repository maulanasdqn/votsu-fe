<script setup lang="ts">
import BannerEmpty from "../../assets/illustrations/Bloging-Line.svg";
import Button from "../common/VtsButton.vue";

interface props {
  text?: string;
  hasButton?: boolean;
  to?: string;
}

const props = withDefaults(defineProps<props>(), {
  text: "Anda Belum Memilih Kandidat Manapun",
  hasButton: false,
  to: "",
});
</script>
<template>
  <div class="flex w-full justify-center flex-col items-center gap-y-2">
    <img width="400" :src="BannerEmpty" alt="" />
    <span class="text-md">{{ text }}</span>
    <router-link :to="to">
      <Button v-if="hasButton" is-with-border text="Ayo Segera Memilih" />
    </router-link>
  </div>
</template>
