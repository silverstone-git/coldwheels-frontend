<template>
  <div v-if="toastStore.content != ''" class="toast">
    <div class="alert alert-info">
      <span>{{ toastStore.content }}</span>
    </div>
  </div>

</template>

<script setup lang="ts">
  import { useToastStore } from '@stores/toastStore';
  const toastStore = useToastStore();

</script>

