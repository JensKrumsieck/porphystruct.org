
export default {
  mode: 'spa',//alternative: spa
  /*
  ** Headers of the page
  */
  head: {
    title: 'PorphyStruct',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://use.fontawesome.com/'},
      { rel: 'preload', href: 'https://use.fontawesome.com/releases/v5.12.1/css/all.css', as: 'style'},
      { rel: 'preload', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600|Titillium+Web:200,300,300i,400,600&display=swap', as: 'style'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.12.1/css/all.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600|Titillium+Web:200,300,300i,400,600&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/global.scss'
  ],
  pageTransition:{
    name: 'page'
  },
  layoutTransition:{
    name: 'page'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '@/plugins/vueparticles', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-svg-loader',
    'nuxt-buefy',
    '@nuxtjs/style-resources',
    /*'@nuxtjs/sitemap'*/
  ],
  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'fas'
  },

  styleResources: {
    scss: ['assets/variables.scss']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    
   extend (config, ctx) {
    }
  },
  router: {
    linkExactActiveClass: 'is-active'
  }
}
