<template>
  <div>
    <b-row>
      <b-col v-for="(article, id) in articles" :key="id" md="4">
        <div class="mb-2">
          <b-card
            :title="article.layout"
            :img-src="'/images/' + article.image"
            img-alt="Image"
            img-top
            tag="article"
            class="h-100"
            style="min-height: 400px; max-width: 400px"
          >
            <b-card-text>
              {{ article.abstract }}
            </b-card-text>
            <b-button :href="article.path" variant="primary">
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
    await store.dispatch('articles/fetchArticles')
  },
  computed: {
    articles () {
      return this.$store.state.articles.articles
    }
  }
}
</script>

<style scoped></style>
