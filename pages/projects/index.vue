<template>
  <div>
    <div v-for="(project, id) in projects" :key="id" md="4">
      <div>
        <img
          :src="project.image"
        >
        <b-card :title="project.layout">
          <b-card-text>
            {{ project.abstract }}
          </b-card-text>

          <b-button :href="project.path" class="card-link">Go</b-button>
        </b-card>
      </div>
    </div>
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
