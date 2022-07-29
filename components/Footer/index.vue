<template lang="pug">
div(class="bg-black h-auto pt-10 pb-10")
  div(class="w-10/12 md:w-6/12 m-auto flex justify-center mb-16 flex-row")
    div(class="flex items-center md:mr-4 w-3/12 md:w-4/12 m-auto")
      img(src="./img/i_15plus.jpg" class="m-auto w-full md:w-5/12")
    div(class="flex flex-col text-[#ffffffa9] text-[12px] md:w-full w-8/12")
      div(v-for="(item) of footerText")
        p {{item}}
  div(class="flex justify-center text-[#ffffffa9]") ©2021 GOD PLAY GAME. All Rights Reserved.
</template>
<script>
export default {
  setup() {
    const footerText = ref([
      '請勿長時間連續進行遊戲，避免沉迷、影響身心健康。',
      '遊戲內皆為虛擬情節，請勿任意模仿。',
      '本遊戲情節涉及棋牌益智及娛樂， 不得利用遊戲賭博、從事違反法令或其他類似行為。',
      '亦請勿進行非法遊戲幣交易。'
    ])
    return{
      footerText,
    }
  }
}
</script>
