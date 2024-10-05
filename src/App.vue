<template>
  <v-app>
    <splash-view v-if="loading" />
    <router-view v-else />
  </v-app>
</template>

<script>
import SplashView from "@views/SplashView.vue";

export default {
  name: "App",
  components: {
    SplashView,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    // Show loading when the app is first loaded (refresh or direct visit)
    this.loading = true;

    // Simulate loading completion after the route component is fully loaded
    this.$nextTick(() => {
      setTimeout(() => {
        this.loading = false;
      }, 1000); // Delay to simulate loading (you can adjust this)
    });
  },
};
</script>

<style>
</style>
