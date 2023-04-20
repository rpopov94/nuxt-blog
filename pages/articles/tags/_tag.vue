<template>
  <div class="mt-4">
    <div class="container min-vh-100">
      <main class="pb-5">
        <div v-if="tags.length === 0">
          <error />
        </div>
        <div v-else>
          <div v-for="(tag, id) in tags" :key="id" md="4">
            <div class="card mb-3">
              <img
                v-if="tag.image"
                :src="'images/' + tag.image"
                class="card-img-top img-fluid"
                :alt="tag.image"
                style="max-height: 200px"
              >
              <div class="card-body">
                <h5 class="card-title">
                  {{ tag.layout }}
                </h5>
                <p>{{ tag.abstract }}</p>
                <b-button :href="'/nuxt_portfolio_blog/articles/' + tag.slug" class="card-link">
                  Go
                </b-button>
              </div>
            </div>
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
        'layout',
        'image',
        'slug',
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
