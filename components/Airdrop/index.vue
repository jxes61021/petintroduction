<template>

  <div class=" relative -top-[200px] md:-top-[350px] bg-white">
    <div class="bg-part104 w-full bg-cover h-[400px] absolute top-0 ">
        <div class="relative w-10/12 h-full hidden md:block ">
            <img src="./image/m2_304-2.png" alt="" class="absolute right-[15%] scale-110 z-1">
            <img src="./image/m2_302.png" alt="" class="absolute right-[5%] bottom-0 z-0">
        </div>
    </div>
  </div>
  <div class="bg-[#003482] h-auto text-white mt-0 md:mt-[50px] w-full relative md:pb-28 pb-28">
    <div class="w-full md:w-6/12 m-auto grid  grid-cols-1  md:grid-cols-3 gap-4 ">
        <div class="">
            <img src="./image/m2_304.png" alt="" class=" relative top-0 md:-top-[40%] hidden md:block">
        </div>
        <div class="col-span-2 px-6 w-11/12">
            <div class="text-[40px] mb-10 font-bold text-center md:text-left">空投活動開跑</div>
            <div class="mb-10">《GPG神遊礦寵 GPG Mining Pet》將於今年暑假正式上線，並宣布自即日起啟動「礦寵空投活動」，只要到空投活動頁面完成註冊，即可成為空投白名單的一員。除了能搶先領取虛寶獎勵空投以外，更有機會免抽獎，直接帶走超商禮券、Nintendo Switch、Oculus Quest 2 VR主機、Gogoro 電動機車等豐富大獎。越早加入，越早開始雲端挖礦，領取空投大獎機率多更多！</div>
            <div class="font-bold text-xl mb-6 text-center md:text-left" v-if="peopleCount">目前集氣人數: {{peopleCount}}人</div>
            <!-- <div class="flex pb-4 justify-center md:justify-start">
                <a class="px-8 py-2 rounded-full cursor-pointer font-black hover:-fuchsia-700 bg-[#713DFF]">
                    前往集氣領空投
                </a>
            </div>   -->
        </div>
    </div>
    <div class="bg-part105 w-full h-[150px] bg-cover absolute -bottom-2"></div>
  </div>

</template> 
<script>
import axios from 'axios';
export default {
  setup() {
    const peopleCount = ref(null);
    onMounted(() => {
      const baseUrl = 'https://' + (window.location.host.includes('ceis') ? 'a1-gpg.ceis.tw' : 'a1.godplay.app');
      axios.get(baseUrl + '/Activity/gather/SignInCount', {
          params: { ActivityId: 1 },
        })
        .then((res) => {
          peopleCount.value = res.data.Data.TotalCount;
        })
        .catch((error) => {
          console.log(error);
        });
    })
    return{
      peopleCount,
    }
  }
}
</script>