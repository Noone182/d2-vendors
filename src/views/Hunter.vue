<template>
  <div class="hunter">
    <background />
    <router-link to="/">Hunter</router-link>
  </div>
</template>

<script>
import Background from "@/components/Background.vue";
export default {
  name: "Hunter",
  components: {
    Background
  }
};
</script>

<style scoped></style>
