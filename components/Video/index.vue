<template>
    <div class="relative bg-videobg h-auto bg-contain bg-repeat text-noto bg-top py-32 font-noto">
       <div class="bg-part107 w-full h-[100px] absolute -top-2"></div>
       <div class="w-11/12 md:w-[1100px] m-auto bg-[#ffffffd6]  rounded-2xl mb-6">
            <div class="w-10/12 m-auto py-6 flex justify-center flex-col items-center">
                <p class="text-black text-[40px] font-bold mb-10">Video</p>
                <div class="flex pb-10">
                    <div class="grid gap-x-4 gap-y-4  grid-cols-2 md:grid-cols-3 md:gap-x-10 md:gap-y-10" >
                            <img src="./image/m2_404.png" alt="" class="rounded-xl cursor-pointer" @click="isOpen = true">
                            <img src="./image/m2_403.png" alt="" class="rounded-xl cursor-pointer" @click="isOpen2 = true">
                            <img src="./image/m2_405.png" alt="" class="rounded-xl cursor-pointer" @click="isOpen3 = true">
                    </div>
                </div>
            </div>
       </div>
    </div>
    <div class=" relative">
      <teleport to="body">
        <transition name="fade" v-for="item of list4" :key="item.id">
          <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 max-w-full bg-[#0000009d] h-full w-full flex justify-center items-center" v-if="isOpen2"   >
              <div class="bg-white rounded-2xl p-[40px] w-[92%] md:w-[60%]  relative"  >
                  <div class=" relative pb-[56.25%] mt-6"  >
                    <iframe class=" absolute top-0 left-0 w-full h-full" :src="item.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="absolute top-5 right-5 cursor-pointer " @click="isOpen2 = flase">
                    <img src="./image/m2_close.svg" alt="">
                  </div>
              </div>
          </div>
        </transition>
      </teleport>
    </div>
    <div class=" relative">
      <teleport to="body">
        <transition name="fade" v-for="item of list2" :key="item.id">
          <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 max-w-full bg-[#0000009d] h-full w-full flex justify-center items-center" v-if="isOpen"   >
              <div class="bg-white rounded-2xl p-[40px] w-[92%] md:w-[60%]  relative"  >
                  <div class=" relative pb-[56.25%] mt-6"  >
                    <iframe class=" absolute top-0 left-0 w-full h-full" :src="item.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="absolute top-5 right-5 cursor-pointer " @click="isOpen = flase">
                    <img src="./image/m2_close.svg" alt="">
                  </div>
              </div>
          </div>
        </transition>
      </teleport>
    </div>
    <div class=" relative">
      <teleport to="body">
        <transition name="fade" v-for="item of list3" :key="item.id">
          <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 max-w-full bg-[#0000009d] h-full w-full flex justify-center items-center" v-if="isOpen3"   >
              <div class="bg-white rounded-2xl p-[40px] w-[92%] md:w-[60%]  relative"  >
                  <div class=" relative pb-[56.25%] mt-6"  >
                    <iframe class=" absolute top-0 left-0 w-full h-full" :src="item.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="absolute top-5 right-5 cursor-pointer " @click="isOpen3 = flase">
                    <img src="./image/m2_close.svg" alt="">
                  </div>
              </div>
          </div>
        </transition>
      </teleport>
    </div>
</template>
<script>
export default {
  setup() {
    // const displayAwardView = inject('displayAwardView')
    const displayAwardView = ref(false)
    const actionAward = () => {
      displayAwardView.value = true
    }
    const isOpen = ref(false)
    const isOpen2 = ref(false)
    const isOpen3 = ref(false)

    const list = ref([
      { id: 1, 
        url: './image/m2_402.jpg',
      },
      { id: 2, 
        url: './image/m2_402.jpg',
      },
      { id: 3, 
        url: './image/m2_402.jpg',
      },
    ])

    const list2 = ref([
      { id: 1, 
        url:'https://www.youtube.com/embed/Wa3meAlQIEg'
      },  
    ])
    const list3 = ref([
      { id: 1, 
        url:'https://www.youtube.com/embed/3X7e1dAIHB4'
      },  
    ])
    const list4 = ref([
      { id: 1, 
        url:'https://www.youtube.com/embed/9NhsryMz2OA'
      },  
    ])

    return {
      list,
      list2,
      list3,
      list4,
      isOpen,
      isOpen2,
      isOpen3
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