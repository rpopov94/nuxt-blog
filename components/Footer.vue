<template>
  <div class="text-center">
    <hr>
    <div class="d-grid gap-4 grid-cols-3">
      <b-link href="https://github.com/rpopov94">
        <b-img src="icons/git.svg" />
      </b-link>
      <b-link href="https://t.me/rpopov94">
        <b-img src="icons/tg.svg" />
      </b-link>
      <b-link href="https://hh.ru/resume/dcc8fc29ff07df16670039ed1f534d6e576d6b">
        <b-img src="icons/hh.svg" />
      </b-link>
    </div>
    © {{ year }} Popov Roman
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
input {
  border-radius: 5px;
  border-color: #17a2b8;
}
</style>
