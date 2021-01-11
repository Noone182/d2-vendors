<template>
  <div class="hunter">
    <background />
    <router-link to="warlock">
      <object
        :data="require('../assets/warlock_emblem.svg')"
        type="image/svg+xml"
        width="150"
        height="150"
      ></object>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Hunter"
};
</script>

<style scoped></style>
