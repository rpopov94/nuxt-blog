<template>
  <div class="mt-4">
    <div class="container min-vh-100">
      <main class="pb-5">
        <div v-for="(article, id) in tags" :key="id" md="4">
          <div class="py-3">
            <b-card :title="article.layout">
              <img
                v-if="article.image"
                :src="'/portfolio/images/' + article.image"
                style="max-width: 100%; max-height: 2.0rem;"
              >
              <b-card-text>
                {{ article.abstract }}
              </b-card-text>
              <b-button :href="'/portfolio/articles/' + article.slug" class="card-link">
                Go
              </b-button>
            </b-card>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    let tags = await $content({ deep: true })
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

    tags = tags.filter(x => !x.path.startsWith('/projects/'))
    return {
      tags
    }
  }
}
</script>

<style scoped>
div {
  display: block;
}
</style>
