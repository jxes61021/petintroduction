<template>
  <div >
    <div>
      <nav 
        :class="showMenu ? 'bg-black' : ''"
        class="
          py-4
          w-screen
          font-noto
          mx-auto
          md:flex md:justify-between md:items-center md:bg-[#00000000] md:h-auto"
      >
          <div class="flex items-center justify-between ">
            <a href="/" class="
              pl-6
              mr-20
              text-xl
              font-bold
              text-gray-100
              md:text-2xl
              hover:text-indigo-400
            ">
              <img src="./image/i_logo_m1.svg" alt="" class="h-1/2 w-10/12">
            </a>
            <!-- Mobile menu button -->
            <div @click="toggleNav" class="flex md:hidden">
              <button type="button" class="
                pr-6
                text-gray-100
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              ">
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                  </path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul :class="showMenu ? 'flex top-[20vh] h-[80vh]' : 'hidden'" class="
            bg-black
            items-center
            flex-col
            mt-[-7rem]
            space-y-4
            text-lg
            cursor-pointer
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-14 md:mt-0 md:bg-[#00000009] md:h-auto
          ">
            <li class="pt-[8rem] md:pt-0 text-gray-100 hover:text-[#7135E9]">
              <a href="#menu-1">認識礦寵</a>
            </li>
            <li class="text-gray-100 hover:text-[#7135E9]">
              <a href="#menu-2">如何挖礦</a>
            </li>
            <li class="text-gray-100 hover:text-[#7135E9]">
              <a href="#menu-3">被動收入</a>
            </li>
            <li class="text-gray-100 hover:text-[#7135E9]">
              <a href="#menu-4">遊戲特色</a>
            </li>
            <li class="text-gray-100 hover:text-[#7135E9]">
              <a href="#menu-5">預約登錄</a>
            </li>
          </ul>

          <!-- Mobile Menu open: "hidden", Menu closed: "block" -->
          <ul :class="showMenu ? 'flex' : 'hidden'" class="
            flex-col
            mt-8
            mr-4
            space-y-4
            text-lg
            cursor-pointer
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-6 md:mt-0
          ">
            <li class="hidden md:block text-gray-100 px-8 bg-[#7135E9] py-2 rounded-full hover:text-indigo-400"><a href="/">PLAY NOW</a></li>
          </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => {
      console.log('dodo')
      showMenu.value = !showMenu.value
    }
    return { showMenu, toggleNav };
  },
};
</script>