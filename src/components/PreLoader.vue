<template>
  <div class="preloader">
    <img
      :src="require('../assets/logo.png')"
      class="preloader-img"
      :class="preLoaderClass"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "PreLoader",
  data() {
    return {
      preLoaderClass: "pulsate-fwd"
    };
  },
  methods: {
    preLoadAway: function() {
      let vm = this;
      setTimeout(function() {
        vm.preLoaderClass = "scale-out-center";
      }, 3900);
    }
  },
  mounted() {
    this.preLoadAway();
  }
};
</script>

<style lang="scss">
.preloader-img {
  width: 10vw;
}
</style>
