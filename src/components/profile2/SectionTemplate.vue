<template>
  <section class="profile-section">
    <v-container fill-height>
      <v-row align="center" justify="top">
        <v-col class="text-center">
          <p class="text-h1 font-weight-black text-accent">SECTION</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
  
<script>
    export default {
      name: 'SectionTemplate',
      components: {
      },
      data: () => ({
      }),
      methods: {
      }
    }
</script>
  
<style>
  .profile-section {
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10vw;    
  }
</style>
  