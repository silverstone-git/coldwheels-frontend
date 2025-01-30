<template>
  <div class="flex justify-center items-center h-[93vh] w-full">
    <div class="card flex items-center border shadow-xl rounded-lg w-1/2 h-1/2">
      <div class="card-body flex flex-col gap-6 justify-center items-center w-1/2">
      <h2 class="card-title self-start ml-14">Create Account</h2>
      <form @submit.prevent="handleSignup">
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
          <button class="btn btn-secondary" :disabled="loading">
            {{ loading ? 'Creating account...' : 'Sign Up' }}
          </button>
        </div>
        <div v-if="error" class="text-error mt-4">{{ error }}</div>
        <div v-if="success" class="text-success mt-4">{{ success }}</div>
      </form>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { ref } from 'vue';
  import axios from '@/utils/axios';
  import router from '@/router/index'

  const email = ref('');
  const password = ref('');
  const loading = ref(false);
  const error = ref('');
  const success = ref('');

  const handleSignup = async () => {
    var response: any;
    try {
      loading.value = true;
      error.value = '';
      success.value = '';
      
      response = await axios.post('/api/signup', {
        email: email.value,
        password: password.value
      });

      console.log("respose is: ", response);

      if (response.data.success) {
        success.value = 'Account created successfully! Please login.';
        success.value = 'Account created successfully! Redirecting to login...';
        email.value = '';
        password.value = '';
        setTimeout(() => {
          router.push({ name: 'login' });
        }, 2000);
      }
    } catch (err) {
      error.value = response?.data?.message || 'Signup failed';
      setTimeout(() => error.value = '', 3000);
    } finally {
      loading.value = false;
    }
  };

</script>
