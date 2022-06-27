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
  height: 100vh;
  background: url('../assets/bg.png') no-repeat;
  background-position: center;
  animation: spin 200s linear infinite;
  z-index: -1;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -50%;
  margin-top: -50vh;
  width: 100vw;
  opacity: 1;
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
