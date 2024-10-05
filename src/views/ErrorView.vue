<!-- src/views/ErrorView.vue -->
<template>
  <section class="section-component">
    <v-container
      fluid
      class="text-center justify-center align-center full-height-section"
      style="padding: 25vh 0"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <p class="text-h1 font-weight-black text-accent">WHOOPS!</p>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col>
          <p class="text-h4 font-weight-black">Something went wrong Sorry!</p>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col>
          <Divider class="my-2" />
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-spacer></v-spacer>
        <v-col>
          <IconBtn icon="mdi-home" @click="goHome"></IconBtn>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.section-component {
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 10vw;
  margin-right: 10vw;
}
</style>
