<template lang="pug">
div(class="flex justify-center w-screen overflow-hidden text-center text-white font-noto md:h-[120px] h-[200px]")
  ul(class="m-0 p-0 block")
    li(
      class="mb-[20px] block"
      v-for="(item) of footerText"
    ) {{item}}
</template>
<script>
export default {
  setup() {
    const footerText = ref([
      '西元2469年，全球經濟已經崩毀，人類的生存已經陷入困境，而人類也已經不再繁衍後代。人類遺傳學與生產權威艾瑞克博士',
      '為了拯救人類的命運，決定使用時光機回到2022年，把一次一次幫助人類渡過難關的科技神寵，用空投的方式降落回「古代」'
    ])
    return{
      footerText,
    }
  }
}
</script>
