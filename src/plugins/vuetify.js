// src/plugins/vuetify.js

import '@mdi/font/css/materialdesignicons.css'

import "vuetify/styles"

import { createVuetify } from "vuetify"

import { md1 } from 'vuetify/blueprints'

import * as core from "vuetify/components"
import * as directives from "vuetify/directives"
import * as labsComponents from "vuetify/labs/components"

import { darkTheme, lightTheme } from './vuetify-theme'; // Import themes
import { vuetifyConfig } from './vuetify-config'; // Import the configuration

const vuetify = createVuetify({
    blueprint: md1,
    ssr: true,
    icons: {
        defaultSet: "mdi", // This is already the default value - only for display purposes
        iconfont: 'mdi', // Specify Font Awesome and MDI
    },
    components: {
        ...core,
        ...labsComponents
    },
    directives,
    theme: {        
        defaultTheme: "darkTheme",
        themes: {
            darkTheme,
            lightTheme
        }
    },
    aliases: {
        ...vuetifyConfig.aliases, // Spread the aliases
    },
    defaults: {
        ...vuetifyConfig.defaults, // Spread the default properties
    },
});

export default vuetify;