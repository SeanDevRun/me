// src/plugins/vuetify.js

import '@mdi/font/css/materialdesignicons.css'

import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files

import "vuetify/styles"

import { createVuetify } from "vuetify"

import { md1 } from 'vuetify/blueprints'

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
        font: "#000000",
        background: "#273040"
    }
}

const vuetify = createVuetify({
    blueprint: md1,
    aliases: {
        Divider: core.VDivider,
        IconBtn: core.VBtn,
        ProgressCircle: core.VProgressCircular,        
        SheetPanel: core.VSheet,
        SkillChip: core.VChip,        
    },
    ssr: true,
    icons: {
        defaultSet: "mdi", // This is already the default value - only for display purposes
        iconfont: 'fa' || 'mdi', // Specify Font Awesome and MDI
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
    defaults: {
        global: {
            ripple: false,
        },
        Divider: {
            thickness: "2",
            color: "accent",
            opacity: "60%"
        },
        IconBtn: {
            variant: "text",
            color: "accent", 
            class: "text-h3"           
        },
        ProgressCircle: {
            color: "accent",
            indeterminate: true,
            size: "200"
        },
        SheetPanel: {            
            color: "background",
            elevation: 10,                                            
            rounded: "lg",                       
        },
        SkillChip: {
            size: "small",
            variant: "outlined",
        } 
    }
});

export default vuetify;