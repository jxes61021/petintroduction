<template>
<p class="text-[50px]">123qwe狗狗遊戲內皆為虛擬情節，請勿任意模仿</p>
<p class="text-[50px] font-noto">123qwe狗狗遊戲內皆為虛擬情節，請勿任意模仿</p>
<p class="text-[50px] font-Rampart">123qwe狗狗遊戲內皆為虛擬情節，請勿任意模仿</p>
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