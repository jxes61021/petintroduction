<template>

    <div class="w-11/12 md:w-[820px] m-auto pt-4 pb-4 z-10 relative">
      <div class="w-full bg-white h-[730px] md:h-[560px] rounded-2xl m-auto text-noto">
        <div id="menu-1" class="flex justify-center pt-10 text-[40px] font-black text-black">什麼是GPG礦寵</div>
        <div class="relative w-full h-auto">
          <div class="absolute w-full m-auto" > 
            <swiper 
                id="swiper1"
                :autoplay="true"
                :navigation="{
                    nextEl: '.nextArrow',
                    prevEl: '.prevArrow',}"
                :pagination="{
                    clickable: true,}"
                :observer="true"
                :observeParents="true"
                :parallax="true"
                :disabledClass="true"
                class="mySwiper">
              <swiper-slide v-for="item of list" :key="item.id">
                <div class="flex justify-center text-center py-2 md:py-9 flex-col md:flex-row">
                  <div class="flex-1 justify-center items-center">
                    <img :src="`../assets/${item.url}`" alt="" class="">
                  </div>
                  <div class="flex-1 flex items-center mt-32 mb-40 md:my-10">
                    <div class="h-auto p-2 absolute z-20 flex  flex-col text-left items-start ">
                      <p class="mb-8 w-10/12 text-left m-auto text-black">{{ item.message }}</p>
                      <!-- <div class="hover:scale-110 transition duration-300 ease-in-out w-10/12 m-auto ">
                        <a class="text-black px-8 border-black border-2 py-2 rounded-full cursor-pointer font-black hover:-fuchsia-700">了解更多</a>
                      </div> -->
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <div class="w-full md:w-[68%] h-auto flex items-center justify-center md:justify-end bottom-[12vh] md:bottom-[8vh]">
                <div class="prevArrow flex items-center justify-center">
                    <img src="@/assets/left.png" alt="">
                </div>
                <div class="nextArrow flex items-center justify-center ml-8">
                  <img src="@/assets/right.png" alt="" class="">
                </div>
              </div>
              <!-- <div id="whatgpg" class="">
                  <div class="swiper-button-next md:right-[33%] top-[90%] right-[30%]">
                      <img src="@/assets/right.png" alt="" class="ml-2">
                  </div>
                  <div class="swiper-button-prev md:left-[50%] top-[90%] left-[30%]">
                      <img src="@/assets/left.png" alt="">
                  </div>
              </div> -->
            </swiper>
          </div>
          <div class="absolute w-full top-32  right-0 md:right-10">
            <img src="./image/m2_101.png" alt="">
          </div>
          
        </div>
      </div>
    </div>

</template>
<script>
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import "swiper/css/navigation"
SwiperCore.use([Autoplay, Navigation])
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // const list = ref([
    //   { id: 2, url: new URL('./image/m2_102.png', import.meta.url), message: '國民挖礦運動正夯！人人都想賺取額外被動收入，但要怎麼賺呢？'},
    //   { id: 1, url: new URL('./image/m2_103.png', import.meta.url), message: 'GPG神遊平台隆重推出：是虛擬寵物也是雲端礦機的 GameFi 遊戲《GPG神遊礦寵 GPG Mining Pet》' },
    //   { id: 3, url: new URL('./image/m2_104.png', import.meta.url), message: '你不需要擁有加密錢包、也不需要先投資加密貨幣、更不用準備高端電腦設備，只要智慧型手機在手，就能隨時上線挖礦與遊玩，輕鬆暢遊元宇宙！' },
    //   { id: 4, url: new URL('./image/m2_105.png', import.meta.url), message: '登入遊戲，就能擁有自己的專屬限定NFT礦寵囉！輸入手機號碼，三秒就能註冊完成。還不趕快加入！' },
    // ])

    const list = ref([
      { id: 2, url: 'm2_102.png', message: '國民挖礦運動正夯！人人都想賺取額外被動收入，但要怎麼賺呢？'},
      { id: 1, url: 'm2_103.png', message: 'GPG神遊平台隆重推出：是虛擬寵物也是雲端礦機的 GameFi 遊戲《GPG神遊礦寵 GPG Mining Pet》' },
      { id: 3, url: 'm2_104.png', message: '你不需要擁有加密錢包、也不需要先投資加密貨幣、更不用準備高端電腦設備，只要智慧型手機在手，就能隨時上線挖礦與遊玩，輕鬆暢遊元宇宙！' },
      { id: 4, url: 'm2_105.png', message: '登入遊戲，就能擁有自己的專屬限定NFT礦寵囉！輸入手機號碼，三秒就能註冊完成。還不趕快加入！' },
    ])

    return{
      Swiper,
      SwiperSlide,
      SwiperCore,
      list,
    }
  }
}
</script>


<style>
.nextArrow {
    background: #8E3FE8;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 999px;
    box-shadow: 2px 4px 2px 0px rgb(103, 6, 138);
    z-index: 99;
}
.prevArrow {
    background: #8E3FE8;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 999px;
    box-shadow: 2px 4px 2px 0px rgb(103, 6, 138);
    z-index: 99;
}
.swiper-button-disabled {
  opacity: 0.6
}
</style>