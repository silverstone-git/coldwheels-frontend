<template>
  <div @click="openCarPage(car)" class="p-4 w-full h-full cursor-pointer">
    <div class="h-full w-full card border rounded-lg p-4">
      <div class="h-16 text-lg flex items-start">{{ car.Make }} {{ car.ModelName }} {{ car.Year }}</div> 
      <CarCarousel :image-urls="car.ImageURLs" :car-id="car.ID" />
    </div>
  </div>
</template>


<script setup lang="ts">
  //
  import type { CarType } from '@/lib/model';
  import router from '@/router';
  import CarCarousel from '@views/CarCarousel.vue';

  interface Props {
    car: CarType,
  }

  const props = defineProps<Props>()
  console.log("props: ", props);


  const openCarPage = async (carToBePassed: CarType) => {
    // maybe give it to a store for caching and then hitting when actually loading it
    await router.push({name: 'car', query: Object(carToBePassed)});
  }

</script>
