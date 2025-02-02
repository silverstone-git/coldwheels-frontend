<template>
  <div @click="openCarPage(car)" class="p-4 w-full h-full cursor-pointer">
    <div class="h-full w-full card border rounded-lg p-4">
      {{ car.Make }} {{ car.ModelName }} {{ car.EngineSize }}
      {{ car.ID }}
    <div class="carousel w-full">
        <div v-for="(imageURL, index) in car.ImageURLs" :id="`image-div-${index}-${car.ID}`" :key="index" class="carousel-item py-4 relative overflow-hidden h-full w-full rounded-lg">
        <img
          :src="imageURL"
          class="w-full h-full object-cover bg-center" 
        />
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a @click.stop="() => {}" :href="`#image-div-${cycle(index, -1, car.ImageURLs.length)}-${car.ID}`" class="btn btn-circle">❮</a>
            <a @click.stop="() => {}" :href="`#image-div-${cycle(index, 1, car.ImageURLs.length)}-${car.ID}`" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>


<script setup lang="ts">
  //
  import type { CarType } from '@/lib/model';
import router from '@/router';

  interface Props {
    car: CarType,
  }

  const props = defineProps<Props>()
  console.log("props: ", props);

  const cycle = (index: number, incrementor: number, size: number) => {
    if((index + incrementor) > size - 1) {
      return 0;
    }  else if ((index + incrementor) < 0) {
      return size - 1;
    }
    return index + incrementor;
  }

  const openCarPage = async (carToBePassed: CarType) => {
    // maybe give it to a store for caching and then hitting when actually loading it
    await router.push({name: 'car', query: Object(carToBePassed)});
  }

</script>
