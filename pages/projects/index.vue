<template>
  <div class="lg:px-32 px-2 sm:px-4 mt-4">
    <ul v-for="(project, id) in projects" :key="id" class="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
      <div>
        <b-card :title="project.layout">
          <img
            v-if="project.image"
            :src="'/portfolio/images/' + project.image"
            style="max-width: 100%; max-height: 2.0rem;"
          >
          <b-card-text>
            {{ project.abstract }}
          </b-card-text>

          <b-button :href="'/portfolio' + project.path" class="card-link">
            Go
          </b-button>
        </b-card>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ store }) {
    await store.dispatch('projects/fetchProjects')
  },
  computed: {
    projects () {
      return this.$store.state.projects.projects
    }
  }
}
</script>

<style scoped></style>
