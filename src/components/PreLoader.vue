<template>
  <div class="preloader">
    <v-logo class="preloader-img" :class="preLoaderClass" />
  </div>
</template>

<script>
import vLogo from '@/assets/logo.svg?component'
export default {
  name: "PreLoader",
  components: {
    vLogo
  },
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
  // mounted() {
  //   if (localStorage.getItem('authorization')) {
  //     this.preLoadAway()
  //   } else {
  //     this.preLoaderClass = "scale-out-center";
  //   }

  // }
};
</script>

<style lang="scss">
.preloader-img {
  width: 20vw;
  height: 20vh;
  fill: white;
}
</style>
