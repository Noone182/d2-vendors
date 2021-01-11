<template>
  <div class="home">
    <background />
    <pre-loader />
    <div class="link-classes">
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
  </div>
</template>

<script>
import Background from "@/components/Background";
import PreLoader from "@/components/PreLoader";

export default {
  name: "Home",
  components: { PreLoader, Background },
  data() {
    return {
      isDestroyed: false
    };
  },
  watch() {}
};
</script>

<style lang="scss">
.home {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
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
