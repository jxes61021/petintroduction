<template lang="pug">
div(class="relative bg-videobg h-auto bg-contain bg-repeat text-noto bg-top py-32 font-noto")
  div(class="bg-part107 w-full h-[100px] absolute -top-2")
  div(class="w-11/12 md:w-[1100px] m-auto bg-[#ffffffd6]  rounded-2xl mb-6")
    div(class="w-10/12 m-auto py-6 flex justify-center flex-col items-center")
      p(class="text-black text-[40px] font-bold mb-10") Video
      div(class="flex pb-10")
          div(class="grid gap-x-4 gap-y-4  grid-cols-2 md:grid-cols-3 md:gap-x-10 md:gap-y-10")
            img(v-for="(item, index) of list" :src="item.url" alt="" class="rounded-xl cursor-pointer" @click="openID = item.id")
div(class="relative")
  teleport(to="body")
    transition(name="fade")
      div(v-if="openID" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 max-w-full bg-[#0000009d] h-full w-full flex justify-center items-center")
        div(class="bg-white rounded-2xl p-[40px] w-[92%] md:w-[60%]  relative")
          div(class=" relative pb-[56.25%] mt-6")
            iframe(:src="list[openID - 1].video" class=" absolute top-0 left-0 w-full h-full" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          div(class="absolute top-5 right-5 cursor-pointer " @click="openID = 0")
            img(src="./image/m2_close.svg" alt="")
</template>
<script>
import img1 from './image/m2_404.png'
import img2 from './image/m2_403.png'
import img3 from './image/m2_405.png'
export default {
  setup() {
    const openID = ref(0)
    const list = ref([
      { id: 1, 
        url: img1,
        video: 'https://www.youtube.com/embed/Wa3meAlQIEg'
      },
      { id: 2, 
        url: img2,
        video: 'https://www.youtube.com/embed/3X7e1dAIHB4'
      },
      { id: 3, 
        url: img3,
        video: 'https://www.youtube.com/embed/9NhsryMz2OA'
      },
    ])

    return {
      openID,
      list,
    };
  },
};
</script>
<style scope>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .46s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .38s cubic-bezier(0.61, -0.17, 0.39, 2.49);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1.5);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(.6);
}
</style>