<template lang="pug">
div(class="w-full h-[600px] relative -top-52 bg-[#F2EBF2]")
    div(class="w-full md:w-[1220px] m-auto text-center text-black bg-[#F2EBF2]")
        #menu-3(class="flex justify-center text-[40px] font-black mb-8") 如何賺更多？
        div(class="flex justify-center w-11/12 md:w-10/12 m-auto ")
            //- when window width is >= 640px
            swiper(
                :slidesPerView="1"
                :breakpoints="{\
                    640: {slidesPerView: 3,}\
                }"
                :spaceBetween="30"
                :navigation="{\
                    nextEl: '.nextArrows',\
                    prevEl: '.prevArrows',}"
                :pagination="{\
                    clickable: true,}"
                :observer="true"
                :observeParents="true"
                :parallax="true"
                class="relative p-6"
            )
                swiper-slide(
                    v-for="item of list" :key="item.id"
                )
                    div(:class="item.style" class="h-[65%] w-[90%] left-[5%] md:w-full md:left-0 relative rounded-2xl flex-col p-10 text-white mb-24" )
                        p(class="text-[22px] text-center font-bold mb-4") {{ item.title }}
                        p(class="mb-16 text-center") {{ item.message }}
                div(class="w-full md:w-full h-auto hidden md:flex items-center justify-center md:justify-center bottom-[12vh] md:bottom-[110px]")
                    .prevArrows(class="bg-[#8E3FE8] w-14 h-14 rounded-full z-[99] btn-shadow flex items-center justify-center")
                        img(src="@/assets/left.png" alt="")
                    .nextArrows(class="bg-[#8E3FE8] w-14 h-14 rounded-full z-[99] btn-shadow flex items-center justify-center ml-6")
                        img(src="@/assets/right.png" alt="" class="")
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
