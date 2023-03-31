<template>
  <div>
    <Navbar />
    <b-container>
      <nuxt />
    </b-container>
    <Footer />
  </div>
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
