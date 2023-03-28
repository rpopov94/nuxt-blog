<template>
  <div>
    <div v-for="(article, id) in articles" :key="id" md="4">
      <div>
        <img
          :src="article.image"
        >
        <b-card :title="article.layout">
          <b-card-text>
            {{ article.abstract }}
          </b-card-text>

          <b-button :href="article.path" class="card-link">Go</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    let articles = await $content({ deep: true })
      .only([
        'title',
        'description',
        'image',
        'slug',
        'author',
        'date',
        'path',
        'tags',
        'abstract'
      ])
      .where({ draft: { $ne: true } })
      .where({ tags: { $containsAny: [params.tag] } })
      .sortBy('date', 'desc')
      .fetch()

    articles = articles.filter(x => !x.path.startsWith('/skills/'))
    return {
      articles
    }
  }
}
</script>

<style scoped>
div {
  display: block;
}
</style>
