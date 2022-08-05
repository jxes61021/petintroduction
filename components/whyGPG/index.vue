<template lang="pug">
div(class='bg-[#1F1631]')
    div(class='m-auto pt-4 pb-4 z-10 relative w-11/12 md:w-[1220px]')
      div(class="w-full h-auto rounded-2xl m-auto text-noto mb-10")
        #menu-2(class='flex justify-center pt-10 font-black mb-8 text-white text-[40px]') 為什麼要挖礦
        div(class='text-center text-white m-auto font-medium mb-10 text-[20px] md:text-[22px] w-11/12 md:w-1/2 md:font-bold') 只要有GPG礦寵，輕輕鬆鬆放置就能透過挖礦賺取被動收入，連睡覺都在賺！
        div(class="relative w-full text-white text-center")
          div(class='flex flex-col text-[#BB75FF] md:flex-row')
            div(class='flex items-center w-full flex-col md:w-6/12 md:flex-row')
              div(class='flex justify-center flex-row h-full items-center relative pb-16 md:flex-1 md:pb-0')
                div
                  img(class="mb-10" src='./image/m2_201.png' alt='')
                  div GPG神遊礦寵出發挖礦囉！
                div(class='flex items-center transform bottom-0 absolute md:relative rotate-90 md:rotate-0')
                  img(src='./image/i_arrow01.png' alt='')
              div(class='flex justify-center flex-row h-full items-center relative pb-16 md:flex-1 md:pb-0')
                div(class='flex justify-center flex-col w-8/12')
                  img(src='./image/m2_202.png' alt='' class='mb-10 m-auto w-9/12 md:w-10/12')
                  div 挖到的虛擬幣可以在GPG平台上玩各種豐富有趣的遊戲！
                div(class='flex items-center transform bottom-0 absolute md:relative rotate-90 md:rotate-0')
                  img(src='./image/i_arrow01.png' alt='')
            div(class='p-2 w-full md:w-6/12')
              div(v-for="item of data" class="flex items-center py-2")
                div(class="flex justify-center")
                  img(:src='item.url' alt='')
                div(class='flex text-start ml-2 w-2/3 md:w-1/2') {{item.message}}
      //- div(class='flex justify-center transition duration-300 ease-in-out hover:scale-110')
      //-   li(class='border-2 cursor-pointer px-8 py-2 rounded-full text-[#BB75FF] border-[#BB75FF] hover:text-[#ffffff] hover:border-[#ffffff]') 了解如何挖更多
</template>
<script>
import img1 from './image/m2_203.png'
import img2 from './image/m2_204.png'
import img3 from './image/m2_205.png'
export default {
  setup() {
    const data = ref([
      { url: img1, message: '可以兌換超商禮券、超商咖啡兌換券、美食餐券；JKF雜誌等好禮。'},
      { url: img2, message: '還可以兌換 AirPods Pro、iPhone 13、任天堂Switch主機、Oculus頭戴式主機等實體大獎！' },
      { url: img3, message: '還有還有！還能挖到各種平台上可使用的虛擬寶物、虛擬貨幣（如USDT、BNB）等實用的獎品唷。' },
    ])
    return{
      data
    }
  }
}
</script>