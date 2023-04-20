<template>
  <div class="mt-auto">
    <div class="container min-vh-100">
      <main class="pb-5">
        <img
          v-if="project.image"
          :src="'/images/' + project.image"
          class="pt-2 w-full object-cover cover-image"
          style="height: 24rem; width: 100%; padding-top: 0"
          :alt="project.image"
        >
        <h1 class="prose text-4xl leading-9 py-4 font-bold text-center">
          {{ project.layout }}
        </h1>
        <h6 class="prose leading-9 font-italic font-weight-light">
          Описание: {{ project.abstract }}
        </h6>
        <p class="blog-date text-gray-500 mb-4">
          Последнее обновление: {{ formatDate(project.updatedAt) }}
        </p>
        <nuxt-content class="markdown" :document="project" />
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  async asyncData ({ params, store }) {
    await store.dispatch('projects/fetchProject', params.slug)
  },
  computed: {
    project () {
      return this.$store.state.projects.project[0]
    }
  },
  methods: {
    ...mapActions('articles', ['fetchArticle']),
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
