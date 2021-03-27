
import { createWebHistory, createRouter } from 'vue-router';

const routes = [];
const requireRoutes = require.context(
    './components',
    true,
    /^(?!.*test).*\.vue$/is,
);
requireRoutes.keys().forEach((fileName) => {
    routes.push({
        ...requireRoutes(fileName).default,
    });
});

console.log(routes)


const router = createRouter({
    history: createWebHistory(),
    routes
    // shorthand routes:routes 
});
export default router;