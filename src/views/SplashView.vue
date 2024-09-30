
<template>

    <v-main class="d-flex text-center align-center justify-center" style="min-height: 300px;">

        <v-container class="bg-background" fill-height fluid>

            <v-row justify="center">

                <v-col cols="6">

                    <ProgressCircle />

                </v-col>

            </v-row>

        </v-container>

    </v-main>

</template>

<script>    

    export default {
        name: 'SplashScreen',
        data: () => {
            return {
            }
        }
    };
</script>

<style scoped>
</style>
