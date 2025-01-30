<script setup lang="ts">
import Landing from '@/views/Landing.vue'
import Navbar from '@/views/Navbar.vue'

import { provide } from 'vue'
import { useCookies } from 'vue3-cookies'
import { useAuthStore } from '@/stores/authStore';

const { cookies } = useCookies()
provide('cookies', cookies)

const authStore = useAuthStore();

// Initialize auth state when app mounts
authStore.initialize();


</script>

<template>
  <Navbar></Navbar>
  <router-view />
</template>


