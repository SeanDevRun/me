<template>
    <v-col cols="12">
        <v-row>
            <v-col>
            <h2 class="text-accent">Dev Ops/Admin</h2>
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
            <v-col sm="3" md="4">
                <jenkins-icon />
            </v-col>
            <v-col sm="3" md="4">
                JIRA
            </v-col>
            <v-col sm="3" md="4">
                Confluence
            </v-col>
            <v-col sm="3" md="4">
                Git
            </v-col>
            <v-col sm="3" md="4">
                <docker-icon></docker-icon>
            </v-col>
        </v-row> -->
    </v-col>
</template>

<script>
    export default {
        name: 'DevOpsSkills',
        components: {
        },
        data: () => ({
        }),
        methods: {
        }
    }
</script>