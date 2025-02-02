<template>
  <div class="carousel w-full">
      <div v-for="(imageUrl, index) in imageUrls" :id="`image-div-${index}-${carId}`" :key="index" class="carousel-item relative flex items-center overflow-hidden h-full w-full rounded-lg">
        <img
          :src="imageUrl"
          class="w-full h-full" 
        />
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a @click.stop="() => {}" :href="`#image-div-${cycle(index, -1, imageUrls.length)}-${carId}`" class="btn btn-circle">❮</a>
            <a @click.stop="() => {}" :href="`#image-div-${cycle(index, 1, imageUrls.length)}-${carId}`" class="btn btn-circle">❯</a>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
  
  interface CarCarouselProps {
    imageUrls: string[];
    carId: string;
    
  }

  defineProps<CarCarouselProps>()

  const cycle = (index: number, incrementor: number, size: number) => {
    if((index + incrementor) > size - 1) {
      return 0;
    }  else if ((index + incrementor) < 0) {
      return size - 1;
    }
    return index + incrementor;
  }
</script>
