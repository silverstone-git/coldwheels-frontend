<template>
  <div class="p-4 w-full h-full">
    <div class="h-full w-full card border rounded-lg p-4">
      {{ car.Make }} {{ car.ModelName }} {{ car.EngineSize }}
      {{ car.ID }}
    <div class="carousel w-full">
        <div v-for="(imageURL, index) in car.ImageURLs" :id="`image-div-${index}-${car.ID}`" :key="index" class="carousel-item py-4 relative w-full">
        <img
          :src="imageURL"
          class="w-full h-full bg-cover bg-center rounded-lg" 
        />
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a :href="`#image-div-${cycle(index, -1, car.ImageURLs.length)}-${car.ID}`" class="btn btn-circle">❮</a>
            <a :href="`#image-div-${cycle(index, 1, car.ImageURLs.length)}-${car.ID}`" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
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
  console.log("props: ", props);

  const cycle = (index: number, incrementor: number, size: number) => {
    if((index + incrementor) > size - 1) {
      return 0;
    }  else if ((index + incrementor) < 0) {
      return size - 1;
    }
    return index + incrementor;
  }

</script>
