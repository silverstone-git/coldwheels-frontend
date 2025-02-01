<template>
  <div class="p-4 w-full h-full">
    <div class="h-full w-full card border rounded-lg p-4">
      {{ car.Make }} {{ car.ModelName }} {{ car.EngineSize }}
      {{ car.ID }}
    </div>
  </div>
</template>


<script setup lang="ts">
  //
  import type { CarType } from '@/lib/model';

  interface Props {
    car: CarType,
  }

  const props = defineProps<Props>()

</script>
