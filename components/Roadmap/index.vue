<template>
  <div class="w-full h-auto bg-[#1F1631] font-noto pb-10">
    <div class="w-9/12 md:w-7/12 py-10 m-auto text-white ">
        <div class="text-white text-[40px] text-center mb-10 font-bold">Roadmap</div>
        <div class="flex flex-col md:flex-row justify-center" >
            <div class="flex justify-center md:justify-start items-center flex-col flex-1 mx-2" v-for="item of list" :key="item.id">
                <div class="arrow w-full h-[40px] mx-3 flex items-center mb-8 md:mb-6 text-[22px] font-bold justify-center" :class="item.style">
                    {{ item.year }}
                </div>
                <div class="w-full text-[#B1A5C9] h-auto p-2">
                    <div class="flex flex-col">
                        <div class="flex mb-2">
                            <div class="w-2/12 text-end mr-2 ">
                                {{ item.month1 }}
                            </div>
                            <div class="flex flex-col w-10/12">
                                <p>{{ item.m1message }}</p>
                                <p>{{ item.m1messagep2 }}</p>
                            </div>
                        </div>
                        <div class="flex mb-2">
                            <div class="w-2/12 text-end mr-2">
                                 {{ item.month2 }}
                            </div>
                            <div class="flex flex-col w-10/12">
                                {{ item.m2message }}
                            </div>
                        </div>
                        <div class="flex mb-2">
                            <div class="w-2/12 text-end mr-2">
                                 {{ item.month3 }}
                            </div>
                            <div class="flex flex-col w-10/12">
                                {{ item.m3message }}
                            </div>
                        </div>
                        <div class="flex mb-2">
                            <div class="w-2/12 text-end mr-2">
                                 {{ item.month4 }}
                            </div>
                            <div class="flex flex-col w-10/12">
                                {{ item.m4message }}
                            </div>
                        </div>
                        <div class="flex mb-2">
                            <div class="w-2/12 text-end mr-2">
                                 {{ item.month5 }}
                            </div>
                            <div class="flex flex-col w-10/12">
                                {{ item.m5message }}
                            </div>
                        </div>
                        <div class="flex mb-2">
                            <div class="w-2/12 text-end mr-2">
                                 {{ item.month6 }}
                            </div>
                            <div class="flex flex-col w-10/12">
                                {{ item.m6message }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#3A3551] w-9/12 md:w-5/12  m-auto h-auto p-4 md:p-10 rounded-xl font-noto">
        <div class="flex flex-col md:flex-row mb-10" >
            <div class="flex-1 flex-col p-4" v-for="item of list2" :key="item.id">
                <div class="text-[15px] text-[#B1A5C9] mb-2">
                    {{ item.tip }}
                </div>
                <div class="text-[22px] mb-6 text-white font-bold">
                    <p>{{ item.title }}</p>
                    <p>{{ item.title2 }}</p>
                </div>
                <div class="text-[15px] text-white mb-10 md:mb-0">
                    <p class="mb-1">{{ item.message }}</p>
                    <p class="mb-1">{{ item.m1message }}</p>
                    <p class="mb-1">{{ item.m2message }}</p>
                    <p class="mb-1">{{ item.m3message }}</p>
                    <p class="mb-1">{{ item.m4message }}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const list = ref([
        {
            id: 1, 
            year: '2021', style: 'bg-[#5A129A]',
            month1: '6月/', m1message :'GPG神遊平台 上線', m1messagep2 :'《GPG神遊礦寵》1.0 版 上線',
            month2: '7月/', m2message :'GPG神遊平台 第一波遊戲上線',
            month3: '8月/', m3message :'GPG神遊平台 第二波遊戲上線',
        },
        {
            id: 2,  
            year: '2022', style: 'bg-[#9D44EB]',
            month1: '2月/', m1message :'《GPG神遊礦寵》改版啟動',
            month2: '5月/', m2message :'《GPG神遊礦寵》 空投活動上線',
            month3: '8月/', m3message :'《GPG神遊礦寵》 2.0版 遊戲上線',
            month4: '9月/', m4message :'《GPG神遊礦寵》碎片系統、競標交易所上線',
            month5: '10月/', m5message :'《GPG神遊礦寵》交易功能實裝',
            month6: '12月/', m6message :'《GPG神遊礦寵》第一波小遊戲上線',
        },
        {
            id: 3,  
            year: '2023', style: 'bg-[#9177FF]',
            month1: '3月/', m1message :'《GPG神遊礦寵》第二波小遊戲上線GPG神遊平台與思維工坊《烈焰戰紀》串聯上線',
            month2: '4月/', m2message :'《GPG神遊礦寵》礦寵合成系統上線',
            month3: '5月/', m3message :'《GPG神遊礦寵》礦池與企業聯名點數系統上線',
        },
    ])

    const list2 = ref([
        {
            id: 1, 
            tip: '上線預告', 
            title:'遊戲預計8月底上線',
            message:'comming soon...',
        },
        {
            id: 2, 
            tip: '上線預告', 
            title:'集氣人數人數已達標：',
            title2:'10,000 人即將空投',
            m1message :'GPG神遊平台 上線',
            m2message :'GPG神遊平台 第一波遊戲上線',
            m3message :'GPG神遊平台 第二波遊戲上線',
            m4message :'GPG神遊平台 第三波遊戲上線',
        },
    ])

    return {
        list,
        list2,
    };
  },
};
</script>
<style scope>
.arrow{
    clip-path: polygon(0 0, 92% 0%, 100% 50%, 92% 100%, 0% 100%);
}
</style>