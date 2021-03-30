
import { createWebHistory, createRouter } from 'vue-router';
import Contact from './components/Contact';
import Notfound from './components/Notfound';
const routes = [
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/:catchAll(.*)', name: 'Notfound', component: Notfound }
];
const router = createRouter({
    history: createWebHistory(),
    routes
    // shorthand routes:routes
});
export default router;