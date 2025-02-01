<template>
  <div class="w-full flex items-center justify-center h-[93vh] ">
    <div class="w-9/12 h-11/12 p-8 card border shadow-xl rounded-lg">
      <div class="card-title">All cars!!</div>
      <div class="flex flex-wrap items-center h-full">
        <div v-for="car in cars" :key="car.ID" class="w-4/12 h-1/3">
          <Car :car="car" />
        </div>
      </div>
      <div class="w-1/2 self-center join grid grid-cols-3">
        <button @click="() => {
          if(page > 1)
            page--;
        }" class="join-item btn btn-outline" :class="{
          'prevDisabled': 'btn-disabled'
        }">Previous</button>
        <div class="join-item btn btn-outline">{{ page }}</div>
        <button @click="page++" class="join-item btn btn-outline">Next</button>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">

  import axiosInstance from '@/utils/axios';
  import type { CarType } from '@/lib/model'
  import Car from '@/views/Car.vue';
  import { ref, onMounted, watch, computed } from 'vue';

  const cars = ref<CarType[]>([]);
  const page = ref(1);
  const prevDisabled = computed(() => {
    return page.value == 1
  });

  const loadPage = async (pageNo: number) => {
   return (await axiosInstance.get(`/api/cars/${pageNo}`)).data
  }

  onMounted(async () => {
    cars.value = await loadPage(page.value);
  })

  watch(page, async (newPage, oldPage) => {
    cars.value = await loadPage(page.value);
    console.log("changed: ", newPage)
  })


</script>
