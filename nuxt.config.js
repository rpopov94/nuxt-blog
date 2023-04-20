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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
      return []
        .concat(
          ...posts
            .map(w => w.path)
        )
        .concat(...projects.map(p => p.path))
        .concat(
          ...articles
            .map(a => a.path))
    }
  },
  build: {
    extend (config, ctx) {}
  }
}
