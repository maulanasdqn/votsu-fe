<script setup lang="ts">
import { onMounted, ref } from "vue";
import useCandidateStore from "../../store/candidate";
import { CandidateDto } from "../../utilities/dto/candidate.dto";

const store = useCandidateStore();

let candidateData = ref<CandidateDto[]>([])

onMounted(async () => {
  store.fetchCandidate();
  candidateData.value = store.getCandidate
});

</script>
<template>
  <Dashboard>
    <Empty
      v-if="!store.getCandidate"
      text="Belum ada kandidat yang menyalonkan diri"
    />
    <div
      v-for="(item, index) in candidateData"
      :key="index"
      class="flex flex-col w-full h-full items-center justify-center gap-x-4"
    >
      <div class="flex flex-col gap-y-4 bg-blue-100 w-auto p-4 rounded-lg max-w-auto">
        <h1 class="text-black-900 font-medium text-2xl">
          {{ item.fullname }}
        </h1>
        <h1 class="text-black-900 font-medium text-2xl">
          {{ item.student_id }}
        </h1>
      </div>
    </div>
  </Dashboard>
</template>
