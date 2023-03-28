<template>
  <div class="mx-auto max-w-6xl p-4 lg:px-16 text-center">
    <div v-for="(article, id) in articles" :key="id">
      <div>
        <b-card
          :title="article.title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            {{article.abstract}}
          </b-card-text>

          <b-button :href="article.path" variant="primary">Go</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('articles')
      .only([
        'layout',
        'title',
        'comments',
        'permalink',
        'github',
        'image',
        'path',
        'date',
        'slug',
        'content',
        'abstract'
      ])
      .sortBy('date', 'desc')
      .fetch()
    return {
      articles
    }
  }
}

</script>

<style scoped>

</style>
