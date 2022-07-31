<script lang="ts">
import {
  onLogout,
  userData,
  getAuthenticatedUser,
  setAuthenticatedUser,
} from "../../composables/auth";
import ProfileAvatar from "vue-profile-avatar";

const menuLink = [
  {
    to: "/user/dashboard",
    name: "Dashboard",
    permission: 1,
    icon: "fa-solid fa-chart-line",
  },
  {
    to: "/user/election",
    name: "Pemilihan",
    permission: 1,
    icon: "fa-solid fa-users",
  },

  {
    to: "/crew/dashboard",
    name: "Dashboard",
    permission: 2,
    icon: "fa-solid fa-chart-line",
  },
  {
    to: "/crew/users",
    name: "Akun Pemilih",
    permission: 2,
    icon: "fa-solid fa-chart-line",
  },
  {
    to: "/crew/candidate",
    name: "Akun Kandidat",
    permission: 2,
    icon: "fa-solid fa-chart-line",
  },
  {
    to: "/",
    name: "Keluar",
    permission: 2,
    icon: "fa-solid fa-backspace",
  },
  {
    to: "/",
    name: "Keluar",
    permission: 1,
    icon: "fa-solid fa-backspace",
  },
];

const menuFiltered = () => {
  return menuLink.filter((x) => x.permission === userData.value.role);
};

export default {
  components: {
    ProfileAvatar,
  },
  async setup() {
    if (!localStorage.getItem("authenticatedUser")) {
      const resUser = await setAuthenticatedUser();
      userData.value.fullname = await resUser?.fullname;
      userData.value.role = await resUser?.role;
    }
    const resUser = await getAuthenticatedUser();
    userData.value.fullname = await resUser?.fullname;
    userData.value.role = await resUser?.role;
    return {
      userData,
      onLogout,
      menuFiltered,
    };
  },
};
</script>
<template>
  <div
    class="w-1/3 hidden h-full shadow-md bg-white md:flex flex-col gap-y-4 max-w-xs"
    id="sidenavSecExample"
  >
    <div class="pt-4 px-6">
      <div class="flex items-center bg-blue-300 rounded-md">
        <div class="lg:flex hidden items-center justify-center w-auto px-2">
          <ProfileAvatar :username="userData.fullname" color-type="pastel" />
        </div>
        <div class="grow bg-blue-400 py-2 px-2 rounded-lg">
          <p class="text-sm font-semibold text-white">
            {{ userData.fullname }}
          </p>
          <span class="text-sm font-normal text-white">{{
            userData?.role === 1 ? "Pemilih" : "Panitia"
          }}</span>
        </div>
      </div>
    </div>
    <hr class="bg-gray-200 text-gray-200" />
    <div class="flex flex-col">
      <ul
        class="relative pt-1 px-6 flex flex-col"
        v-for="(menu, index) in menuFiltered()"
        :key="index"
      >
        <router-link
          v-slot="{ isActive }"
          @click="menu.name === 'Keluar' ? onLogout() : ''"
          class="gap-y-1 flex flex-col"
          :to="menu.to"
        >
          <span class="p-4 rounded-lg" :class="isActive ? 'bg-gray-100' : 'bg-white'">
            <font-awesome-icon :icon="menu.icon" />
            {{ menu.name }}
          </span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
