<template>
  <section class="section-component">         
    <v-toolbar color="accent" density="compact" :elevation="8"/>
    <h2>{{ title }}</h2>
    <div class="content">
      <slot></slot>
    </div>
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
}
</style>
