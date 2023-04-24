<template>
  <div class="mt-5">
    <b-row>
      <b-col md="6">
        <div class="text-center">
          <img
            src="images/avatar.jpg"
            class="img-fluid"
            style="width: 500px;"
          >
        </div>
        <contacts />
      </b-col>
      <b-col md="6">
        <welcome />
      </b-col>
    </b-row>
    <items-cloud title="List my projects" :items="projects" />
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
