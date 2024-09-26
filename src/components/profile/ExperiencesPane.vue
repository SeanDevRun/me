<template>

    <v-container>

        <v-row class="text-center">
            <v-col class="text-accent">
                <h3>EXPERIENCES</h3>
            </v-col>
        </v-row>

        <v-row class="text-center">
            <v-col class="text-accent">
                <v-carousel
                progress="accent"
                hide-delimiters
              >
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                >
                  <v-sheet
                    height="100%"
                  >
                    <div class="d-flex fill-height justify-center align-center">

                      <v-container>

                        <v-col cols="2">
                            2024
                        </v-col>

                        <v-col cols="8">
                            boo
                        </v-col>

                        <v-col cols="2">
                            BOO
                        </v-col>

                      </v-container>

                    </div>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-col>
        </v-row>

    </v-container>

</template>

<script>

    export default {
        name: 'ExperiencesPane',
        components: {
        },
        data () {
            return {
                slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
                ],
            }
        },
    };
</script>

<style scoped>

</style>