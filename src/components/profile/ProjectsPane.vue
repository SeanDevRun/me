<template>
  <section-pane title="Projects">
    <image-gallery></image-gallery>
  </section-pane>
</template>
  
<script>
  import SectionPane from '@/components/common/SectionPane.vue'
  import ImageGallery from '@/components/common/ImageGallery.vue'
  
  export default {
    name: 'ProjectsPane',
    components: {
      SectionPane,
      ImageGallery
    },
    data: () => ({
    }),
    methods: {
    }
  }
</script>
  
<style>
</style>
  