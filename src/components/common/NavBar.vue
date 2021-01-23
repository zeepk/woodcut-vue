<template>
	<v-app-bar class="nav--bar" app>
		<v-toolbar-title class="nav--title">
			<router-link to="/">
				<v-img
					max-height="150"
					max-width="250"
					src="@/assets/images/logo.png"
				></v-img>
			</router-link>
		</v-toolbar-title>
		<v-spacer />
		<v-form class="search-form">
			<v-text-field
				class=""
				:placeholder="searchPlaceholder"
				outlined
			></v-text-field>
		</v-form>
	</v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { navTitle, searchPlaceholder } from '@/utils/constants';
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
.search-form {
	max-height: 100%;
}
</style>
