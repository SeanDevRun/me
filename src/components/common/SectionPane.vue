<template>
  <section class="section-component">            

    <SheetPanel class="pa-10" min-height="50vh" :elevation="14">

      <h2 class="text-accent text-h3">{{ title }}</h2>
      
      <div class="content">
        <slot></slot>
      </div>

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
    }
  }
}
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
