<template>
  <div class="mt-4">
    <main class="pb-5">
      <div v-if="tags.length === 0">
        <error />
      </div>
      <div v-else>
        <h1 class="mb-5 text-center">
          Список статей по тегу #{{ title }}
        </h1>
        <hr>
        <b-row>
          <b-col v-for="(tag, id) in tags" :key="id" md="4">
            <item :item="tag" class="theme" />
          </b-col>
        </b-row>
      </div>
    </main>
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
      tags,
      title: params.tag
    }
  }
}
</script>

<style scoped>
.tag {
  background-color: #41b38a;
  transition: transform 0.2s;
}
</style>
