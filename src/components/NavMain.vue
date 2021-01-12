<template>
  <div class="link-classes" :class="linkLeave">
    <router-link to="/warlock">
      <img
        class="link-icon"
        :src="require('../assets/warlock_emblem.svg')"
        alt=""
      />
    </router-link>
    <router-link to="/hunter">
      <img
        class="link-icon"
        :src="require('../assets/hunter_emblem.svg')"
        alt=""
      />
    </router-link>

    <router-link to="/titan">
      <img
        class="link-icon"
        :src="require('../assets/titan_emblem.svg')"
        alt=""
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavMain"
};
</script>

<style lang="scss">
.link-classes {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 51%;
}
.link-icon {
  width: 180px;
  height: 180px;
}
</style>
