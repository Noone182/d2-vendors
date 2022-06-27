<template>
  <div class="home">
    <pre-loader v-if="!isDestroyed" />
    <transition name="component-transition" enter-active-class="scale-in-center">
      <nav-main v-if="isDestroyed" />
    </transition>
  </div>
</template>

<script>
import PreLoader from "@/components/PreLoader.vue";
import NavMain from "@/components/NavMain.vue";
export default {
  name: "Home",
  components: {
    PreLoader,
    NavMain
  },
  data() {
    return { isDestroyed: false };
  },

  // async mounted() {
  //   function timeout(ms) {
  //     return new Promise(resolve => setTimeout(resolve, ms));
  //   }
  //   await timeout(5000);
  //   this.isDestroyed = true;
  // }
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
