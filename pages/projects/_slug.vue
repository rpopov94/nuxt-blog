<template>
  <div>
    <img
      :src="'/images/' + project[0].image"
      class="pt-2 w-full object-cover cover-image"
      style="height: 24rem; width: 100%; padding-top: 0"
      :alt="project.image"
    />
    <h1 class="prose text-4xl leading-9 py-4 font-bold text-center">
      {{ project[0].layout }}
    </h1>
    <h6 class="prose leading-9 font-italic font-weight-light">
      Описание: {{ project[0].abstract }}
    </h6>
    <Tags :tags="project[0].tags" />
    <p class="blog-date text-gray-500 mb-4">
      Последнее обновление: {{ formatDate(project[0].updatedAt) }}
    </p>
    <nuxt-content class="markdown" :document="project[0]" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Tags from '~/components/Tags.vue'

export default {
  components: { Tags },
  async asyncData ({ params, store }) {
    await store.dispatch('projects/fetchProject', params.slug)
  },
  computed: {
    project () {
      return this.$store.state['projects/project']
    }
  },
  methods: {
    ...mapActions('projects', ['fetchProject']),
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped></style>
