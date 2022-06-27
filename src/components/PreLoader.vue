<template>
  <div class="preloader">
    <img src="../assets/logo.png" class="preloader-img" :class="preLoaderClass" alt="" />
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
    preLoadAway() {
      setTimeout(() => {
        this.preLoaderClass = "scale-out-center";
      }, 3900);
    }
  },
  mounted() {
    if (localStorage.getItem('authorization')) {
      this.preLoadAway()
    } else {
      this.preLoaderClass = "scale-out-center";
    }

  }
};
</script>

<style lang="scss">
.preloader-img {
  width: 10vw;
}
</style>
