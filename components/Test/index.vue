<template>
    <div class="w-full h-[600px] relative -top-52">
         <div class="w-full md:w-[1220px] m-auto text-center ">
            <div id="menu-3" class="flex justify-center text-[40px] font-black mb-8">如何賺更多？</div>
            <div class="flex justify-center w-11/12 m-auto ">
                <swiper
                :slidesPerView="1"
                :breakpoints="{
                    // when window width is >= 640px
                    640: {
                    slidesPerView: 3,
                    }
                }"
                :spaceBetween="30"
                :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',}"
                :pagination="{
                clickable: true,}"
                :observer=true
                :observeParents= true
                :parallax=true
                :modules="modules"
                class="mySwiper relative p-6"
                >
                    <swiper-slide
                        v-for="item of list" :key="item.id"
                        class="flex rounded-2xl h-auto flex-col p-10  text-white mb-24 relative md:left-0"
                        :class="item.style"
                    >
                        <div class="h-full relative ">
                            <p class="text-[22px] font-bold mb-4">{{ item.title }}</p>
                            <p class="mb-16">{{ item.message }}</p>
                            <!-- <div class=" absolute bottom-0 w-full">
                                <a class="px-8 border-2 py-2 rounded-full cursor-pointer font-black hover:-fuchsia-700">
                                    了解更多
                                </a>
                            </div> -->
                        </div>
                    </swiper-slide>
                    <div id="gopet" class="hidden md:block">
                        <div class="swiper-button-next md:right-[43%] md:top-[82%]">
                            <img src="./image/right.png" alt="" class="ml-2">
                        </div>
                        <div class="swiper-button-prev md:left-[43%] md:top-[82%] ">
                            <img src="./image/left.png" alt="">
                        </div>
                    </div>
                </swiper>
                
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
    const list = ref([
        { id: 1, style: 'bg-[#BCA96B]' , message: '透過礦寵最愛的神奇罐頭來提升等級吧!',
            title: '礦寵等級提升',},
        { id: 2, style: 'bg-[#6BBC96]' , message: '持續挖礦，賺到金銀幣以及蒐集碎片，就能提升礦寵的算力！' ,
            title: '提升裝備/使用道具',},
        { id: 3, style: 'bg-[#F66893]' , message: '盲盒有機會開出各種裝備與道具，也有機會得到珍貴的禮物碎片。' ,
            title: '購買盲盒',},
        { id: 4, style: 'bg-[#4D8FE5]' , message: '透過遊戲內的競拍系統可以競標遊戲道具和礦寵。除了稀有的道具或碎片以外，隱藏版礦寵也是玩家爭相搶標的目標！',
            title: '競拍買賣',},
        { id: 5, style: 'bg-[#BCA96B]' , message: '玩家每天分別到GPG神遊平台和遊戲內簽到，都能獲得額外的金銀幣獎勵喔！',
            title: 'GPG每日簽到',},
        { id: 6, style: 'bg-[#E66060]' , message: '無論是《GPG神遊礦寵》或是GPG神遊平台，都會定期舉辦各種有趣的活動，讓你虛寶、虛擬幣領不停！請持續密切關注我們的社群平台！',
            title: '參與活動送好禮',},
    ])

    return{
      Swiper,
      SwiperSlide,
      list,
    }
  }
}
</script>

<style>
#gopet .swiper-button-next {
    background: #8E3FE8;
    width: 4rem;
    height: 4rem;
    border-radius: 999px;
    box-shadow: 2px 4px 2px 0px rgb(103, 6, 138);
    z-index: 99;
}
#gopet .swiper-button-prev {
    background: #8E3FE8;
    width: 4rem;
    height: 4rem;
    border-radius: 999px;
    box-shadow: 2px 4px 2px 0px rgb(103, 6, 138);
    left: 43%;
    top: 82%;
    z-index: 99;
}
#gopet .swiper-button-next:after {
    color: #fff;
    display: none;
}
#gopet .swiper-button-prev:after {
    color: #fff;
    display: none;
}
#gopet .swiper-button-next:after, .swiper-button-prev:after{
    font-size: 1rem;
    font-weight: 900;
  }


</style>