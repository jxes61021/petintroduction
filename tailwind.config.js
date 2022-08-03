module.exports = {
  content: [
    "./index.html",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerImg': "url('/assets/img02_pc.png')",
        'moheaderImg': "url('/assets/m2mo_topbg.jpg')",
        'infoImg': "url('/assets/img03_pc.png')",
        'part101': "url('/assets/bg_part101.png')",
        'part102': "url('/assets/bg_part102.png')",
        'part103': "url('/assets/bg_part103.png')",
        'partm2': "url('/assets/m2_303.png')",
        'part104': "url('/assets/bg_part104.png')",
        'part105': "url('/assets/bg_part105.png')",
        'part106': "url('/assets/bg_part106.png')",
        'part107': "url('/assets/bg_part107.png')",
        'gopet': "url('/assets/m2pc_islandbg.jpg')",
        'mogopet': "url('/assets/m2mo_islandbg.jpg')",
        'gpginfo': "url('/assets/m2_bg002.jpg')",
        'videobg': "url('/assets/videobg.png')",
      },
      fontFamily: {
        noto:["Noto Sans TC", "sans-serif"],
      },
      boxShadow: {
        btn: '2px 4px 2px 0 rgb(103, 6, 138. 1)',
      },
    },
  },
  // plugins: [
  //   require('tw-elements/dist/plugin')
  // ],
}
