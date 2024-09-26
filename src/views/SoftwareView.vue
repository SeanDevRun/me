<template>

    <!-- Main Area for app -->
    <v-main class="d-flex bg-primary align-center" fill-height>

            <v-container> 

                <v-row>

                  <v-col cols="2">

                    <NameCard></NameCard>

                    <v-sheet rounded="lg" class>
                        
                        <!-- List to select the sheet -->
                        <v-list rounded="lg" class="text-accent text-center">
                            <v-list-item v-for="(sheet, index) in sheets" :key="index" @click="selectedSheet = index" :active="selectedSheet === index">
                            <v-list-item-content>
                                <v-list-item-title>{{ sheet.title }}</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list>

                    </v-sheet>

                  </v-col>
        
                  <v-col>

                        <!-- Conditional rendering of the selected v-sheet -->
                    <v-sheet
                    v-for="(sheet, index) in sheets"
                    :key="sheet.id"                                       
                    border                    
                    min-height="50vh"                    
                    v-show="selectedSheet === index">
                        <v-container><component :is="sheet.view"></component></v-container>
                    </v-sheet>

                  </v-col>

                </v-row>

            </v-container>

    </v-main>

</template>

<script>
    import { markRaw } from 'vue';

    import NameCard from '@/components/profile/NameCard.vue';
    import AboutPane from '@/components/profile/AboutPane.vue'
    import ExperiencesPane from '@/components/profile/ExperiencesPane.vue'
    import ProjectsPane from '@/components/profile/ProjectsPane.vue';    

    export default {
        name: 'HomeView',
        components: {
    AboutPane,
    ExperiencesPane,
    ProjectsPane,
    NameCard
},
        data () {
            return {
                selectedSheet: 0,
                sheets : [
                    { id: 1, title: 'About', view: markRaw(AboutPane) },
                    { id: 2, title: 'Experiences', view: markRaw(ExperiencesPane) },
                    { id: 3, title: 'Projects', view: markRaw(ProjectsPane)},
                ]
            }
        },
    };
</script>

<style scoped>

</style>