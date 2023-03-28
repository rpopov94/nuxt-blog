<template>
  <div>
    <welcome />
    <pre>
      {{ projects }}
    </pre>
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'

export default {
  components: { Welcome },
  async asyncData ({ $content }) {
    const projects = await $content('projects')
      .only([
        'layout',
        'title',
        'comments',
        'permalink',
        'github',
        'image',
        'link',
        'date',
        'slug',
        'content'
      ])
      .sortBy('date', 'desc')
      .fetch()
    return {
      projects
    }
  }
}
</script>

<style scoped></style>
