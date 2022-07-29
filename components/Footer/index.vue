<template lang="pug">
div(class="bg-[#1F1631] h-auto")
  div(class="w-full md:w-[1220px] m-auto flex justify-around flex-col md:flex-row")
    div(class="w-10/12 md:w-6/12 py-12 md:py-24 flex flex-col m-auto")
      div(class="w-full md:w-8/12 m-auto")
        img(src="./image/i_logo_gpg.png" alt="" class="mb-6 w-4/12 md:w-auto m-auto ")
        div(class="flex flex-row justify-center ")
          img(alt="" class="mx-1 w-[14%]" v-for="item of iconlist" :key="item.id" :src="`../assets/${item.url}`")
    div(class="w-full md:w-8/12 text-white grid grid-cols-2 gap-6 md:gap-1 pt-10 pb-10 md:pt-20 md:pb-14 md:text-left text-center")
      div(class="" v-for="item of hreflist" :key="item.id")
        div {{item.title}}
div(class="bg-black h-auto pt-10 pb-10 ")
  div(class="w-10/12 md:w-6/12 m-auto flex justify-center mb-16 flex-row ")
    div(class="flex items-center md:mr-4 w-3/12 md:w-4/12 m-auto")
      img(src="./image/i_15plus.jpg" alt="" class="m-auto w-full md:w-5/12")
    div(class="flex flex-col text-[#ffffffa9] text-[12px] md:w-full w-8/12") 
      div(v-for="item of rulelist" :key="item.id")
        p {{item.message}}
  div(class="flex justify-center text-[#ffffffa9]") ©2021 GOD PLAY GAME. All Rights Reserved.
</template>
<script>
export default {
  setup() {
    // const displayAwardView = inject('displayAwardView')
    const displayAwardView = ref(true)
    const actionAward = () => {
      displayAwardView.value = true
    }
    const iconlist = ref([
      { id: 1, url: 'btn_blank_line.png'},
      { id: 2, url: 'btn_blank_fb.png'},
      { id: 3, url: 'btn_blank_tw.png'},
      { id: 4, url: 'btn_blank_ig.png'},
    ])
    const hreflist= ref([
      { id: 1,title: 'TOP' },
      { id: 2,title: '遊戲特色' },
      { id: 3,title: '認識礦寵' },
      { id: 4,title: '預約登錄' },
      { id: 5,title: '如何挖礦' },
      { id: 6,title: '遊戲白皮書' },
      { id: 7,title: '被動收入' },
      { id: 8,title: '聯絡我們' },
    ])
    const rulelist= ref([
      { id: 1,message: '請勿長時間連續進行遊戲，避免沉迷、影響身心健康。' },
      { id: 2,message: '遊戲內皆為虛擬情節，請勿任意模仿。' },
      { id: 3,message: 'GPG儲值頁面為唯一購入遊戲點數之官方窗口，一經購入兌換遊戲幣後無法以任何理由退換現金。' },
      { id: 4,message: '本遊戲情節涉及棋牌益智及娛樂， 不得利用遊戲賭博、從事違反法令或其他類似行為，亦請勿進行非法遊戲幣交易。' },
    ])
    return{
      displayAwardView,
      rulelist,
      hreflist,
      iconlist,
    }
  }
}
</script>