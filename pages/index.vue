<template>
  <div>
    <div class="row">
      <Welcome />
      <div class="col-md-6">
        <div class="text-center">
          <img
            src="/portfolio/images/avatar.jpg"
            class="rounded-circle img-fluid"
            style="width: 150px;"
          >
          <div class="card-body">
            <h5 class="my-3">
              Popov Roman
            </h5>
            <p class="text-muted mb-1">
              Web Developer
            </p>
            <p class="text-muted mb-4">
              Moscow, Russia
            </p>
            <div class="d-flex justify-content-center">
              <router-link to="/portfolio/contacts" class="btn btn-secondary mx-2">
                Contact with me
              </router-link>
              <router-link to="/files/resume.pdf" class="btn btn-primary">
                Resume
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <skills-card />
<!--      <div class="mt-4">-->
<!--      <div class="mt-4">-->
<!--        <h5 class="font-medium mb-3">-->
<!--          Tags:-->
<!--        </h5>-->
<!--        <div class="d-flex flex-wrap">-->
<!--          <TagCloud :items="tags" />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    </div>
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'

export default {
  components: { Welcome },
  async asyncData ({ $content }) {
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
        'external'
      ])
      .where({ draft: { $ne: true } })
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
.font-medium {
  font-weight: 500;
}
.mb-4 {
  margin-bottom: 1rem;
}
</style>
