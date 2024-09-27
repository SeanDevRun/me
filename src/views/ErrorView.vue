<!-- src/views/ErrorView.vue -->
<template>
  <section class="hero-section">
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <p class="text-h1 font-weight-black text-accent">WHOOPS!</p>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col>
          <p class="text-h4 font-weight-black text-white">Something went wrong Sorry!</p> 
        </v-col>
      </v-row>          
      <v-row align="center" justify="center">
        <v-col>
          <v-divider class="my-2"></v-divider>
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
name: 'NotFound',
methods: {
    goHome() {
    this.$router.push('/');
    }
}
};
</script>

<style scoped>
</style>
