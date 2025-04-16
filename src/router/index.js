import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue'
import Drinks from '../views/Drinks.vue'
import Shoes from '../views/Shoes.vue'

const routes = [
    {path: '/home', component: Home},
    {path: '/drinks', component: Drinks},
    {path: '/shoes', component: Shoes},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router