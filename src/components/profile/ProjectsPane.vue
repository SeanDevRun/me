<template>

    <v-container>

        <v-row class="text-center">
            <v-col class="text-accent">
                <h3>Projects</h3>
            </v-col>
        </v-row>

        <v-row>
          <image-gallery></image-gallery>
        </v-row>

    </v-container>

</template>

<script>

  import ImageGallery from '@/components/common/ImageGallery.vue';

  export default {
      name: 'ProjectsPane',
      components: {
        ImageGallery
      },
      data () {
          return {
          }
      },
  };
</script>

<style scoped>

</style>