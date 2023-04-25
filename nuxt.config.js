export default {
  target: 'static',
  env: {
    baseUrl: process.env.API_URL || 'https://rpopov94.github.io'
  },
  generate: {
    dir: 'docs'
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/bootstrap/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/bootstrap-vue@2.0.0/dist/bootstrap-vue.min.css' }
    ],
    script: [
      { src: 'https://unpkg.com/vue@2.6.14/dist/vue.min.js' },
      { src: 'https://unpkg.com/bootstrap-vue@2.0.0/dist/bootstrap-vue.min.js' }
    ]
  },

  loading: { color: '#fff' },

  css: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  axios: {
    baseURL: 'https://rpopov94.github.io'
  },
  sitemap: {
    hostname: 'https://rpopov94.github.io',
    routes: async () => {
      const { $content } = require('@nuxt/content')

      const posts = await $content({ deep: true })
        .only(['path', 'draft'])
        .where({ draft: { $ne: true } })
        .fetch()
      const projects = await $content('projects').only(['path']).fetch()
      const articles = await $content('articles').only(['path']).fetch()
      return [
        ...posts.map(w => w.path),
        ...projects.map(p => p.path),
        ...articles.map(a => a.path)
      ]
    }
  },
  build: {
    extend (config, ctx) {}
  }
}
