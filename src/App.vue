<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { nextTick } from 'vue'
  import { useRouter } from 'vue-router'
  import KTComponent from './assets/metronic/core/index'
  import KTLayout from './assets/metronic/app/layouts/demo1'

  const router = useRouter()


  // استدعاء بعد كل route change
  router.afterEach(() => {
    nextTick(() => {
      KTComponent.init()
      KTLayout.init()
    })
  })

  </script>

<template>
    <RouterView />

</template>

<style scoped></style>
