<template>
  <div>
    <b-card header="Contacts">
      <b-list-group>
        <b-list-group-item>
          <h5>Popov Roman</h5>
          <p>Telephone: +7(910) 272 37-16</p>
          <p>e-mail: i@romanpopoff.ru</p>
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
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-unused-vars
import GitHubIcon from '~/components/GitHubIcon.vue'
// eslint-disable-next-line no-unused-vars
import TgIcon from '~/components/TgIcon.vue'
// eslint-disable-next-line no-unused-vars
import Hh from '~/components/hh.vue'
</script>
