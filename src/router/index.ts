import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../components/Home.vue';

Vue.use(VueRouter);

export const usernameRoute = { path: '/:username', name: 'Player', component: Home }

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	usernameRoute

];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
