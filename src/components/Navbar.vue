<script setup lang="ts">
</script>
<template>
  <div class="flex w-full h-[7vh] bg-black/50 justify-between">
    
    <div class="flex gap-4 items-center pl-4 font-mono text-sky-100 bold">
      <div class=" text-5xl">❄</div>
      <div class=" text-2xl ">
        Cold Wheels
      </div>
      <div class=" text-5xl">❄</div>
    </div>
    <div class="flex items-center gap-2 pr-4">
      <router-link to="/login" class="btn rounded-full">Login</router-link>
      <router-link to="/signup" class="btn rounded-full">Signup</router-link>
      <router-link to="/search" class="btn rounded-full">Search</router-link>
    </div>
  </div>
</template>
