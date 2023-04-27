<template>
  <div class="flex flex-wrap -ml-1 py-2">
    <div v-for="(tag, id) in tags" :key="id" class="px-1">
      <nuxt-link :key="tag" :to="`/articles/tags/${tag}`">
        <div
          class="px-2 text-lg text-white rounded-lg mx-1 mt-1 uppercase cursor-pointer tag"
        >
          {{ tag }} 🏷️
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
}
.tag {
  background-color: #17a2b8;
  transition: transform 0.2s;
}
.tag:hover {
  transform: scale(1.05);
}
</style>
