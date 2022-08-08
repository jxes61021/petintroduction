<template lang="pug">
div(class="overflow-hidden")
  nuxtLayout
    NuxtPage
</template>
<script>
export default {
  setup() {
    useHead({
      title: '《GPG神遊礦寵》2.0官方網站，就讓GPG神遊礦寵陪你暢遊元宇宙！',
      viewport: 'width=device-width, initial-scale=1.0',
      charset: 'UTF-8',
      meta: [
        { name: 'description', content: '《GPG神遊礦寵》是一款結合遊戲化金融（GameFi）、雲端挖礦、萌寵養成社交與邊玩邊賺（Play to Earn）元素的遊戲，支援手機、電腦、平板遊玩。玩家將透過培養礦寵來提升礦寵的算力，提升礦寵的算力將更有機會挖到更多寶物。從各式虛寶、虛擬貨幣、加密貨幣、gogoro電動車、VR主機、任天堂switch等都能挖到！持續養成礦寵，就能得到更多被動收入。' },
        { name: 'keywords', content: '礦寵,GameFi,PlaytoEarn,邊玩邊賺,被動收入,雲端挖礦ptt,鏈遊ptt,手遊ptt,寵物養成遊戲' },
        { property:"og:title", content:"《GPG神遊礦寵》2.0官方網站，就讓GPG神遊礦寵陪你暢遊元宇宙！" },
        { property:"og:description", content:"《GPG神遊礦寵》是一款結合遊戲化金融（GameFi）、雲端挖礦、萌寵養成社交與邊玩邊賺（Play to Earn）元素的遊戲，支援手機、電腦、平板遊玩。玩家將透過培養礦寵來提升礦寵的算力，提升礦寵的算力將更有機會挖到更多寶物。從各式虛寶、虛擬貨幣、加密貨幣、gogoro電動車、VR主機、任天堂switch等都能挖到！持續養成礦寵，就能得到更多被動收入。" },
        { property:"og:image", content:"/event/miningpet/og-image.jpg" },
        { property:"og:image:type", content:"image/jpg" },
        { property:"og:image:width", content:"1200" },
        { property:"og:image:height", content:"630" }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/assets/favicon.ico' }
      ],
      bodyAttrs: {}
    })
    return{
    }
  }
}
</script>
