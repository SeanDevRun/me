<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <slot name="icon"></slot>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SkillIcon",
  props: {
    title: {
      type: String,
      required: true, // Make it required if you always expect a title
    },
  },
};
</script>

<style scoped>
</style>

  