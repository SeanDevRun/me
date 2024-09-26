<template>
    <v-sheet
    class="d-flex align-center flex-wrap mx-auto px-4 py-5 mb-6"
    width="100%"
    rounded>       

        <h2 class="text-h4 font-weight-black text-accent">Sean Harding</h2>
        <h3>Senior Software Engineer</h3>

        <v-divider class="my-2"></v-divider>
                                                                
        <IconBtn icon="mdi-linkedin"></IconBtn>
        <IconBtn icon="mdi-github"></IconBtn>

        <v-divider class="my-2"></v-divider>

        <!-- <v-chip-group column>
            <SkillChip text="FrontEnd" />
            <SkillChip text="BackEnd" />
            <SkillChip text="Scrum Master" />
            <SkillChip text="DevOps" />
            <SkillChip text="JIRA Admin" />
            <SkillChip text="JENKINS Admin" />    
        </v-chip-group> -->
    
    </v-sheet>
</template>

<script>

    export default {
        name: 'NameCard',
        components: {
        },
        data () {
            return {
            }
        },
    };
</script>

<style scoped>

</style>