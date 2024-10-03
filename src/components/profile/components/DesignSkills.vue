<template>
    <v-col cols="12">
        <v-row>
            <v-col>
            <h2 class="text-accent">Design</h2>
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
            <v-col lg="2" sm="6">
                FIGMA
            </v-col>
        </v-row> -->
    </v-col>
</template>

<script>

    export default {
        name: 'DesignSkills',
        components: {
        },
        data: () => ({
        }),
        methods: {
        }
    }
</script>