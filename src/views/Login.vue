<template>

  <div class="flex justify-center items-center h-[93vh] w-full">
    <div class="card border shadow-xl rounded-lg w-1/2 h-1/2 flex justify-center items-center">
      <div class="card-body w-1/2 flex flex-col gap-6 items-center justify-center">
      <h2 class="card-title self-start ml-14">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input 
            v-model="email"
            type="email" 
            placeholder="Email" 
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary" :disabled="loading">
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </div>
        <div v-if="error" class="text-error mt-4">{{ error }}</div>
      </form>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { ref } from 'vue';
  import axios from '@/utils/axios';
  import { useAuthStore } from "@stores/authStore"
  import router from '@/router/index'


  const email = ref('');
  const password = ref('');
  const loading = ref(false);
  const error = ref('');
  const authStore = useAuthStore()
  var response: any;

  const handleLogin = async () => {
    try {
      loading.value = true;
      error.value = '';
      
      response = await axios.post('/api/login', {
        email: email.value,
        password: password.value
      });


      if (response.data.success == "success") {
        authStore.login(response.data.token);
        router.push({ name: 'dashboard' });
      }
    } catch (err) {
      error.value = response?.data?.message ?? 'Login failed';
      setTimeout(() => {
        error.value = '';
      }, 3000);
    } finally {
      loading.value = false;
    }
  };

</script>
