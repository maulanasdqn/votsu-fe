<script setup lang="ts">
import HomeBtn from "../../assets/icons/home.svg";
import ElecBtn from "../../assets/icons/elections.svg";
import LogoutBtn from "../../assets/icons/logout.svg";
import { TokenService } from "../../services/token/index.service";
import { useRouter } from "vue-router";

const router = useRouter();

const onLogout = () => {
  router.push("/");
};

const goToElection = () => {
  router.push("/user/election");
};

const goToDashboard = () => {
  router.push("/user/dashboard");
};
</script>
<template>
  <nav
    class="flex fixed bottom-5 bg-gray-100 rounded-full h-auto drop-shadow-md py-4 px-6 w-auto gap-x-4 justify-center items-start md:hidden"
  >
    <div
      @click="goToDashboard()"
      class="rounded-xl p-2 border-1 border-black-300"
    >
      <img width="30" class="text-blue-400" :src="HomeBtn" alt="" />
    </div>
    <div
      @click="goToElection()"
      class="rounded-xl p-2 border-1 border-balck-300"
    >
      <img width="30" :src="ElecBtn" alt="" />
    </div>
    <div @click="onLogout()" class="rounded-xl p-2 border-1 border-balck-300">
      <img width="30" :src="LogoutBtn" alt="" />
    </div>
  </nav>
</template>
