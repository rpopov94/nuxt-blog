<template>
  <div>
    <div class="row">
      <Welcome />
      <div class="col-md-6">
        <div class="text-center">
          <img
            src="/images/avatar.jpg"
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
              <router-link to="/contacts" class="btn btn-secondary mx-2">
                Contact with me
              </router-link>
              <router-link to="/files/resume.pdf" class="btn btn-primary">
                Resume
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 container">
        <div class="card">
          <div class="card-body">
            <h5 class="font-medium text-center mb-4">
              <div class="flex flex-row space-y-6 border-2 -mx-3 p-6 rounded-2xl dark:border-gray-700 dark:bg-gray-800">
                poihj
              </div>
            </h5>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h5 class="font-medium mb-3">
          Tags by projects
        </h5>
        <TagCloud :items="projects" />
      </div>
      <div class="mt-4">
        <h5 class="font-medium mb-3">
          Tags by articles:
        </h5>
        <div class="d-flex flex-wrap">
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
.container {
  max-width: 800px; /* задаем максимальную ширину контейнера */
  margin: 0 auto; /* центрируем контейнер по горизонтали */
}

.card {
  border: 1px solid #ccc; /* задаем границу для карточки */
  border-radius: 5px; /* скругляем углы карточки */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* добавляем тень */
  padding: 20px; /* задаем отступы внутри карточки */
  background-color: #fff; /* устанавливаем цвет фона */
}

.card-body {
  margin-top: 10px; /* задаем отступ сверху для содержимого карточки */
}

ul {
  list-style: none; /* убираем маркеры списка */
  margin: 0; /* убираем отступы по умолчанию */
  padding: 0; /* убираем отступы по умолчанию */
}

li {
  margin-bottom: 10px; /* задаем отступ между элементами списка */
  font-size: 18px; /* устанавливаем размер шрифта */
}
</style>
