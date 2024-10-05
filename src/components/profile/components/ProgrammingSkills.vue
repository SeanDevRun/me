<template>
  <v-col cols="12">
    <v-row>
      <v-col>
        <h2 class="text-accent">Programming Languages</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" v-for="i in 10" :key="i">
        <v-img
          :width="60"
          aspect-ratio="1/1"
          cover
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
      </v-col>
    </v-row>
    <!-- <v-row>
            <v-col cols="2">
            <c-plus-plus />
            </v-col>
            <v-col cols="2">
            <c-sharp />
            </v-col>
            <v-col cols="2">
            .net
            </v-col>
            <v-col cols="2">
            <python-icon />
            </v-col>
            <v-col cols="2">
            Javascript
            </v-col>
        </v-row> -->
  </v-col>
</template>

<script>
export default {
  name: "ProgrammingSkills",
  components: {},
  data: () => ({}),
  methods: {},
};
</script>