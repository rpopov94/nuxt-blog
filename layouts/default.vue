<template>
  <div>
    <Navbar />
    <div class="container min-vh-100">
      <main class="pb-5">
        <nuxt />
      </main>
    </div>
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
