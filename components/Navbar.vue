<template>
  <div class="text-center">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/nuxt_portfolio_blog">
        Popov Roman
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/nuxt_portfolio_blog/files/resume.pdf">
            Resume
          </b-nav-item>
          <b-nav-item href="/nuxt_portfolio_blog/contacts">
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
