<template>
  <div>{{ projects }}</div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const projects = await $content('articles')
      .only(['layout', 'title'])
      .sortBy('date', 'desc')
      .fetch()

    return {
      projects
    }
  }
}
</script>
