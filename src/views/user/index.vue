<script setup lang="ts">
import { onMounted } from "vue";
import { userData } from "../../composables/auth";
import useUsersStore from "../../store/users";
const store = useUsersStore();

onMounted(async () => {
  const res = await store.retrieveUserMe();
  userData.value = res;
});
</script>
<template>
  <Dashboard>
    <Empty
      v-if="!userData.is_hosen"
      has-button
      text="Anda belum memilih kandidat manapun"
      to="/user/election"
    />
    <div
      v-else
      class="flex flex-col gap-y-5 px-6 h-full justify-center md:justify-start w-full items-start items-center md:items-start md:p-8"
    >
      <h1 class="text-black-900 font-medium text-1xl md:text-3xl lg:text-4xl">
        Kandidat yang dipilih
      </h1>
      <div
        class="flex md:max-w-2/3 bg-white shadow-md w-full h-auto items-start px-6 gap-x-4"
      >
        <img class="w-1/2" src="https://www.elections.ab.ca/wp-content/uploads/Candidate.png" alt="">
        <div class="flex flex-col gap-y-2">
          <h1 class="text-black-900 font-bold text-1xl md:text-2xl">
            {{ userData.candidate.fullname }}
          </h1>
          <h1 class="text-black-900 font-medium text-1xl md:text-2xl">
            {{ userData.candidate.student_id }}
          </h1>
          <h1 class="text-black-900 font-medium text-1xl md:text-2xl">
            {{ userData.candidate.voted }}
          </h1>
        </div>
      </div>
    </div>
  </Dashboard>
</template>
