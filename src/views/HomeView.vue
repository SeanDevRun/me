<template>
    <v-main class="d-flex text-center align-center justify-center" style="min-height: 300px;">         

        <v-container fluid>            

            <header-pane />

            <Divider class="my-10 mx-10 text-accent" />

            <about-pane />

            <Divider class="my-10 mx-10 text-accent" />

            <projects-pane />

        </v-container>
        
    </v-main>
</template>

<script> 
    import HeaderPane from '@/components/common/HeaderPane.vue';
    import AboutPane from '@/components/profile/AboutPane.vue';
    import ProjectsPane from '@/components/profile/ProjectsPane.vue';

    export default {
        name: 'HomeView',
        components: {
            HeaderPane ,
            AboutPane,
            ProjectsPane                
        },
        data () {
            return {
            }
        },
    };
</script>

<style scoped>

</style>