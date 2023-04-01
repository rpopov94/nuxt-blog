export default {
  target: 'static',
  router: {
    base: '/portfolio/'
  },
  generate: {
    dir: 'docs',
    subFolders: false
  },
  head: {
    title: 'Popov Roman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },

  css: [],

  plugins: ['~/plugins/moment.js'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://rpopov94.github.io/portfolio/'
  },
  build: {
    extend (config, ctx) {}
  }
}
