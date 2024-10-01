<template>

    <!-- Full height section -->
    <v-container fluid class="text-center justify-center align-center full-height-section" style="padding: 25vh 0">
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
    </v-container>


  <!-- Full-Screen Hero Section -->      
  <!-- <v-container class="fill-screen text-center align-center" fluid>
    <v-row>
      <v-col>
        
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        
      </v-col>
    </v-row>          
    <v-row align="center" justify="center">
      <v-col>
        <v-divider class="my-2"></v-divider>
      </v-col>
    </v-row>
    <socials-pane></socials-pane>
  </v-container> -->
</template>
  
<script>
  import SocialsPane from './SocialsPane.vue'
  
  export default {
    name: 'HeaderPane',
    components: {
          SocialsPane
    },
    data: () => ({
    }),
    methods: {
    }
  }
</script>
  
<style scoped>
  .full-height-section {
    height: 100vh;    
  }
</style>
  