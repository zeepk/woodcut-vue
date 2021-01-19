<template>
	<v-app-bar class="nav--bar" app>
		<v-toolbar-title class="nav--title">{{ navTitle }}</v-toolbar-title>
	</v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { navTitle } from '../../utils/constants';
export default Vue.extend({
	name: 'NavBar',
	data() {
		return {
			navTitle: navTitle,
		};
	},
});
</script>

<style scoped>
.nav--bar {
	background-color: var(--medium-gray) !important;
}
.nav--title {
	color: var(--text-white);
}
</style>
