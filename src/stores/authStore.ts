// stores/authStore.js
import { defineStore } from 'pinia';
import { useCookies } from 'vue3-cookies';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
    user: null
  }),
  actions: {
    initialize() {
      const { cookies } = useCookies();
      this.loggedIn = !!cookies.get('auth_token');
    },
    login(token: any) {
      const { cookies } = useCookies();
      cookies.set('auth_token', token, '7d');
      this.loggedIn = true;
    },
    logout() {
      const { cookies } = useCookies();
      cookies.remove('auth_token');
      this.loggedIn = false;
    }
  }
});
