<template>
  <div class="bg"></div>
</template>

<script>
export default {
  name: "Background"
};
</script>

<style lang="scss">
.bg {
  height: 200%;
  background: url(../assets/bg.png) no-repeat center center fixed;
  background-size: cover;
  animation: spin 200s linear infinite;
  z-index: -1;
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  opacity: 0.2;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
