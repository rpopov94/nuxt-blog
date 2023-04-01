<template>
    <div class="mx-auto max-w-6xl p-4 lg:px-16 text-center">
      <hr>
      <div class="grid grid-cols-5 items-center gap-4 px-4">
        <a href="https://github.com/rpopov94">
          <img src="icons/git.svg">
        </a>
        <a href="https://t.me/rpopov94">
          <img src="icons/tg.svg">
        </a>
        <a href="https://hh.ru/resume/dcc8fc29ff07df16670039ed1f534d6e576d6b">
          <img src="icons/hh.svg">
        </a>
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
