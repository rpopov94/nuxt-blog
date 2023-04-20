<template>
  <div>
    <Navbar />
    <b-container>
      <nuxt />
    </b-container>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>

<style>
.p-4 {
  padding: 0.5rem !important;
}
</style>
