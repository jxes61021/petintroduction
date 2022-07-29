<script setup>

</script>

<template>
  <div id="scrollBox" class="font-noto md:h-[120px] h-[200px]">
    <ul id="con1 ">
        <li class="leading-2">西元2469年，全球經濟已經崩毀，人類的生存已經陷入困境，而人類也已經不再繁衍後代。人類遺傳學與生產權威艾瑞克博士</li>
        <li class="leading-2 ">為了拯救人類的命運，決定使用時光機回到2022年，把一次一次幫助人類渡過難關的科技神寵，用空投的方式降落回「古代」</li>
    </ul>
    <ul id="con2"></ul>
</div>
</template>
<style>
ul,li {
	list-style:none;
	display:block;
}
#scrollBox {
  display: flex;
  justify-content: center;
	width:80vw;
	margin:0 auto;
	overflow:hidden;
  text-align: center;
  color:white;
}
#scrollBox #con1,#con2 {
	float:left;
}
#scrollBox li {
	text-align:left;
	margin-bottom:20px
}

</style>

