<template>
        <div class="flex justify-start text-[40px] font-black mb-4 ml-20">挖了可以幹嘛</div>
        <swiper 
            :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',}"
            :pagination="{
            clickable: true,}"
            :observer=true
            :observeParents= true
            :parallax=true
            class="mySwiper relative pd-0 md:p-6"
            >
                <swiper-slide v-for="item of list" :key="item.id">
                    <div class="bg-[#005cd471] w-10/12 md:w-5/12 h-full p-6 rounded-xl  relative md:left-14 m-auto md:m-0" >
                        <div >
                            <div class="text-[22px] mb-6 font-black pt-4">{{ item.title }}</div>
                            <div class="mb-6">{{ item.message1 }}</div>
                            <div class="mb-6">{{ item.message2 }}</div>
                            <div class="mb-8">{{ item.message3 }}</div>
                            <!-- <div class="flex justify-center pb-4 btn-ani">
                                <a class="px-8 border-2 py-2 rounded-full cursor-pointer font-black hover:-fuchsia-700">
                                    現在就去挖礦
                                </a>
                            </div> -->
                        </div>
                    </div>
                </swiper-slide>
                <div id="goswiper">
                    <div class="btn-ani swiper-button-next md:right-[41%] top-[89%] md:top-[50%] right-[2%]">
                        <img src="@/assets/right.png" alt="" class="ml-2">
                    </div>
                    <div class="btn-ani swiper-button-prev md:left-[0%] top-[89%] md:top-[50%] ">
                        <img src="@/assets/left.png" alt="">
                    </div>
                </div>
        </swiper>
       
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
    { id: 1,  
        title: '金幣可以幹嘛？',
        message1: '金幣可以在GPG神遊平台上作為遊戲代幣使用，在平台上所有的遊戲都可以透過金幣來進行遊戲或兌換遊戲中的虛寶。',
        message2: '可以把金幣視為是手遊當中課金後得到的高價貨幣，具有較高的價值。',
        message3: '在《GPG神遊礦寵》當中可以透過礦寵挖到金幣，可以使用金幣在遊戲中購買各種虛寶、參與NFT競標、提升礦寵等級等，也可以使用兌換實體的禮品。',
        },
    { id: 2,  
        title: '銀幣可以幹嘛？',
        message1: '銀幣可以在GPG神遊平台上作為遊戲代幣使用，在平台上大多數的遊戲都可以透過銀幣來進行遊戲或兌換遊戲中的虛寶。' ,
        message2: '可以把銀幣視為是遊戲當中的一般流通貨幣。' ,
        message3: '在《GPG神遊礦寵》當中也可以透過礦寵挖到銀幣，可以使用金幣在遊戲中購買各種虛寶、參與NFT競標、提升礦寵等級。' ,
        },
    { id: 3, 
        title: '碎片做什麼？？',
        message1: '在《GPG神遊礦寵》中，玩家有機會透過礦寵挖到珍貴的道具碎片。蒐集到所有道具碎片，可以兌換各種商品兌換券。' ,
        message2: '如：超商禮券、PS5主機、任天堂Switch主機、Oculus Quest 2 VR頭戴式主機、Gogoro電動車等多種大獎！' ,
        message3: '獎項也會隨著改版不斷更新，你各位還不趕快卡位挖起來！' ,
        },
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
#goswiper .swiper-button-next {
    background: #8E3FE8;
    width: 4rem;
    height: 4rem;
    border-radius: 999px;
    box-shadow: 2px 4px 2px 0px rgb(103, 6, 138);
    z-index: 99;
}
#goswiper .swiper-button-prev {
    background: #8E3FE8;
    width: 4rem;
    height: 4rem;
    border-radius: 999px;
    box-shadow: 2px 4px 2px 0px rgb(103, 6, 138);
    z-index: 99;
}
#goswiper .swiper-button-next:after {
    color: #fff;
    display: none;
}
#goswiper .swiper-button-prev:after {
    color: #fff;
    display: none;
}
#goswiper .swiper-button-next:after, .swiper-button-prev:after{
    font-size: 1rem;
    font-weight: 900;
  }


</style>