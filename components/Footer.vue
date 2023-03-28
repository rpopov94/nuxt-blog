<template>
  <div class="mx-auto max-w-6xl p-4 lg:px-16 text-center">
    © {{ year }} Popov Roman
  </div>
</template>

<script>
export default {
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
