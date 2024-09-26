<template>
    <v-main class="d-flex bg-primary text-center align-center justify-center" style="min-height: 300px;">
        <HeaderPane></HeaderPane>
    </v-main>
</template>

<script>
    import HeaderPane from '@/components/Common/HeaderPane.vue';
    
    export default {
        name: 'HomeView',
        components: {
            HeaderPane            
        },
        data () {
            return {
            }
        },
    };
</script>

<style scoped>

</style>