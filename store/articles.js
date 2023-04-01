import { $content } from '@nuxt/content'

export const state = () => ({
  article: null,
  articles: []
})

export const mutations = {
  setArticle (state, article) {
    state.article = article
  },
  SET_ARTICLES (state, articles) {
    state.articles = articles
  }
}

export const actions = {
  async fetchArticle ({ commit }, slug) {
    const article = await $content('articles')
      .where({ slug })
      .only([
        'layout',
        'image',
        'abstract',
        'tags',
        'body',
        'createdAt',
        'updatedAt'
      ])
      .fetch()

    commit('setArticle', article || null)
  },
  async fetchArticles ({ commit }) {
    const articles = await $content('articles')
      .only([
        'layout',
        'title',
        'comments',
        'permalink',
        'github',
        'image',
        'path',
        'date',
        'slug',
        'content',
        'abstract'
      ])
      .sortBy('date', 'desc')
      .fetch()

    commit('SET_ARTICLES', articles)
  }
}
