<template>
  <div class="warlock">
    <background />
    Warlock
    <router-link to="warlock">
      <object
        :data="require('../assets/warlock_emblem.svg')"
        type="image/svg+xml"
        width="150"
        height="150"
      ></object>
    </router-link>
  </div>
</template>

<script>
import Background from "@/components/Background.vue";
export default {
  name: "Warlock",
  components: {
    Background
  }
};
</script>

<style scoped></style>
