export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pearlNuxtBasic',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      // {type:'application/javascript',src:'/jq.js'},
      // {type:'application/javascript',src:'/popper.js'},
      // {type:'application/javascript',src:'/bs.js'},
      // {type:'application/javascript',src:'/moment.js'},
      // {type:'application/javascript',src:'/fullscreen.js'},
      // {type:'application/javascript',src:'/charts.js'},
      // {type:'application/javascript',src:'/anime.js'},
      // {type:'application/javascript',src:'/bstable.js'},
      // {type:'application/javascript',src:'/calender.js'},
      // {type:'application/javascript',src:'/infiniteScroll.js'},
      {type:'application/javascript',src:'/site.min.js'},
      // {type:'application/javascript',src:''},
      // {type:'application/javascript',src:''},
      // {type:'application/javascript',src:''},
      // {type:'application/javascript',src:''},
      // {type:'application/javascript',src:''},
      // {type:'application/javascript',src:''},
      // {type:'application/javascript',src:''},
      // {type:'application/javascript',src:''},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/site.min.css',
    '@/assets/css/bstable.css',
    '@/assets/css/icons.css',
    '@/assets/css/scrollbar.css',
    '@/assets/css/animmate.css',
    '@/assets/css/calender.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {src:'@/assets/js/site.min.js',mode:'client'},
    // {src:'@/libs/jq.js',mode:'client'},
    // {src:'@/libs/popper.js',mode:'client'},
    // {src:'@/libs/bs.js',mode:'client'},
    // {src:'@/libs/bstable.js',mode:'client'},
    // {src:'~/plugins/test.js',mode:'server'},
    // {src:'~/plugins/moment.js',mode:'client'},
    // {src:'@/libs/charts.js',mode:'client'},
    // {src:'@/libs/fullscreen.js',mode:'client'},
    // {src:'@/libs/calender.js',mode:'client'},
    // {src:'@/libs/anime.js',mode:'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
