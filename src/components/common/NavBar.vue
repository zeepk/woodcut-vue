<template>
	<v-app-bar class="nav--bar pt-2" app>
		<v-toolbar-title class="nav--title">{{ navTitle }}</v-toolbar-title>
		<v-spacer />
		<v-form>
			<v-text-field
				class="mt-2"
				:placeholder="searchPlaceholder"
				outlined
			></v-text-field>
		</v-form>
	</v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { navTitle, searchPlaceholder } from '../../utils/constants';
export default Vue.extend({
	name: 'NavBar',
	data() {
		return {
			navTitle: navTitle,
			searchPlaceholder: searchPlaceholder,
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
