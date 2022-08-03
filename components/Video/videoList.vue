<script setup>
import { inject, ref } from "vue"
const displayAwardView = inject('displayAwardView')



</script>

<template>
<div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 max-w-full bg-[#0000009d] h-full w-full flex justify-center items-center" v-if="isOpen">
              <div class="bg-white rounded-2xl p-[40px] min-w-[745px] h-[400px] relative">
                  <div>12553</div>
                  <div class="absolute top-5 right-5 cursor-pointer" @click="isOpen = flase">
                    <img src="./image/m2_close.svg" alt="">
                  </div>
              </div>
          </div>
</template>
