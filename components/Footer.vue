<template>
  <footer class="footer fixed-bottom">
    <div class="mx-auto max-w-6xl p-4 lg:px-16 text-center">
      <hr>
      <div class="grid grid-cols-5 items-center gap-4 px-4">
        <a href="https://github.com/rpopov94">
          <GitHubIcon />
        </a>
        <a href="https://t.me/rpopov94">
          <TgIcon />
        </a>
        <a href="https://hh.ru/resume/dcc8fc29ff07df16670039ed1f534d6e576d6b">
          <hh />
        </a>
      </div>
      © {{ year }} Popov Roman
    </div>
  </footer>
</template>

<script>
import TgIcon from '~/components/icons/TgIcon.vue'
import GitHubIcon from '~/components/icons/GitHubIcon.vue'
import Hh from '~/components/icons/hh.vue'

export default {
  components: {
    Hh,
    GitHubIcon,
    TgIcon
  },
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
