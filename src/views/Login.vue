<template>

  <div class="flex justify-center items-center h-[93vh] w-full">
    <div class="card border shadow-xl rounded-lg w-1/2 h-1/2 flex justify-center items-center">
      <div class="card-body w-1/2 flex flex-col gap-6 items-center justify-center">
      <h2 class="card-title self-start ml-20">Login</h2>
      <form class="flex flex-col gap-4" @submit.prevent="handleLogin">

        <div class="form-control">
          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
                v-model="email"
                type="email" 
                placeholder="Email" 
                class="grow" 
                required
            />
          </label>
        </div>


        <div class="form-control">

          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70">
              <path
                fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd" />
            </svg>
            <input 
                type="password" 
                class="grow" 
                v-model="password"
                placeholder="Password"
                required
              />
          </label>

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
