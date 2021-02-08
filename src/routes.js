
import { createWebHistory, createRouter } from 'vue-router';
import Contact from './components/Contact';
import Team from './components/Team';
import Home from './components/Home';
import Notfound from './components/Notfound';

const routes = [
    { path: '/', name: "Home", component: Home },
    { path: '/contact', name: "Contact", component: Contact },
    { path: '/team', name: "Team", component: Team },
    { path: '/:catchAll(.*)', name: "Notfound", component: Notfound }
];

const router = createRouter({
    history: createWebHistory(),
    routes
    // shorthand routes:routes 
});
export default router;