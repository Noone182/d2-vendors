<template>
  <background />
  <router-view />
</template>
<script>
import Background from "@/components/Background.vue";
export default {
  components: {
    Background
  }
};
</script>