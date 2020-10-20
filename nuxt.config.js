export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'buya',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      { rel: 'stylesheet', href: '/css/main.css' },
      { rel: 'stylesheet', href: '/css/all.min.css' },
      { rel: 'stylesheet', href: '/css/custom.css' }
    
    // '@/assets/',
    // "@/assets/",
    // "@/assets/",
    // "@/https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    // "@/assets/fontawesome.css"
    
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    
    
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/typed.js',
    { src : '~/plugins/vue-product-zoomer.js', mode : "client"},
    { src : '~/plugins/carousel.js', mode : "client"},
    { src : '~/plugins/particle.js', mode : "client"},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },



  // routeParams: {
  //     '/percetakan/:id': function () {
  //       return axios.get('https://scientific-ultra-dumpling.glitch.me/api?id=1DmxAYjzMzLscRlA7UhnMqGLEYgoJhO9lC40KwsU2v50').then(res =>{
  //         // res.data should be like [{id: 1}, {id: 2}...]
  //         return res.data
  //       })
  //     }
  //   } 
  

}
