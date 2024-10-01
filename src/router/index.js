/**
 * @name index.js
 *
 * @fileoverview Handles the navigation routing of the app.
 * Including containers based on the context of the request plus authentication
 *
 * @author Sean Harding
 * @version 1.0.0.0
 * @copyright (c) 2024 Sean Harding
 *
 */

import { createRouter, createWebHistory } from "vue-router"

// Views
import Error from "@views/ErrorView.vue"
import Home from "@views/HomeView.vue"

const baseTitle = "SeanHarding.me";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta:
        {
            title: `${baseTitle} Home`,
        }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Error",
        component: Error,
        meta:
        {
            title: `${baseTitle} Error`,
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    console.log(`Navigating to ${to.path} from ${from.path}`);
    next();
});

router.afterEach((to, from) => {
    console.log(`Successfully navigated to ${to.path} from ${from.path}`);
});

export default router
