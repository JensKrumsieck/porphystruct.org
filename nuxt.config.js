
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
      { rel: 'preconnect', href: 'https://use.fontawesome.com/' },
      { rel: 'preload', href: 'https://use.fontawesome.com/releases/v5.12.1/css/all.css', as: 'style' },
      { rel: 'preload', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600|Titillium+Web:200,300,300i,400,600&display=swap', as: 'style' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.12.1/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600|Titillium+Web:200,300,300i,400,600&display=swap' }
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
  pageTransition: {
    name: 'page'
  },
  layoutTransition: {
    name: 'page'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vueparticles', ssr: false }
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
    '@bazzite/nuxt-optimized-images',
    'nuxt-svg-loader',
    'nuxt-buefy',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    "nuxt-compress",
  ],
  optimizedImages: {
    optimizeImages: true
  },
  "nuxt-compress": {
    gzip: {
      cache: true
    },
    brotli: {
      threshold: 10240
    }
  },
  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'fas'
  },
  sitemap: {
    hostname: 'http://porphystruct.de',
    gzip: true
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
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[name].[contenthash].css',
    },
    extend(config, ctx) {
    }
  },

render: {
  static: {
    maxAge: 1000 * 60 * 60 * 24 * 21
  }
},

  router: {
    linkExactActiveClass: 'is-active'
  }
}
