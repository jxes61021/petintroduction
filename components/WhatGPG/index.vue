<template lang="pug">
div(class='m-auto pt-4 pb-4 z-10 relative w-11/12 md:w-[820px]')
  div(class='w-full bg-white rounded-2xl m-auto text-noto h-[730px] md:h-[560px]')
    #menu-1(class='flex justify-center pt-10 font-black text-black text-[40px]') 什麼是GPG礦寵
    div(class="relative w-full h-auto")
      div(class="absolute w-full m-auto")
        swiper#swiper1.mySwiper(
          :autoplay='true' 
          :navigation="{\
            nextEl: '.nextArrow',\
            prevEl: '.prevArrow',}" 
          :pagination='{\
            clickable: true,}' 
          :observer='true' 
          :observeparents='true' 
          :parallax='true' 
          :disabledclass='true')
          swiper-slide(v-for='item of list' :key='item.id')
            div(class='flex justify-center text-center py-2 flex-col md:py-9 md:flex-row')
              div(class="flex-1 justify-center items-center")
                img(:src='item.url' alt='')
              div(class='flex-1 flex items-center mt-32 mb-40 md:my-10')
                div(class="h-auto p-2 absolute z-20 flex flex-col text-left items-start")
                  p(class='mb-8 text-left m-auto text-black w-10/12') {{ item.message }}
          div(class='w-full h-auto flex items-center justify-center md:w-[68%] md:justify-end bottom-[12vh] md:bottom-[8vh]')
            div.prevArrow(class="flex items-center justify-center bg-[#8E3FE8] w-14 h-14 rounded-full z-[99] shadow-btn")
              img(src='@/assets/left.png' alt='')
            div.nextArrow(class='flex items-center justify-center ml-4 md:ml-8 bg-[#8E3FE8] w-14 h-14 rounded-full z-[99] shadow-btn')
              img(src='@/assets/right.png' alt='')
      div(class='absolute w-full top-32 right-0 md:right-10')
        img(src='./image/m2_101.png' alt='')
</template>
<script>
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import "swiper/css/navigation"
import img1 from '@/assets/m2_102.png'
import img2 from '@/assets/m2_103.png'
import img3 from '@/assets/m2_104.png'
import img4 from '@/assets/m2_105.png'
SwiperCore.use([Autoplay, Navigation])
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const list = ref([
      { id: 2, url: img1, message: '國民挖礦運動正夯！人人都想賺取額外被動收入，但要怎麼賺呢？'},
      { id: 1, url: img2, message: 'GPG神遊平台隆重推出：是虛擬寵物也是雲端礦機的 GameFi 遊戲《GPG神遊礦寵 GPG Mining Pet》' },
      { id: 3, url: img3, message: '你不需要擁有加密錢包、也不需要先投資加密貨幣、更不用準備高端電腦設備，只要智慧型手機在手，就能隨時上線挖礦與遊玩，輕鬆暢遊元宇宙！' },
      { id: 4, url: img4, message: '登入遊戲，就能擁有自己的專屬限定NFT礦寵囉！輸入手機號碼，三秒就能註冊完成。還不趕快加入！' },
    ])
    return{
      Swiper,
      SwiperSlide,
      list,
    }
  }
}
</script>
