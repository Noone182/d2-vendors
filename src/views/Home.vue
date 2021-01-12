<template>
  <div class="home">
    <background />
    <pre-loader v-if="!isDestroyed" />
    <nav-main v-if="isDestroyed" />
  </div>
</template>

<script>
import Background from "@/components/Background";
import PreLoader from "@/components/PreLoader";
import NavMain from "@/components/NavMain.vue";
export default {
  name: "Home",
  components: {
    PreLoader,
    Background,
    NavMain
  },
  data() {
    return { isDestroyed: false };
  },

  async mounted() {
    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    await timeout(5000);
    this.isDestroyed = true;
  }
};
</script>

<style lang="scss">
.home {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
