<template>
  <div class="mt-4 not-found">
      <h1 class="not-found__title">404 - Страница не найдена</h1>
      <p class="not-found__description">К сожалению, запрашиваемая вами страница не найдена.</p>
      <p class="not-found__link"><nuxt-link to="/">Вернуться на главную страницу</nuxt-link></p>
  </div>
</template>

<style>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.not-found__title {
  font-size: 4rem;
  margin-bottom: 2rem;
}

.not-found__description {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.not-found__link {
  font-size: 1.5rem;
}
</style>
<script setup>
</script>
