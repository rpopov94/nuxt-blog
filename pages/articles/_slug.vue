<template>
  <div>
    <img
      :src="'/images/' + article[0].image"
      class="pt-2 w-full object-cover cover-image"
      style="height: 24rem; width: 100%; padding-top: 0"
      :alt="article.image"
    />
    <h1 class="prose text-4xl leading-9 py-4 font-bold text-center">
      {{ article[0].layout }}
    </h1>
    <h6 class="prose leading-9 font-italic font-weight-light">
      Описание: {{ article[0].abstract }}
    </h6>
    <Tags :tags="article[0].tags" />
    <p class="blog-date text-gray-500 mb-4">
      Последнее обновление: {{ formatDate(article[0].updatedAt) }}
    </p>
    <nuxt-content class="markdown" :document="article[0]" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Tags from '~/components/Tags.vue'

export default {
  components: { Tags },
  async asyncData ({ params, store }) {
    await store.dispatch('articles/fetchArticle', params.slug)
  },
  computed: {
    article () {
      return this.$store.state.articles.article
    }
  },
  methods: {
    ...mapActions('articles', ['fetchArticle']),
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped></style>
