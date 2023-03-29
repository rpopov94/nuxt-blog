<template>
  <div>
    <welcome />
    <div class="row">
      <div class="col-md-6">
        <div class="card-body text-center">
          <img
            src="/images/avatar.jpg"
            class="rounded-circle img-fluid"
            style="width: 150px;"
          >
          <h5 class="my-3">
            Popov Roman
          </h5>
          <p class="text-muted mb-1">
            Web Developer
          </p>
          <p class="text-muted mb-4">
            Moskow, Russia
          </p>
          <div class="d-flex justify-content-center mb-2">
            <b-button type="button" class="ms-1" to="/contacts">
              Сontact with me
            </b-button>
            <button type="button" class="btn btn-outline-primary ms-1">
              Resume
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <p>Tags:</p>
        <div class="flex">
          <TagCloud :articles="articles" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import TagCloud from '~/components/TagCloud.vue'

export default {
  components: { TagCloud, Welcome },
  async asyncData ({ $content }) {
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
        'external'
      ])
      .where({ draft: { $ne: true } })
      .sortBy('date', 'desc')
      .fetch()
    articles = articles.filter(x => !x.path.startsWith('/skills/'))
    return {
      articles
    }
  }
}
</script>
<style>
</style>
