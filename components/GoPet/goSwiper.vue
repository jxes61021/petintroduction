<template lang="pug">
div(class="text-[40px] font-black mb-4 ml-0 md:ml-20 text-center md:text-left") 挖了可以幹嘛
swiper(
    :navigation="{\
        nextEl: '.nextArrows',\
        prevEl: '.prevArrows',}"
    :pagination="{\
    clickable: true,}"
    :observer="true"
    :observeParents="true"
    :parallax="true"
    :disabledClass="true"
    class="mySwiper relative pd-0 md:p-6"
    )
        swiper-slide(v-for="item of data" :key="item.id")
            div(class="bg-[#005cd471] w-10/12 md:w-5/12 h-full px-6 pt-6 pb-8 rounded-xl  relative md:left-[68px] m-auto md:m-0 flex flex-col")
                div(class="text-[22px] mb-6 font-black pt-4") {{ item.title }}
                div(v-for="text of item.message" class="mb-6") {{ text }}
        div(class="w-full md:w-7/12 h-auto flex items-center justify-between md:justify-between bottom-[70px] md:bottom-[210px]")
            .prevArrows(class="bg-[#8E3FE8] w-14 h-14 rounded-full z-[99] btn-shadow flex items-center justify-center ml-2 md:ml-0")
                img(src="@/assets/left.png" alt="")
            .nextArrows(class="bg-[#8E3FE8] w-14 h-14 rounded-full z-[99] btn-shadow flex items-center justify-center mr-2 md:mr-0")
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
    const data = ref([
    { id: 1,  
        title: '金幣可以幹嘛？',
        message: [
            '金幣可以在GPG神遊平台上作為遊戲代幣使用，在平台上所有的遊戲都可以透過金幣來進行遊戲或兌換遊戲中的虛寶。',
            '可以把金幣視為是手遊當中課金後得到的高價貨幣，具有較高的價值。',
            '在《GPG神遊礦寵》當中可以透過礦寵挖到金幣，可以使用金幣在遊戲中購買各種虛寶、參與NFT競標、提升礦寵等級等，也可以使用兌換實體的禮品。',
        ]
        },
    { id: 2,  
        title: '銀幣可以幹嘛？',
        message: [
            '銀幣可以在GPG神遊平台上作為遊戲代幣使用，在平台上大多數的遊戲都可以透過銀幣來進行遊戲或兌換遊戲中的虛寶。' ,
            '可以把銀幣視為是遊戲當中的一般流通貨幣。' ,
            '在《GPG神遊礦寵》當中也可以透過礦寵挖到銀幣，可以使用金幣在遊戲中購買各種虛寶、參與NFT競標、提升礦寵等級。' ,
        ],
        },
    { id: 3, 
        title: '碎片做什麼？？',
        message: [
            '在《GPG神遊礦寵》中，玩家有機會透過礦寵挖到珍貴的道具碎片。蒐集到所有道具碎片，可以兌換各種商品兌換券。' ,
            '如：超商禮券、PS5主機、任天堂Switch主機、Oculus Quest 2 VR頭戴式主機、Gogoro電動車等多種大獎！' ,
            '獎項也會隨著改版不斷更新，你各位還不趕快卡位挖起來！' ,
        ],
        },
    ])

    return{
      Swiper,
      SwiperSlide,
      data,
    }
  }
}
</script>
