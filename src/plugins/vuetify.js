// src/plugins/vuetify.js

import '@mdi/font/css/materialdesignicons.css'
import "vuetify/styles"

import { createVuetify } from "vuetify"

import * as core from "vuetify/components"
import * as directives from "vuetify/directives"
import * as labsComponents from "vuetify/labs/components"

const Dark = {
    dark: true,
    colors: {
        primary: "#242726",
        secondary: "#424242",
        accent: "#EC7A1C",
        error: "#FF5252",
        danger: "#F44336",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        anchor: "#84bd00",
        font: "#000000"
    }
}

const vuetify = createVuetify({
    ssr: true,
    icons: {
        defaultSet: "mdi" // This is already the default value - only for display purposes
    },
    components: {
        ...core,
        ...labsComponents
    },
    directives,
    theme: {
        dark: true,
        defaultTheme: "Dark",
        themes: {
            Dark
        }
    },
});

export default vuetify;