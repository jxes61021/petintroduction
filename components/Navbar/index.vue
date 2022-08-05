<template lang="pug">
div
  nav(:class="showMenu ? 'bg-black' : ''"
    class="py-4 w-screen font-noto mx-auto md:flex md:justify-between md:items-center md:bg-[#00000000] md:h-auto")
      div(class="flex items-center justify-between ")
        a(href="/" class="pl-6 mr-20 text-xl font-bold text-gray-100 md:text-2xl hover:text-indigo-400")
          img(src="./image/i_logo_m1.svg" alt="" class="h-1/2 w-10/12")
        div(@click="showMenu = !showMenu" class="flex md:hidden")
          button(type="button" class="pr-6 text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400")
            svg(viewBox="0 0 24 24" class="w-6 h-6 fill-current")
              path(fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z")
      //- Mobile Menu open: "block", Menu closed: "hidden"
      ul(:class="showMenu ? 'flex top-[20vh] h-[80vh]' : 'hidden'" 
        class="pt-[8rem] md:pt-0 bg-black items-center flex-col mt-[-7rem] space-y-4 text-lg cursor-pointer md:flex md:space-y-0 md:flex-row md:items-center md:space-x-14 md:mt-0 md:bg-[#00000009] md:h-auto")
        li(v-for="(item, index) of data" class="text-gray-100 hover:text-[#7135E9]")
          div(@click="action(index)") {{item}}
      //- Mobile Menu open: "hidden", Menu closed: "block"
      ul(:class="showMenu ? 'flex' : 'hidden'" 
        class="flex-col mt-8 mr-4 space-y-4 text-lg cursor-pointer md:flex md:space-y-0 md:flex-row md:items-center md:space-x-6 md:mt-0")
        li(class="hidden md:block text-gray-100 px-8 bg-[#7135E9] py-2 rounded-full hover:text-indigo-400")
          a(href="/") PLAY NOW
</template>
<script>
export default {
  setup() {
    const showMenu = ref(false);
    const data = ref([
      '認識礦寵',
      '如何挖礦',
      '被動收入',
      '遊戲特色',
      '預約登錄'
    ])

    const action = (val) => {
      if (val >= data.value.length) return false
      const el = document.getElementById('menu-' + (val + 1))
      el.scrollIntoView({behavior: "smooth"})
    }
    return { 
      showMenu,
      data,
      action,
    };
  },
};
</script>