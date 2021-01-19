<template>
	<div>
		<v-app-bar color="deep-purple" dark app>
			<v-toolbar-title>{{ navTitle }}</v-toolbar-title>
		</v-app-bar>
	</div>
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

<style scoped></style>
