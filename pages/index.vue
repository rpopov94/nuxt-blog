<template>
  <div class="mt-5">
    <div class="text-center"> <h1>Hi! I'm Popov Roman</h1></div>
    <div class="text-center">
      <img
        src="images/avatar.jpg"
        class="img-fluid"
        style="width: 500px;"
      >
    </div>
    <welcome />
    <div class="text-center"><h3>List my projects</h3></div>
    <hr>
    <b-row>
      <b-col v-for="(project, id) in projects" :key="id" md="4">
        <div class="mb-2">
          <b-card
            :title="project.layout"
            :img-src="'images/' + project.image"
            img-alt="Image"
            img-top
            tag="article"
            class="h-100"
            style="min-height: 200px; max-width: 400px"
          >
            <b-card-text>
              {{ project.abstract }}
            </b-card-text>
            <b-button :href="project.path" variant="primary">
              Follow
            </b-button>
          </b-card>
        </div>
      </b-col>
    </b-row>
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
