<template>
  <section class="section-component">            

    <SheetPanel class="pa-10 bg-background-lighten-1" min-height="80vh" :elevation="12">

      <h2 class="text-accent text-h3">{{ title }}</h2>
      
      <div class="content">
        <slot></slot>
      </div>
    
      <v-btn v-if="scrollButtonEnabled" color="accent" rounded @click="scrollToNext()">Scroll To Next</v-btn>

    </SheetPanel>
    
  </section>
</template>

<script>
export default {
  name: 'SectionComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    scrollButtonEnabled: {
      type: Boolean,
      default: false      
    }
  },
  methods: {
    scrollToNext() {
      this.$emit('scroll-to-next');
    }
  },
}
</script>

<style scoped>
.section-component {
  min-height: 70vh;
  align-items: center;
  justify-content: center;
  text-align: center;  
  margin: 5vh 5vw;
}
</style>
