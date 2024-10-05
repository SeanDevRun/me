<template>
  <!-- Full height section -->
  <v-container
    id="top"
    fluid
    class="text-center justify-center align-center full-height-section"
    style="padding: 25vh 0"
  >
    <v-row>
      <v-col>
        <p class="text-h1 font-weight-black text-accent">Sean Harding</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <p class="text-h4 font-weight-black">Senior Software Engineer</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col offset="3" cols="6">
        <Divider />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <socials-pane></socials-pane>
      </v-col>
    </v-row>

    <v-row style="margin-top: 10vh">
      <v-col cols="12"> </v-col>

      <v-col>
        <v-btn stacked variant="text" size="x-large" @click="scrollToNext()">
          <span class="mb-5 text-font">Learn more about me below</span>
          <v-icon color="accent">mdi-arrow-down-drop-circle-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import SocialsPane from "./SocialsPane.vue";

export default {
  name: "HeaderPane",
  components: {
    SocialsPane,
  },
  data: () => ({}),
  methods: {
    scrollToNext() {
      this.$emit("scroll-to-next");
    },
  },
};
</script>
  
<style scoped>
.full-height-section {
  height: 100vh;
}
</style>
  