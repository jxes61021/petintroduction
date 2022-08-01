<template>
    <div class="relative py-32 md:py-0 bg-white text-black">
        <div class="w-11/12 md:w-[1220px] m-auto text-center pt-6 md:pt-0">
            <div id="menu-5" class="flex justify-center text-[40px] font-black mb-4">如何取得GPG礦寵</div>
            <div class="text-center text-[22px]  m-auto font-semibold mb-10">礦寵怎麼玩:成為寵物大師</div>
            <div class="h-auto relative">
                <swiper 
                    :navigation="{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',}"
                    :pagination="{
                        clickable: true,}"
                    :observer="true"
                    :observeParents="true"
                    :parallax="true"
                    class="mySwiper"
                    >
                        <swiper-slide>
                            <div class="flex items-center flex-col md:flex-row ">
                                <div class="flex-1">
                                    <img src="./image/m2_gif101.gif" alt="">
                                </div>
                                <div class="flex-1 p-4 md:p-14 text-left">
                                    <div class="text-[30px] font-black mb-4 md:mb-10 w-10/12 md:w-full m-auto">STEP1</div>
                                    <div class="text-[15px] w-10/12 md:w-full mb-10 m-auto">登入《GPG神遊平台》https://godplay.app/前往GPG神遊平台首頁>輸入手機號碼驗證>輸入驗證碼完成註冊!</div>
                                    <!-- <div class="btn-ani hover:transform hover:translate-x-6 w-10/12 md:w-full mb-10 m-auto">
                                        <a class="text-black px-8 border-black border-2 py-2 rounded-full cursor-pointer font-black hover:-fuchsia-700 ">
                                            馬上登入
                                        </a>
                                    </div> -->
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="flex items-center flex-col md:flex-row ">
                                <div class="flex-1">
                                    <img src="./image/m2_gif102.jpg" alt="">
                                </div>
                                <div class="flex-1 p-4 md:p-14  text-left">
                                    <div class="text-[30px] font-black mb-4 md:mb-10 w-10/12 md:w-full m-auto">STEP2</div>
                                    <div class="text-[15px] w-10/12 md:w-full mb-10 m-auto">登入平台後，點選《GPG神遊礦寵》進入遊戲後，輸入手機號碼登入即註冊成功</div>
                                    <!-- <div class="btn-ani hover:transform hover:translate-x-3 w-10/12 md:w-full mb-10 m-auto">
                                        <a class="text-black px-8 border-black border-2 py-2 rounded-full cursor-pointer font-black hover:-fuchsia-700">
                                            一鍵成為礦寵大師
                                        </a>
                                    </div> -->
                                </div>
                            </div>
                        </swiper-slide>
                </swiper>
                <div id="howgpg">
                  <div class="swiper-button-next btn-ani md:right-[40%] md:top-[90%] right-[32%] top-[98%]">
                      <img src="@/assets/right.png" alt="" class="ml-2">
                  </div>
                  <div class="swiper-button-prev btn-ani md:left-[50%] md:top-[90%] left-[32%] top-[98%]">
                      <img src="@/assets/left.png" alt="">
                  </div>
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
    return{
      Swiper,
      SwiperSlide,
      SwiperCore,
    }
  }
}
</script>

<style>
.nav-tabs .nav-link.active{
    color:white!important; 
    background: rgb(110,78,242);
    background: linear-gradient(90deg, rgba(110,78,242,1) 0%, rgba(255,64,96,1) 100%);
    
}
.nav-tabs .nav-link{
    color:#AE89D8!important; 
}

</style>
<style>

#howgpg .swiper-button-next {
    background: #8E3FE8;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 999px;
    box-shadow: 2px 4px 2px 0px rgb(103, 6, 138);
    z-index: 99;
}
#howgpg .swiper-button-prev {
    background: #8E3FE8;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 999px;
    box-shadow: 2px 4px 2px 0px rgb(103, 6, 138);
    z-index: 99;
}
#howgpg .swiper-button-next:after {
    color: #fff;
    display: none;
}
#howgpg .swiper-button-prev:after {
    color: #fff;
    display: none;
}
#howgpg .swiper-button-next:after, .swiper-button-prev:after{
    font-size: 1rem;
    font-weight: 900;
  }


</style>