export default {
  target: 'static',
  router: {
    base: '/nuxt_portfolio_blog/',
    trailingSlash: false
  },
  env: {
    API_URL: process.env.API_URL
  },
  generate: {
    dir: 'docs',
    subFolders: true
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

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxt/content'
  ],
  build: {
    extend (config, ctx) {}
  }
}
