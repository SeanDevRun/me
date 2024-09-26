import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";

import vuetify from './plugins/vuetify'

/**
 * @fileoverview The main file, no pun intended, to initialise the VUE app
 * This file also sets up services and plugins that do jobs for the apps i.e. Store settings, navigation between pages, styling
 *
 * @author Sean Harding
 * @version 1.0.0.0
 * @copyright (c) 2024 Sean Harding
 *
 **/

 const app = createApp(App);

 app.use(vuetify);
 app.use(router);
 
 app.mount("#app");