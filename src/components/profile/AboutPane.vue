<template>
  <section-pane title="ABOUT" id="about">

    <v-container fluid>

      <v-row>

        <v-col order-sm="2" sm="12" order-md="1" md="8" lg="4" class="text-left">

          <v-row class="pt-5" no-gutters>
            <v-col cols="12">
              <h2 class="text-accent">Introduction</h2>
            </v-col>
            <v-col cols="12">
              <p>
                Hi, I'm <span class="text-accent">Sean</span>. Nice to meet you!
              </p>
            </v-col>
            <v-col cols="12">
              <p>
                I am a multi-faceted professional with a keen interest in technology and a zest for life. I have been
                working in the tech industry for over 9 years, specializing in Full Stack Development, DevOps, JIRA
                Administration, and Jenkins Administration. 
              </p>
            </v-col>
          </v-row> 

          <v-row class="pt-5" no-gutters>
            <v-col cols="12">
              <h2 class="text-accent">Beyond the Code</h2>
            </v-col>
            <v-col cols="12">
              <p>
                  When I’m not immersed in tech, I love exploring my creative side and staying active. I’ve been playing the
                  guitar for over sixteen years, experimenting with different genres and artists. Running is
                  my way to unwind and clear my head. Always looking for the next challenge I've completed my first two half marathonsin 2024; one being trail and one being on road.
              </p>
            </v-col>
          </v-row>

          <v-row class="pt-5" no-gutters>
            <v-col cols="12">
              <h2 class="text-accent">Hobbies</h2>
            </v-col>
            <v-col cols="12" class="pl-4">
              <p>
                <ul>
                  <li v-for="(hobby, index) in hobbies" :key="index">
                    {{hobby}}
                  </li>
                </ul>
              </p>
            </v-col>
          </v-row>

          <v-row class="pt-5" no-gutters>
            <v-col cols="12">
              <h2 class="text-accent">Work/Experience</h2>
            </v-col>
            <v-col cols="12">
              <p>
                To find out more about my experience, please see <v-btn color="blue" variant="flat" size="small" rounded target="_blank" href="http://www.linkedin.com/in/sean-harding-dev" >LinkedIn<v-icon>mdi-linkedin</v-icon></v-btn>     
              </p>
            </v-col>
          </v-row>

        </v-col>
        
        <v-col order-sm="1" sm="12" order-md="2" md="4" lg="4" class="d-flex justify-center align-center">
        
            <v-img          
            cover
            src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Brown&clotheType=Hoodie&clotheColor=Red&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light'>
            </v-img>

        </v-col>

        <v-col order-sm="3" sm="12" order-md="3" md="12" lg="4">

          <v-row class="pt-5 text-center">

            <programming-skills />
              
            <dev-ops-skills />

            <design-skills />

          </v-row>

        </v-col>

      </v-row>

    </v-container>

  </section-pane>
</template>
  
<script> 
  import SectionPane from '@common/SectionPane.vue'  

  import ProgrammingSkills from '@components/profile/components/ProgrammingSkills.vue'
  import DevOpsSkills from '@components/profile/components/DevOpsSkills.vue'
  import DesignSkills from '@components/profile/components/DesignSkills.vue'


  export default {
    name: 'AboutPane',
    components: {
      SectionPane,
      DevOpsSkills,
      ProgrammingSkills,
      DesignSkills
    },
    data: () => ({
      hobbies : [
        "Playing guitar",
        "Running",
        "Hiking",
        "Raising money and awareness for Movember"
      ]
    }),
    methods: {
    }
  }
</script>
  
<style>
</style>
  