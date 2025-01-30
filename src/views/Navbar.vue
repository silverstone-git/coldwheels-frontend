<script setup lang="ts">
  import { useAuthStore } from "@stores/authStore";
  import LogoutButton from "@views/LogoutButton.vue";
  import { selectTheme, Theme, themesArr } from '@stores/theme';
  const authStore = useAuthStore();
  const loggedIn = authStore.loggedIn;

  const handleSelectChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      const value = target.value as Theme;
      selectTheme(value);
  };

</script>

<template>
  <div class="flex w-full h-[7vh] bg-black/50 justify-between">
    
    <router-link to="/" class="flex gap-4 items-center pl-4 font-mono text-sky-100 bold">
      <div class=" text-5xl">❄</div>
      <div class=" text-2xl ">
        Cold Wheels
      </div>
      <div class=" text-5xl">❄</div>
    </router-link>
    <div class="flex items-center gap-2 pr-4">

      <select @change="handleSelectChange" class="select select-primary rounded-full">
        <option disabled selected>Theme</option>
        <option v-for="curTheme in themesArr" :key="curTheme">
          {{ curTheme }}
        </option>
      </select>

      <router-link v-if="!loggedIn" to="/login" class="btn rounded-full">Login</router-link>
      <router-link v-if="!loggedIn" to="/signup" class="btn rounded-full">Signup</router-link>
      <router-link to="/dashboard" class="btn rounded-full">Dashboard</router-link>
      <LogoutButton v-if="loggedIn" />
    </div>
  </div>
</template>
