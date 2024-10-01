<template>
  <section-pane title="ABOUT">
    <v-container>
      <v-row>
        <v-col cols="3" offset="1" class="text-left">
          <v-row class="pt-5">
            <h2 class="text-accent">Introduction</h2>
          </v-row>
          <v-row>
            <p>
                Hi, I'm <span class="text-accent">Sean</span>. Nice to meet you!
            </p> 
            <p class="pt-2">
              I am a multi-faceted professional with a keen interest in technology and a zest for life. I have been
              working in the tech industry for over 9 years, specializing in Full Stack Development, DevOps, JIRA
              Administration, and Jenkins Administration. 
            </p>
          </v-row>
          <v-row class="pt-5">
            <h2 class="text-accent">Beyond the Code</h2>
            <p>
                When I’m not immersed in tech, I love exploring my creative side and staying active. I’ve been playing the
                guitar for over sixteen years, experimenting with different genres and artists. Running is
                my way to unwind and clear my head. Always looking for the next challenge I've completed my first two half marathonsin 2024; one being trail and one being on road.
            </p>
          </v-row>
        </v-col>
        <v-col>
          <v-row>
            <v-img          
            cover
            src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Brown&clotheType=Hoodie&clotheColor=Red&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light'>
            </v-img>
          </v-row>
          <v-row>
            <v-col>
              <p>PLACEHOLDER FROM <v-chip rounded variant="tonal" color="accent" href="https://getavataaars.com/">getavataaars</v-chip></p>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row class="pt-5 text-center">
            <v-col cols="12">
              <v-row>
                <v-col>
                  <h2 class="text-accent">Programming Languages</h2>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  <!-- <v-chip rounded variant="text">C++, C#, Python, JavaScript, SQL, HTML/CSS</v-chip>   -->
                  <c-plus-plus></c-plus-plus>
                </v-col>
                <v-col cols="2">
                  <!-- <v-chip rounded variant="text">C++, C#, Python, JavaScript, SQL, HTML/CSS</v-chip>   -->
                  <c-sharp></c-sharp>
                </v-col>
              </v-row>
            </v-col>          
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section-pane>
</template>
  
<script> 
  import SectionPane from '@common/SectionPane.vue'  

  import CPlusPlus from '@/components/icons/CPlusPlus.vue'
  import CSharp from '@components/icons/CSharp.vue'

  export default {
    name: 'AboutPane',
    components: {
      SectionPane,
        CPlusPlus,
        CSharp
    },
    data: () => ({
    }),
    methods: {
    }
  }
</script>
  
<style>
</style>
  