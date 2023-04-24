import { $content } from '@nuxt/content'

export const state = () => ({
  project: null,
  projects: []
})

export const mutations = {
  SET_PROJECT (state, project) {
    state.project = project
  },
  SET_PROJECTS (state, projects) {
    state.projects = projects
  }
}

export const actions = {
  async fetchProject ({ commit }, slug) {
    const project = await $content('projects')
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

    commit('SET_PROJECT', project || null)
  },
  async fetchProjects ({ commit }) {
    const projects = await $content('projects')
      .only([
        'layout',
        'title',
        'image',
        'path',
        'date',
        'abstract',
        'link'
      ])
      .sortBy('date', 'desc')
      .fetch()

    commit('SET_PROJECTS', projects)
  }
}
