<template>
  <div class="text-center temp">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">
        Popov Roman
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/articles">
            Articles
          </b-nav-item>
          <b-nav-item href="/files/resume.pdf">
            Resume
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.temp {
  font-size: 24px;
}
</style>
