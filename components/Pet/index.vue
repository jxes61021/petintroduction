<template lang="pug">
div
  div(class="w-full bg-infoImg overflow-hidden relative bg-x-repeat")
    div(class="w-11/12 md:w-[820px] m-auto pt-4 pb-4 z-10 ")
      img(src="./image/info01.png" class="my-10 hidden md:block")
      img(src="./image/m2mo_event01.jpg" alt="" class="block md:hidden rounded-xl")
    WhatGPG
    div(class="absolute bg-part101 w-full bottom-0 h-[380px] bg-no-repeat z-0 bg-cover")
  WhyGPG
  div(class="bg-part102 w-full bottom-0 h-[380px] bg-no-repeat z-0 bg-cover bg-white")
  HowGPG
  div(class="bg-part103 w-full bg-cover h-[100px] md:h-[330px] bg-[#3577DE] flex justify-end")
    img(src="./image/m2_250.png" alt="" class="w-[472px] h-[439px] z-10 bottom-[15vh] right-[80px]")
  GoPet
</template>