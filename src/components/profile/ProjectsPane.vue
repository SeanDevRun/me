<template>
  <section-pane title="Projects" id="projects">
    <image-gallery v-if="gallery" />
    <v-container v-else>
      <v-row>
        <v-col>
          <h3>COMING SOON!</h3>
          <p>I'm working on something so come back another time...</p>
        </v-col>
      </v-row>
    </v-container>
  </section-pane>
</template>
  
<script>
import SectionPane from "@common/SectionPane.vue";
import ImageGallery from "@common/ImageGallery.vue";

export default {
  name: "ProjectsPane",
  components: {
    SectionPane,
    ImageGallery,
  },
  data: () => ({
    gallery: false,
  }),
  methods: {},
};
</script>
  
<style>
</style>
  