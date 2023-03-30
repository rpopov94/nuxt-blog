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
            <b-button type="button" class="ms-1 mx-2" to="/contacts">
              Сontact with me
            </b-button>
            <b-button type="button" class="btn ms-1" to="/files/resume.pdf">
              Resume
            </b-button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <p class="text-lg font-medium mb-4">Tags by projects</p>
        <div class="mb-4">
          <TagCloud :items="projects" />
        </div>
        <p class="text-lg font-medium mb-4">Tags by articles:</p>
        <div class="flex">
          <TagCloud :items="articles" />
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
    articles = articles.filter(x => !x.path.startsWith('/projects/'))
    let projects = await $content({ deep: true })
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
    projects = projects.filter(x => !x.path.startsWith('/articles/'))
    return {
      articles,
      projects
    }
  }
}
</script>
<style scoped>
.text-lg {
  font-size: 1.125rem;
}
.font-medium {
  font-weight: 500;
}
.mb-4 {
  margin-bottom: 1rem;
}
</style>
