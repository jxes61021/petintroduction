<template lang="pug">
div(class="flex flex-col items-center justify-center overflow-hidden text-center text-white font-noto pb-4")
  div(v-for='(item, index) of message' :key="index" :class="item.isTitle ? 'text-4xl my-4 font-bold' : ''") {{item.text}}
</template>
<script>
export default {
  setup() {
    const message = ref([
      {isTitle: false, text: '西元2469年，全球經濟全面瓦解，人類的生存已成死局，而人類也已經不再繁衍後代。人類遺傳學與生產權威艾瑞克博士為了拯救人類的命運，決定使用時光機回到2022年，把一次一次幫助人類渡過難關的科技神寵，用空投的方式降落回「古代」'},
      {isTitle: true, text: '「礦寵」'},
      {isTitle: false, text: '祂們正在尋找天選之人。只要擁有祂，祂會幫助你找到有價值的礦產寶物...'}
    ])
    return{
      message
    }
  }
}
</script>