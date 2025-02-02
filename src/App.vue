<script setup lang="ts">
import Navbar from '@views/Navbar.vue'

import { provide } from 'vue'
import { useCookies } from 'vue3-cookies'
import { useAuthStore } from '@stores/authStore';
import { Theme, selectTheme } from '@stores/theme';
import Toast from '@views/Toast.vue'

const { cookies } = useCookies()
provide('cookies', cookies)

const authStore = useAuthStore();

const initTheme: Theme = (cookies.get('theme') ?? Theme.Cyberpunk) as Theme
selectTheme(initTheme);

// Initialize auth state when app mounts
authStore.initialize();

</script>

<template>
  <Navbar></Navbar>
  <Suspense>
    <router-view />
  </Suspense>
  <Toast />
</template>


