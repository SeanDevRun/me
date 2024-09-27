<template>
    <v-main class="d-flex bg-primary text-center align-center justify-center" style="min-height: 300px;">
        <HeaderPane />
        <about-pane />
        <projects-pane />
    </v-main>
</template>

<script> 
    import HeaderPane from '@/components/Common/HeaderPane.vue';
    import AboutPane from '@/components/profile2/AboutPane.vue';
    import ProjectsPane from '@/components/profile2/ProjectsPane.vue';

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