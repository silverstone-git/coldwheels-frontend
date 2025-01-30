<template>
  <button @click="handleLogout" class="btn btn-error rounded-full">Logout</button>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

const router = useRouter();
const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
  router.push({ name: 'landing' });
  this.$forceUpdate();
};
</script>
