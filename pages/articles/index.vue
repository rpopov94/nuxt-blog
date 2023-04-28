<template>
  <div class="mt-5">
    <items-cloud title="Articles" :items="articles" />
<!--    <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" />-->
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
