<script setup>
import Navbar from "./navbar/index.vue";
import InfoText from "./infoText/index.vue";
</script>

<template>
  <div class="w-full h-screen bg-moheaderImg md:bg-headerImg  relative bg-no-repeat bg-cover">
    <Navbar class="z-20 absolute" />
    <div class="absolute top-[60%] md:top-3/4  left-1/2 m-auto -translate-x-2/4 -translate-y-2/4 z-0">
      <img src="./Navbar/image/i_logo_m2.svg" alt="" class="mb-0 md:mb-32 w-full">
    </div>
    <div class="absolute bottom-[12%] md:bottom-0 left-1/2 -translate-x-2/4 w-full">
      <InfoText />
    </div>
  </div>
</template>
