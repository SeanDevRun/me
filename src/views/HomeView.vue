<template>
  <v-main
    class="d-flex text-center align-center justify-center"
    style="min-height: 300px"
  >
    <v-container fluid>
      <header-pane
        @scroll-to-next="scrollTo('about')"
        v-intersect="onIntersectHeader"
      />

      <Divider class="my-10 mx-10 text-accent" />

      <about-pane
        @scroll-to-next="scrollTo('projects')"
        v-intersect="onIntersectAbout"
      />

      <Divider class="my-10 mx-10 text-accent" />

      <projects-pane
        @scroll-to-next="scrollTo('top')"
        v-intersect="onIntersectProjects"
      />
    </v-container>
  </v-main>

  <v-bottom-navigation
    class="bg-background"
    v-model="value"
    mandatory
    density="comfortable"
  >
    <v-btn
      v-show="!userAtTop"
      variant="text"
      class="text-accent"
      color="accent"
    >
      <span>Sean Harding</span>
    </v-btn>
    <v-btn
      v-show="!userAtTop"
      prepend-icon="mdi-copyright"
      variant="text"
      class="text-accent"
      :stacked="false"
    >
      2024
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn value="about" active-color="accent" @click="scrollTo('about')">
      <v-icon>mdi-account-question</v-icon>

      <span>About</span>
    </v-btn>

    <v-btn value="projects" active-color="accent" @click="scrollTo('projects')">
      <v-icon>mdi-account-hard-hat-outline</v-icon>

      <span>Projects</span>
    </v-btn>

    <v-btn
      v-show="!userAtTop"
      value="top"
      active-color="accent"
      @click="scrollTo('top')"
    >
      <v-icon>mdi-arrow-up-drop-circle-outline</v-icon>

      <span>Top</span>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
      v-for="item in socials"
      v-show="!userAtTop"
      :key="item.name"
      :href="item.link"
      target="_blank"
    >
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import HeaderPane from "@common/HeaderPane.vue";
import AboutPane from "@/components/profile/AboutPane.vue";
import ProjectsPane from "@/components/profile/ProjectsPane.vue";

export default {
  name: "HomeView",
  components: {
    HeaderPane,
    AboutPane,
    ProjectsPane,
  },
  data() {
    return {
      value: "top",
      socials: [
        {
          name: "LinkedIn",
          icon: "mdi-linkedin",
          link: "http://www.linkedin.com/in/sean-harding-dev",
        },
        {
          name: "Github",
          icon: "mdi-github",
          link: "https://github.com/SeanDevRun?tab=repositories",
        },
        {
          name: "YouTube",
          icon: "mdi-youtube",
          link: "https://www.youtube.com/@seanhardingmusic6832",
        },
      ],
    };
  },
  methods: {
    scrollTo(section) {
      let element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        console.error(`Can't find element ${section}`);
      }
    },
    onIntersectHeader(isIntersecting) {
      if (isIntersecting) {
        this.value = "top";
      }
    },
    onIntersectAbout(isIntersecting) {
      if (isIntersecting) {
        this.value = "about";
      }
    },
    onIntersectProjects(isIntersecting) {
      if (isIntersecting) {
        this.value = "projects";
      }
    },
  },
  computed: {
    userAtTop() {
      return this.value == "top";
    },
  },
};
</script>

<style scoped></style>
