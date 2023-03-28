<template>
  <b-container>
    <Navbar />
    <div class="mx-auto max-w-6xl p-4 lg:px-16">
      <nuxt />
    </div>
    <Footer />
  </b-container>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: { Footer, Navbar }
}
</script>

<style>
.p-4 {
  padding: 0.5rem !important;
}
</style>
