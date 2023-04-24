<template>
  <div>
    <h1 class="mb-5 text-center">
      {{ title }}
    </h1>
    <hr>
    <b-row>
      <b-col v-for="(item, id) in items" :key="id" md="4">
        <item :item="item"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array
  }
}
</script>

<style scoped>

</style>
