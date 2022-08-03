<template lang="pug">
div(class='bg-[#1F1631] w-full h-auto font-noto pb-10')
  div(class='w-9/12 md:w-7/12 py-10 m-auto text-white')
    div(class='text-[40px] text-white text-center mb-10 font-bold') Roadmap
    div(class='flex flex-col justify-center md:flex-row')
      div(
        class='flex justify-center items-center flex-col flex-1 mx-2 md:justify-start' 
        v-for='item of list' 
        :key='item.id')
        .arrow(:class='item.style' class='w-full mx-3 flex items-center mb-8 font-bold justify-center h-[40px] md:mb-6 text-[22px]') {{ item.year }}
        div(class='w-full h-auto p-2 text-[#B1A5C9]')
          div(class="flex flex-col")
            div(class="flex mb-2" v-for='(messages, index) of item.message')
              div(class='w-2/12 text-end mr-2') {{ item.month[index] }}
              div(v-html="messages" class='flex flex-col w-10/12')
  div(class='m-auto h-auto p-4 rounded-xl font-noto bg-[#3A3551] w-9/12 md:w-5/12 md:p-10')
    div(class='flex flex-col mb-10 md:flex-row')
        div(v-for='item of list2' :key='item.id' class="flex-1 flex-col p-4")
            div(class='mb-2 text-[15px] text-[#B1A5C9]') {{ item.tip }}
            div(class='mb-6 text-white font-bold text-[22px]')
                p(v-for='titles of item.title') {{ titles }}
            div(class='text-white mb-10 text-[15px] md:mb-0')
                p(class="mb-1" v-for='messages of item.message') {{ messages }}
</template>
<script>
export default {
  setup() {
    const list = ref([
        {
            id: 1,
            year: '2021', style: 'bg-[#5A129A]',
            month: [
               '6月/','7月/','8月/'
            ],
            message: [
                'GPG神遊平台 上線<br>《GPG神遊礦寵》1.0 版 上線',
                'GPG神遊平台 第一波遊戲上線',
                'GPG神遊平台 第二波遊戲上線',
            ]
        },
        {
            id: 2,
            year: '2022', style: 'bg-[#9D44EB]',
            month: [
               '2月/','5月/','8月/','9月/','10月/','12月/' 
            ],
            message: [
                '《GPG神遊礦寵》改版啟動',
                '《GPG神遊礦寵》 空投活動上線',
                '《GPG神遊礦寵》 2.0版 遊戲上線',
                '《GPG神遊礦寵》碎片系統、競標交易所上線',
                '《GPG神遊礦寵》交易功能實裝',
                '《GPG神遊礦寵》第一波小遊戲上線',
            ]
        },
        {
            id: 3,  
            year: '2023', style: 'bg-[#9177FF]',
            month: [
               '3月/','4月/','5月/' 
            ],
            message: [
                '《GPG神遊礦寵》第二波小遊戲上線GPG神遊平台與思維工坊《烈焰戰紀》串聯上線',
                '《GPG神遊礦寵》礦寵合成系統上線',
                '《GPG神遊礦寵》礦池與企業聯名點數系統上線',
            ]
        },
    ])

    const list2 = ref([
        {
            id: 1, 
            tip: '上線預告', 
            title:[
                '遊戲預計8月底上線',
            ],
            message: [
                'comming soon...'
            ]
        },
        {
            id: 2, 
            tip: '上線預告', 
            title:[
                '集氣人數人數已達標：',
                '10,000 人即將空投'
            ],
            message: [
                'GPG神遊平台 上線',
                'GPG神遊平台 第一波遊戲上線',
                'GPG神遊平台 第二波遊戲上線',
                'GPG神遊平台 第三波遊戲上線',
            ]
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