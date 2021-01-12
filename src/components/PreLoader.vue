<template>
  <div class="pre-loader">
    <img :src="require('../assets/logo.png')" :class="preLoaderClass" alt="" />
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
      }, 3800);
    }
  },
  mounted() {
    this.preLoadAway();
  }
};
</script>

<style lang="scss">
.destroy {
  display: none;
}
.scale-out-center {
  animation: scale-out-center 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  width: 10vw;
}
@keyframes scale-out-center {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 1;
  }
}
.pulsate-fwd {
  animation: pulsate-fwd 2s ease-in-out both;
  animation-iteration-count: 2;
  width: 10vw;
}
@keyframes pulsate-fwd {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
