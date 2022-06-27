<template>
  <div class="link-classes">
    <router-link to="/warlock">
      <img class="link-icon" src="../assets/warlock_emblem.svg" alt="" />
    </router-link>
    <!-- <router-link to="/hunter"> -->
    <a href="https://www.bungie.net/en/oauth/authorize?client_id=40693&response_type=code&state=noone182">
      <img class="link-icon" src="../assets/hunter_emblem.svg" alt="" />
    </a>
    <!-- </router-link> -->

    <router-link to="/titan">
      <img class="link-icon" src="../assets/titan_emblem.svg" alt="" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavMain",
  // methods: {
  //   auth() {
  //     fetch(`https://www.bungie.net/en/oauth/authorize?client_id=40693&response_type=code&state=noone182`)
  //   }
  // }
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
