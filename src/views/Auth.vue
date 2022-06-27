<template>
  <div>
    AUTH
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
if (route.query.code) {
  localStorage.setItem('authorization', String(route.query.code))
}
router.push({
  name: 'Home'
})

</script>

<style scoped>
</style>