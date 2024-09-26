<template>
      <!-- Full-Screen Hero Section -->
      <section class="hero-section">
        <v-container fill-height>
          <v-row align="center" justify="center">
            <v-col class="text-center">
              <p class="text-h1 font-weight-black text-accent">Sean Harding</p>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col>
              <p class="text-h4 font-weight-black text-white">Senior Software Engineer</p> 
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
              <IconBtn icon="mdi-linkedin"></IconBtn>
            </v-col>
            <v-col>
              <IconBtn icon="mdi-github"></IconBtn>           
            </v-col>
            <v-col>
              <IconBtn icon="mdi-email-outline"></IconBtn>  
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </section>

</template>
  
<script>
    export default {
      name: 'HeaderPane',
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
  