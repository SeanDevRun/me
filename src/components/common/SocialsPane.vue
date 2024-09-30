<template>
  <section>

    <v-container>

      <v-row>

        <v-spacer></v-spacer>

        <v-col v-for="item in socials" :key="item.name">
          <IconBtn  :icon="item.icon"     
                    :href="item.link"
                    target="_blank"
                    :aria-label="item.name"
                    rel="noopener noreferrer"/>
        </v-col>

        <v-spacer></v-spacer>

      </v-row>

    </v-container>

  </section>
</template>
  
<script>
    export default {
      name: 'SocialsPane',
      components: {
      },
      data: () => ({
        socials: [
          { name: "LinkedIn", 
            icon : "mdi-linkedin", 
            link : "http://www.linkedin.com/in/sean-harding-dev" },
          { name: "Github", 
            icon : "mdi-github", 
            link : "https://github.com/SeanDevRun?tab=repositories" },
          { name: "YouTube", 
            icon : "mdi-guitar-pick-outline", 
            link : "https://www.youtube.com/@seanhardingmusic6832" },
        ]
      }),
      methods: {
      }
    }
</script>
  
<style>
</style>
  