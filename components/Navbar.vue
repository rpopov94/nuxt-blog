<template>
  <div class="mx-auto max-w-6xl p-4 lg:px-16 text-center">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">
        Popov Roman
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/articles">
            Blog
          </b-nav-item>
          <b-nav-item href="/projects">
            Projects
          </b-nav-item>
          <b-nav-item href="/contacts">
            Contacts
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

<style scoped></style>
