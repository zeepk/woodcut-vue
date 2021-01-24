import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../components/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{ path: '/:username', component: Home }
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
