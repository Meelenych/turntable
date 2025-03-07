import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/player',
			name: 'player',
			component: () => import('../views/PlayerView.vue'),
		},
		{
			path: '/library',
			name: 'library',
			component: () => import('../views/LibraryView.vue'),
		},
	],
});

export default router;
