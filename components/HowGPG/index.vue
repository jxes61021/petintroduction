<template lang="pug">
div(class="relative py-2 md:py-0 bg-white text-black")
    div(class="w-11/12 md:w-[1220px] m-auto text-center pt-6 md:pt-0")
        #menu-5(class="flex justify-center text-[40px] font-black mb-4") 如何取得GPG礦寵
        div(class="text-center text-[22px] m-auto font-semibold mb-10") 礦寵怎麼玩:成為寵物大師
        div(class="h-auto relative")
            swiper(
                :autoplay='true' 
                :navigation="{\
                    nextEl: '.nextArrows',\
                    prevEl: '.prevArrows',}" 
                :pagination='{\
                    clickable: true,}' 
                :observer='true' 
                :observeparents='true' 
                :parallax='true' 
                :disabledclass='true')
                swiper-slide(v-for='item of data')
                    div(class="flex items-center flex-col md:flex-row ")
                        div(class="flex-1")
                            img(:src="item.url" alt="")
                        div(class="flex-1 p-4 md:p-14 text-left")
                            div(class="text-[30px] font-black mb-4 md:mb-10 w-10/12 md:w-full m-auto") {{item.title}}
                            div(class="text-[15px] w-10/12 md:w-full mb-10 m-auto") {{item.text}}
            div(class="w-full md:w-[60%] h-auto flex items-center justify-center md:justify-end bottom-[40px] md:bottom-[60px]")
                .prevArrows(class="flex items-center justify-center bg-[#8E3FE8] w-14 h-14 rounded-full z-[99] btn-shadow")
                    img(src='@/assets/left.png' alt='')
                .nextArrows(class='flex items-center justify-center ml-4 bg-[#8E3FE8] w-14 h-14 rounded-full z-[99] btn-shadow')
                    img(src='@/assets/right.png' alt='')
</template>
<script>
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import "swiper/css/navigation"
import img1 from './image/m2_gif101.gif'
import img2 from './image/m2_gif102.jpg'
SwiperCore.use([Autoplay, Navigation])
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const data = ref([
        {url: img1, title: 'STEP1', text:'登入《GPG神遊平台》https://godplay.app/前往GPG神遊平台首頁>輸入手機號碼驗證>輸入驗證碼完成註冊!'},
        {url: img2, title: 'STEP2', text:'登入平台後，點選《GPG神遊礦寵》進入遊戲後，輸入手機號碼登入即註冊成功'}
    ])
    return{
      Swiper,
      SwiperSlide,
      data
    }
  }
}
</script>
