<template>
  <div>

    <!--  IMAGE -->
    <div class="h-[40vh] w-full relative overflow-hidden">
      <div class="absolute h-full w-full flex justify-center items-center">
        <CarCarousel :image-urls="ImageURLs" :car-id="ID" />
      </div>
    </div>


    <div class="px-[10vw] pt-7">
      <!--  Title -->
      <div class="font-bold text-3xl">{{ route.query.Make }} {{ route.query.ModelName}}</div>

      <!--  Specs -->
      <div class="overflow-x-auto pt-12">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="text-lg">Specification</th>
              <th class="text-lg">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-italic text-lg">Year</td>
              <td class="text-lg">{{ route.query.Year }}</td>
            </tr>
            <tr>
              <td class="font-italic text-lg">Engine Size</td>
              <td class="text-lg">{{ route.query.EngineSize }}</td>
            </tr>
            <tr>
              <td class="font-italic text-lg">Fuel Type</td>
              <td class="text-lg">{{ route.query.FuelType }}</td>
            </tr>
            <tr>
              <td class="font-italic text-lg">Transmission</td>
              <td class="text-lg">{{ route.query.Transmission }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--  Description -->
      <div class="pt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae placeat mollitia sapiente quis, est accusamus error? Commodi id nemo amet blanditiis error? Doloremque saepe eaque obcaecati suscipit. Vero, est.</div>

    </div>

    <!--  more cars floating right for viewing -->
    <div></div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import CarCarousel from '@/views/CarCarousel.vue';

  const route = useRoute();

  const ImageURLs = (route.query.ImageURLs as string[])
  const ID = (route.query.ID as string)


  console.log("hie");
  console.log(route.query.ID);
  console.log(route.query.CreatedAt);
  console.log(route.query.UpdatedAt);
  console.log(route.query.ImageURLs);
</script>
