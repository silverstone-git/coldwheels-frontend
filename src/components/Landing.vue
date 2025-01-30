<script setup lang="ts">
//import { ref } from 'vue'

//defineProps<{ msg: string }>()

//const count = ref(0)
</script>

<template>
  <div class="h-[93vh] w-full flex flex-col md:flex-row justify-center items-center ">
    <div class="flex flex-col gap-8 justify-center items-center w-4/12">
      <div class="flex flex-col gap-4 items-start self-start">
        <div class="translate-y-2">Welcome to</div>
        <div class="text-pink-yellow text-3xl font-extrabold">Cold Wheels:</div>
        <div>
          Where Your Automotive Dreams Take Shape
        </div>
      </div>
      
      <div>
        At Cold Wheels, we believe that every car enthusiast deserves a canvas as unique as their vision. Step into a world of unparalleled customization, where you can design, modify, and showcase your very own bespoke vehicles. Our elite platform invites you to unleash your creativity and indulge in the luxury of personalization.

      </div>

      <div class="font-bold self-start">
        Join the Revolution
      </div>
      <div>
        Elevate your automotive experience today. Sign up for Cold Wheels and embark on a journey of creativity, luxury, and innovation. Your dream car awaits—let’s build it together.
      </div>
    </div>
    <div class="w-6/12 h-full flex items-center justify-end">
      <div class="h-1/2 w-fit rounded-lg overflow-hidden bg-cover bg-center"> <image class="w-[30vw]" src="/car-imagen-3.jpg" /></div>
    </div>
  </div>

</template>
