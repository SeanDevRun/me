// src/plugins/vuetify-theme.js

import * as core from "vuetify/components"

export const vuetifyConfig = {
    aliases: {
        Divider: core.VDivider,
        IconBtn: core.VBtn,
        ProgressCircle: core.VProgressCircular,        
        SheetPanel: core.VSheet,
        SkillChip: core.VChip,        
        SkillImage: core.VImg,        
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
        }
    },
  };