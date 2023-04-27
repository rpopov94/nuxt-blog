<template>
  <div class="mb-2">
    <b-card
      :img-src="'/images/' + item.image"
      img-alt="Image"
      img-top
      tag="article"
      class="h-100"
      style="min-height: 200px; max-width: 400px"
    >
      <b-card-text v-if="item && item?.link">
        <b-link :href="item?.link" class="title">
          {{ item.layout }}
        </b-link>
      </b-card-text>
      <b-card-text v-else>
        <b-link :to="item.path" class="title">
          {{ item.layout }}
        </b-link>
      </b-card-text>
      <b-card-text>
        {{ item.abstract }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style scoped>
</style>
