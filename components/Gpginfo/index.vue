<template>
    <div class="bg-gpginfo h-auto md:h-[850px] bg-cover relative pb-36 md:pb-0 text-black">
        <div class="w-10/12 md:w-[1220px] justify-center text-center m-auto ">
            <div id="menu-4" class="text-[40px] mb-10 font-bold">GPG神遊礦寵</div>
        </div>
        <div class="w-full md:w-[900px] m-auto justify-center font-noto relative">
            <ul class="bg-[#251848] w-10/12 md:w-4/12 m-auto rounded-full justify-center nav nav-tabs flex flex-row md:flex-row flex-wrap list-none border-b-0 pl-0 mb-6" id="tabs-tab3"
                role="tablist">
                <li class="nav-item flex-1" role="presentation">
                    <a href="#tabs-home3" class="
                        text-center
                        w-11/12 
                        font-bold
                        rounded-full
                        nav-link
                        m-auto
                        block
                        text-xs
                        leading-tight
                        uppercase
                        text-[22px]
                        px-5
                        py-3
                        my-2
                        hover:border-transparent hover:bg-gray-100
                        focus:border-transparent
                        active
                        " id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab"
                                aria-controls="tabs-home3" aria-selected="true">特色介紹</a>
                </li>
                <li class="nav-item flex-1" role="presentation">
                    <a href="#tabs-profile3" class="
                        text-center
                        w-11/12 
                        rounded-full
                        nav-link
                        m-auto
                        block
                        font-medium
                        text-[22px]
                        leading-tight
                        uppercase
                        px-5
                        py-3
                        my-2
                        hover:border-transparent hover:bg-gray-100
                        focus:border-transparent
                        " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                                aria-controls="tabs-profile3" aria-selected="false">遊戲系統</a>
                </li>
            </ul>
            <div class="tab-content relative" id="tabs-tabContent3">
                <!--特色介紹-->
                <!--!!!!!!!-->
                <div v-if="false" class="tab-pane fade show active w-[95%] md:w-11/12 m-auto" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                    <div class=" md:w-auto m-auto bg-white h-auto md:h-[500px] rounded-2xl flex p-10 md:p-4">
                        <div class="absolute prevArrow flex items-center justify-center top-1/2 left-[-3%]">
                            <img src="@/assets/left.png" alt="">
                        </div>
                        <swiper
                            :navigation="{
                                nextEl: '.nextArrow',
                                prevEl: '.prevArrow',}"
                            :pagination="{
                                clickable: true,}"
                            :observer="true"
                            :observeParents="true"
                            :parallax="true"
                            class="mySwiper"
                        >
                            <swiper-slide
                                v-for="item of list" :key="item.id"
                                >
                                <div class="p-0 md:p-10 h-full w-full flex flex-col md:flex-row">
                                    <div class="flex-1 flex justify-center">
                                        <img :src="`../assets/${item.url}`" alt="" class="w-full md:w-11/12 m-auto">
                                    </div>
                                    <div class="flex-1 p-0 md:p-4 flex justify-center flex-col">
                                        <div class="text-[22px] font-bold mb-4">{{ item.title }}</div>
                                        <div class="text-[15px] mb-14">{{ item.message }}</div>
                                        <!-- <div class="w-full mb-10 md:mb-0 flex justify-center md:justify-start">
                                            <a class="px-8 border py-2 rounded-full cursor-pointer border-black  hover:-fuchsia-700">
                                                了解更多
                                            </a>
                                        </div> -->
                                    </div>
                                </div>
                            </swiper-slide>
                            
                        </swiper>
                        <!-- <div id="gpginfo">
                            <div class="swiper-button-next md:bottom-[83%] md:right-[0%] right-[0%] bottom-[0%] ">
                                <img src="./image/right.png" alt="" class="ml-2">
                            </div>
                            <div class="swiper-button-prev md:left-[0%] md:bottom-[83%] left-[0%] bottom-[0%]">
                                <img src="./image/left.png" alt="">
                            </div>
                        </div> -->
                        <div class="absolute nextArrow flex items-center justify-center top-1/2 right-[-3%]">
                            <img src="@/assets/right.png" alt="" class="">
                        </div>
                    </div>
                </div>
                <!--遊戲系統-->
                <!--!!!!!!!-->
                <div v-if="true" class="tab-pane fade w-[95%] md:w-11/12 m-auto" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                    <div class="md:w-auto m-auto bg-white h-auto md:h-[500px] rounded-2xl flex p-10 md:p-4">
                        <div class="absolute prevArrow flex items-center justify-center top-1/2 left-[-3%]">
                            <img src="@/assets/left.png" alt="">
                        </div>
                        <swiper
                            :navigation="{
                                nextEl: '.nextArrow',
                                prevEl: '.prevArrow',}"
                            :pagination="{
                                clickable: true,}"
                            :observer="true"
                            :observeParents="true"
                            :parallax="true"
                            class="mySwiper"
                        >
                            <swiper-slide
                                v-for="item of list2" :key="item.id"
                                >
                                <div class="p-0 md:p-10 h-full w-full flex flex-col md:flex-row">
                                    <div class="flex-1 flex justify-center">
                                        <img :src="`../assets/${item.url}`" alt="" class="w-full md:w-11/12 m-auto">
                                    </div>
                                    <div class="flex-1 p-0 md:p-4 flex justify-center flex-col">
                                        <div class="text-[22px] font-bold mb-4">{{ item.title }}</div>
                                        <div class="text-[15px] mb-14">{{ item.message }}</div>
                                        <div class="w-full mb-10 md:mb-0 flex justify-center md:justify-start">
                                            <a class="px-8 border py-2 rounded-full cursor-pointer border-black  hover:-fuchsia-700" :href="item.href">
                                                立即遊玩
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                        <!-- <div id="gpginfo">
                            <div class="swiper-button-next md:bottom-[83%] md:right-[0%] right-[0%] bottom-[0%] ">
                                <img src="./image/right.png" alt="" class="ml-2">
                            </div>
                            <div class="swiper-button-prev md:left-[0%] md:bottom-[83%] left-[0%] bottom-[0%]">
                                <img src="./image/left.png" alt="">
                            </div>
                        </div> -->
                        <div class="absolute nextArrow flex items-center justify-center top-1/2 right-[-3%]">
                            <img src="@/assets/right.png" alt="" class="">
                        </div>
                        <!-- <div class="w-10/12 md:w-full h-auto flex items-center justify-between md:justify-between bottom-[210px]">
                            <div class="prevArrow flex items-center justify-center">
                                <img src="@/assets/left.png" alt="">
                            </div>
                            <div class="nextArrow flex items-center justify-center ">
                                <img src="@/assets/right.png" alt="" class="">
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
            
        </div>
        <div class="bg-part106 w-full h-[100px] absolute -bottom-2 bg-no-repeat bg-cover"></div>
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
    //     {
    //         id: 1,  message: '蒐集到了各種NFT礦寵後，除了自己培養、收藏、挖礦以外，還能做什麼呢？遊戲內有競拍系統，除了能進行道具競拍以外，你心愛的NFT礦寵也能在遊戲內進行買賣和交易喔！',
    //         title: '可愛、療癒、養成！',
    //         url: new URL('./image/m2_306.jpg', import.meta.url),
    //     },
    //     {
    //         id: 2,  message: '礦寵除了在遊戲裡面活蹦亂跳挖礦以外，也是具有收藏價值的限量NFT，每一隻礦寵都對標不同數量與稀有度的NFT，快點來蒐藏。',
    //         title: '值得收藏的NFT',
    //         url: new URL('./image/m2_307.jpg', import.meta.url),
    //     },
    //     {
    //         id: 3,  message: '解放你的雙手！遊戲僅需要使用碎片時間經營，就能得到獎勵！',
    //         title: '獎勵收入',
    //         url: new URL('./image/m2_308.jpg', import.meta.url),
    //     },
    //     {
    //         id: 4,  message: '礦寵除了出現在GPG平台以外，也會在線下的實體「智能販賣機」中化身為精品的精品盲盒公仔，不僅好看，更有收藏價值！每個盲盒公仔都有一個專屬的QR Code，用手機一掃，就能在平台中換到對標的NFT礦寵喔！',
    //         title: '不只是虛擬寵物，也是實體精品',
    //         url: new URL('./image/m2_309.jpg', import.meta.url),
    //     },
    //     {
    //         id: 5,  message: '蒐集到了各種NFT礦寵，除了自己培養收藏以外，還能做什麼呢？遊戲內有NFT礦寵交易商城，讓你除了能買幣賣幣以外，還能競標拍賣；同時結合線下智能販賣機的盲盒精品公仔，讓玩家能獲得最大的經濟效益。',
    //         title: '交易',
    //         url: new URL('./image/m2_310.jpg', import.meta.url),
    //     },
        
    // ])
    const list = ref([
        {
            id: 1,  message: '蒐集到了各種NFT礦寵後，除了自己培養、收藏、挖礦以外，還能做什麼呢？遊戲內有競拍系統，除了能進行道具競拍以外，你心愛的NFT礦寵也能在遊戲內進行買賣和交易喔！',
            title: '可愛、療癒、養成！',
            url: 'm2_306.jpg',
        },
        {
            id: 2,  message: '礦寵除了在遊戲裡面活蹦亂跳挖礦以外，也是具有收藏價值的限量NFT，每一隻礦寵都對標不同數量與稀有度的NFT，快點來蒐藏。',
            title: '值得收藏的NFT',
            url: 'm2_307.jpg',
        },
        {
            id: 3,  message: '解放你的雙手！遊戲僅需要使用碎片時間經營，就能得到獎勵！',
            title: '獎勵收入',
            url: 'm2_308.jpg',
        },
        {
            id: 4,  message: '礦寵除了出現在GPG平台以外，也會在線下的實體「智能販賣機」中化身為精品的精品盲盒公仔，不僅好看，更有收藏價值！每個盲盒公仔都有一個專屬的QR Code，用手機一掃，就能在平台中換到對標的NFT礦寵喔！',
            title: '不只是虛擬寵物，也是實體精品',
            url: 'm2_309.jpg',
        },
        {
            id: 5,  message: '蒐集到了各種NFT礦寵，除了自己培養收藏以外，還能做什麼呢？遊戲內有NFT礦寵交易商城，讓你除了能買幣賣幣以外，還能競標拍賣；同時結合線下智能販賣機的盲盒精品公仔，讓玩家能獲得最大的經濟效益。',
            title: '交易',
            url: 'm2_310.jpg',
        },
        
    ])

    // const list2 = ref([
    //     {
    //         id: 1,  message: '在挖礦的路上不孤單！除了自己挖，還能到好友的礦場與他們相親相愛或互相傷害。不只自己邊玩邊賺，揪三五好友一起玩更美賣！',
    //         title: '好友互動',
    //         url: new URL('./image/m2_321.jpg', import.meta.url),
    //         href: new URL('/?event=mine', import.meta.url),
            
    //     },
    //     {
    //         id: 2,  message: '挖礦不只能得到虛擬貨幣，也有機會得到實體禮物兌換券，Switch、VR主機、電動車等你帶回家！',
    //         title: '挖礦奪寶',
    //         url: new URL('./image/m2_322.jpg', import.meta.url),
    //         href: new URL('/?event=mine', import.meta.url),
    //     },
    //     {
    //         id: 3,  message: '蒐集到的礦寵除了持續培養或透過競標拍賣以外，也可以將不同礦寵透過合成系統合成出新的礦寵。隱藏版礦寵說不定就由此才有機會獲得？！',
    //         title: '寵物合成',
    //         url: new URL('./image/m2_323.jpg', import.meta.url),
    //         href: new URL('/?event=mine', import.meta.url),
    //     },
    //     {
    //         id: 4,  message: '在遊戲中能挖到強化道具，參加活動或者透過競拍也可以獲得道具。裝備這些道具後能提升礦寵的算力，提升算力就更有機會挖到大獎。',
    //         title: '道具強化',
    //         url: new URL('./image/m2_324.jpg', import.meta.url),
    //         href: new URL('/?event=mine', import.meta.url),
    //     },
    //     {
    //         id: 5,  message: '透過遊戲內的競拍系統標下珍貴的碎片、道具或礦寵吧！除此之外，你也可以透過競標得到更多金幣。炒作、蒐集、囤貨，發財致富不是夢。',
    //         title: '買賣競拍',
    //         url: new URL('./image/m2_325.jpg', import.meta.url),
    //         href: new URL('/?event=mine', import.meta.url),
    //     },
    //     {
    //         id: 6,  message: '你的礦寵除了能去偷挖好友的礦場以外，還能在遊戲中內建的小遊戲與其他玩家互動。讓你的礦寵跟其他好友賽跑，下注比拚，贏者全拿！',
    //         title: '社交競技',
    //         url: new URL('./image/m2_326.jpg', import.meta.url),
    //         href: new URL('/?event=mine', import.meta.url),
    //     },
        
    // ])
    const list2 = ref([
        {
            id: 1,  message: '在挖礦的路上不孤單！除了自己挖，還能到好友的礦場與他們相親相愛或互相傷害。不只自己邊玩邊賺，揪三五好友一起玩更美賣！',
            title: '好友互動',
            url: 'm2_321.jpg',
            href: '/?event=mine',
            
        },
        {
            id: 2,  message: '挖礦不只能得到虛擬貨幣，也有機會得到實體禮物兌換券，Switch、VR主機、電動車等你帶回家！',
            title: '挖礦奪寶',
            url: 'm2_322.jpg',
            href: '/?event=mine',
        },
        {
            id: 3,  message: '蒐集到的礦寵除了持續培養或透過競標拍賣以外，也可以將不同礦寵透過合成系統合成出新的礦寵。隱藏版礦寵說不定就由此才有機會獲得？！',
            title: '寵物合成',
            url: 'm2_323.jpg',
            href: '/?event=mine',
        },
        {
            id: 4,  message: '在遊戲中能挖到強化道具，參加活動或者透過競拍也可以獲得道具。裝備這些道具後能提升礦寵的算力，提升算力就更有機會挖到大獎。',
            title: '道具強化',
            url: 'm2_324.jpg',
            href: '/?event=mine',
        },
        {
            id: 5,  message: '透過遊戲內的競拍系統標下珍貴的碎片、道具或礦寵吧！除此之外，你也可以透過競標得到更多金幣。炒作、蒐集、囤貨，發財致富不是夢。',
            title: '買賣競拍',
            url: 'm2_325.jpg',
            href: '/?event=mine',
        },
        {
            id: 6,  message: '你的礦寵除了能去偷挖好友的礦場以外，還能在遊戲中內建的小遊戲與其他玩家互動。讓你的礦寵跟其他好友賽跑，下注比拚，贏者全拿！',
            title: '社交競技',
            url: 'm2_326.jpg',
            href: '/?event=mine',
        },
        
    ])

    return{
      Swiper,
      SwiperSlide,
      SwiperCore,
      list,
      list2,
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

#gpginfo .swiper-button-next {
    background: #8E3FE8;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 999px;
    box-shadow: 2px 4px 2px 0px rgb(103, 6, 138);
    z-index: 99;
}
#gpginfo .swiper-button-prev {
    background: #8E3FE8;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 999px;
    box-shadow: 2px 4px 2px 0px rgb(103, 6, 138);
    z-index: 99;
}
#gpginfo .swiper-button-next:after {
    color: #fff;
    display: none;
}
#gpginfo .swiper-button-prev:after {
    color: #fff;
    display: none;
}
#gpginfo .swiper-button-next:after, .swiper-button-prev:after{
    font-size: 1rem;
    font-weight: 900;
  }

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