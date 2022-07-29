<template lang="pug">
div
  nav(class="w-screen bg-[#0000000] font-noto px-6 py-4 mx-auto md:flex md:justify-between md:items-center md:bg-[#00000000]")
    div(class="flex items-center justify-between")
      nuxt-link(to="/" class="mr-20 text-xl font-bold text-gray-100 md:text-2xl hover:text-indigo-400")
        img(src="./image/i_logo_m1.svg" alt="" class="h-1/2 w-10/12")
      //- Mobile menu button
      div(@click="toggleNav" class="flex md:hidden")
        button(class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400")
          svg(viewBox="0 0 24 24" class="w-6 h-6 fill-current")
            path(fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z")
    ul(
      :class="showMenu ? 'flex' : 'hidden'" 
      class="items-center flex-col mt-8 space-y-4 text-lg cursor-pointer md:flex md:space-y-0 md:flex-row md:items-center md:space-x-14 md:mt-0"
    )
      li(
        v-for="(item) of petText"
        class="text-gray-100 hover:text-[#7135E9]"
      ) {{item}}
    //- Mobile Menu open: "block", Menu closed: "hidden"
    ul(
      :class="showMenu ? 'flex' : 'hidden'" 
      class="flex-col mt-8 mr-4 space-y-4 text-lg cursor-pointer md:flex md:space-y-0 md:flex-row md:items-center md:space-x-6 md:mt-0"
    )
      li(class="text-gray-100 border-2 px-8 py-2 rounded-full hover:text-[#7135E9] hover:border-[#7135E9]") 遊戲白皮書
      li(class="text-gray-100 px-8 bg-[#7135E9] py-2 rounded-full hover:text-indigo-400") PLAY NOW
</template>
<script>
export default {
  setup() {
    const petText = ref([
      '認識礦寵',
      '如何挖礦',
      '被動收入',
      '遊戲特色',
      '預約登錄'
    ])
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { 
      showMenu, 
      toggleNav,
      petText
    };
  },
};
</script>