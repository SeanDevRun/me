<template>
    <v-app>


      <!-- Sticky Navigation Bar -->
      <v-app-bar
      app
      v-show="isStickyNavVisible"
      color="primary"
      dark
      elevation="2"
      fixed
      >
      <v-toolbar-title>My Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="scrollTo('about')">About</v-btn>
      <v-btn text @click="scrollTo('projects')">Projects</v-btn>
      <v-btn text @click="scrollTo('contact')">Contact</v-btn>
    </v-app-bar>
      
      <v-main>
        <v-container>

          <about-pane></about-pane>

          <section id="about">
            <v-row class="mt-12">
              <v-col>
                <h1>About Me</h1>
                <p>
                  I'm a web developer with a passion for creating interactive and dynamic websites. I have experience with Vue.js, React, and backend technologies.
                </p>
              </v-col>
              <v-col>
                <v-img src="path/to/your-image.jpg" alt="Profile Image"></v-img>
              </v-col>
            </v-row>
          </section>
  
          <section id="projects" class="mt-12">
            <h1>Projects</h1>
            <v-row>
              <v-col cols="12" md="4" v-for="project in projects" :key="project.id">
                <v-card>
                  <v-img :src="project.image" height="200px"></v-img>
                  <v-card-title>{{ project.title }}</v-card-title>
                  <v-card-text>{{ project.description }}</v-card-text>
                  <v-card-actions>
                    <v-btn text @click="goToProject(project.link)">View Project</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </section>
          
        </v-container>
      </v-main>

    </v-app>
  </template>
  
  <script>

  import AboutPane from '@/components/profile2/AboutPane.vue';
  
  export default {
    components: { AboutPane },
    data: () => ({
      isStickyNavVisible: false,
      projects: [
        {
          id: 1,
          title: 'Project One',
          description: 'A short description of project one.',
          image: 'path/to/project-one-image.jpg',
          link: 'https://link-to-project-one.com',
        },
        {
          id: 2,
          title: 'Project Two',
          description: 'A short description of project two.',
          image: 'path/to/project-two-image.jpg',
          link: 'https://link-to-project-two.com',
        },
      ],
    }),
    methods: {
      handleScroll() {
        // Show the sticky navbar when scrolling past the hero section
        this.isStickyNavVisible = window.scrollY > window.innerHeight - 64; // 64px is the height of the app-bar
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
  </script>
  
  <style>
  .hero-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10vw;
  }


  #about, #projects, #contact {
    padding: 50px 0;
  }
  </style>
  