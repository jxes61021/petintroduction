<template lang="pug">
div(class='bg-[#1F1631] h-auto')
  div(class='md:w-[1220px] md:flex-row w-full m-auto flex justify-around flex-col')
    div(class='w-10/12 md:w-6/12 md:py-24 py-12 flex flex-col m-auto')
      div(class='md:w-8/12 w-full m-auto')
        img(src='./image/i_logo_gpg.png' alt='' class='w-4/12 md:w-auto mb-6 m-auto')
        div(class="flex flex-row justify-center")
          a(v-for='item of iconlist' :key='item.id' :href='item.href' target='_blank' class='w-[14%] mx-1')
            img(:src="item.url")
    div(class='text-lg md:w-8/12 md:gap-1 md:pt-20 md:pb-14 md:text-left w-full text-white grid grid-cols-2 gap-6 pt-10 pb-10 text-center')
      div(v-for='item of hreflist' :key='item.id' @click="action(item)") {{item.title}}
div(class="bg-black h-auto pt-10 pb-10")
  div(class='w-10/12 md:w-6/12 m-auto flex justify-center mb-16 flex-row')
    div(class='md:mr-4 w-3/12 md:w-4/12 flex items-center m-auto')
      img(src='./image/i_15plus.jpg' alt='' class='md:w-5/12 m-auto w-full')
    div(class='text-[#ffffffa9] text-[12px] md:w-full w-8/12 flex flex-col')
      div(v-for='item of rulelist' :key='item.id')
        p {{item.message}}
  div(class='text-[#ffffffa9] flex justify-center') &copy;2021 GOD PLAY GAME. All Rights Reserved.
</template>
<script>
import img1 from './image/btn_blank_line.png'
import img2 from './image/btn_blank_fb.png'
import img3 from './image/btn_blank_tw.png'
import img4 from './image/btn_blank_ig.png'
export default {
  setup() {
    const iconlist = ref([
      { id: 1, url: img1, title: 'LINE', href: 'https://line.me/ti/p/@gpg.game' },
      { id: 2, url: img2, title: 'Facebook', href: 'https://www.facebook.com/GodPlayGameFun' },
      { id: 3, url: img3, title: 'twitter', href: 'https://twitter.com/GodGpg' },
      { id: 4, url: img4, title: 'instagram', href: 'https://www.instagram.com/gpg.godplaygame/' },
    ])
    const hreflist= ref([
      { id: 1,title: 'TOP',href: 'header', type: 'inside'},
      { id: 2,title: '遊戲特色',href: 'menu-4', type: 'inside'},
      { id: 3,title: '認識礦寵' ,href: 'menu-1', type: 'inside'},
      { id: 4,title: '預約登錄' ,href: 'menu-5', type: 'inside'},
      { id: 7,title: '被動收入' ,href: 'menu-3', type: 'inside'},
      { id: 8,title: '聯絡我們' ,href: 'https://line.me/ti/p/@gpg.game', type: 'outside'},
    ])
    const rulelist= ref([
      { id: 1,message: '請勿長時間連續進行遊戲，避免沉迷、影響身心健康。' },
      { id: 2,message: '遊戲內皆為虛擬情節，請勿任意模仿。' },
      { id: 3,message: 'GPG儲值頁面為唯一購入遊戲點數之官方窗口，一經購入兌換遊戲幣後無法以任何理由退換現金。' },
      { id: 4,message: '本遊戲情節涉及棋牌益智及娛樂， 不得利用遊戲賭博、從事違反法令或其他類似行為，亦請勿進行非法遊戲幣交易。' },
    ])
    const action = (item) => {
      if (item.type === 'inside'){
        const el = document.getElementById(item.href)
        el.scrollIntoView({behavior: "smooth"})
      }else if(item.type === 'outside'){
        window.open(item.href , '_blank')
      }
    }
    return{
      rulelist,
      hreflist,
      iconlist,
      action,
    }
  }
}
</script>