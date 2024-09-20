<template>

    <!-- Main Area for app -->
    <v-main class="d-flex bg-primary text-center align-center justify-center" fill-height>


        <v-container>

            <v-row class="d-flex justify-center align-center fill-height">

                <v-col cols="12" class="d-flex justify-center align-center">

                    <!-- Reusable typing text component -->
                    <div class="welcome-sign text-accent">

                        <h1>COMING SOON!</h1>  
                        
                    </div>

                </v-col>

            </v-row>
        
        </v-container>

    </v-main>

</template>

<script>
    export default {
        name: 'HomeView',
        components: {
            
        },
    };
</script>

<style scoped>
/* Welcome sign styling */
.welcome-sign {
    height: 100vh; /* 1/3 of the viewport height */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  /* Optional: Adjust font size for better visibility */
  .welcome-sign h1 {
    font-size: 3rem; /* Adjust as necessary */
  }
</style>