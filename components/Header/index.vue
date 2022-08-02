<template>
  <div class="w-full h-screen bg-moheaderImg md:bg-headerImg relative bg-no-repeat bg-cover" id="header">
    <Navbar class="z-20 absolute" />
    <div class="mine__top flex flex-col items-center justify-end h-full max-w-[800px] mx-auto p-[20px] md:p-0">
      <img src="./image/i_logo_m2.svg" class="mb-0 md:mb-12 w-[187px] md:w-full mb-[20px] max-w-[490px]" />
      <InfoText />
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return{
    }
  }
}
</script>
