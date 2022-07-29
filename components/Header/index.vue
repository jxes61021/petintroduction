<template lang="pug">
div(class="w-full h-screen bg-moheaderImg md:bg-headerImg relative bg-no-repeat bg-cover")
  Navbar(class="z-20 absolute")
  div(class="absolute top-[60%] md:top-3/4  left-1/2 m-auto -translate-x-2/4 -translate-y-2/4 z-0")
    img(src="./image/i_logo_m2.svg" alt="" class="mb-0 md:mb-32 w-full")
  div(class="absolute flex justify-center bottom-[12%] md:bottom-0 left-1/2 -translate-x-2/4 w-full")
    //- InfoText
    div(class="flex justify-center w-[80%] overflow-hidden text-left text-white font-noto md:h-[120px] h-[200px]")
      ul(class="m-0 p-0 block")
        li(
          class="mb-[20px] block"
          v-for="(item) of headerText"
        ) {{item}}
</template>
<script>
export default {
  setup() {
    const headerText = ref([
      '西元2469年，全球經濟已經崩毀，人類的生存已經陷入困境，而人類也已經不再繁衍後代。人類遺傳學與生產權威艾瑞克博士',
      '為了拯救人類的命運，決定使用時光機回到2022年，把一次一次幫助人類渡過難關的科技神寵，用空投的方式降落回「古代」'
    ])
    return{
      headerText,
    }
  }
}
</script>