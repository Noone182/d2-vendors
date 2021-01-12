<template>
  <div class="home">
    <background />
    <pre-loader v-if="!isDestroyed" />
    <transition
      name="component-transition"
      enter-active-class="scale-in-center"
    >
      <nav-main v-if="isDestroyed" />
    </transition>
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
.scale-out-center {
  animation: scale-out-center 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
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
.scale-in-center {
  animation: scale-in-center 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
</style>
