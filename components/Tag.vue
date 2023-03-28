<template>
  <nuxt-link :key="tag" :to="`/articles/tags/${tag}/`">
    <div
      class="
        px-2
        text-lg
        text-white
        rounded-lg
        bg-black
        mx-1
        mt-1
        uppercase
        cursor-pointer
        tag
      "
    >
      {{ tag }} 🏷️
      <span
        v-if="count"
      >(<span class="font-bold">{{ count }}</span>)</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: ''
    },
    count: {
      type: Number,
      default: null
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
}
.tag {
  color: black;
  background-color: #17a2b8;
  transition: transform .2s;
}
.tag:hover {
  transform: scale(1.05);
}
</style>
