<template>
  <pre>
    {{ article }}
  </pre>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug)
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
      article
    }
  }
}
</script>

<style scoped>

</style>
