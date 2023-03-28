<template>
  <div>
    <b-row>
      <b-col v-for="(project, id) in projects" :key="id" md="4">
        <div class="mb-2">
          <b-card
            :title="project.layout"
            :img-src="'/images/' + project.image"
            img-alt="Image"
            img-top
            tag="article"
            class="h-100"
            style="min-height: 400px; max-width: 400px"
          >
            <b-card-text>
              {{ project.abstract }}
            </b-card-text>
            <b-button :href="project.path" variant="primary">
              {{ project.path }} Follow
            </b-button>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <pre>
      {{ projects }}
    </pre>
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
