<template>
	<div>
		<h1>{{ baseApiUrl }}</h1>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { baseApiUrl } from '../utils/constants';

export default Vue.extend({
	name: 'Home',
	data() {
		return {
			baseApiUrl: baseApiUrl,
		};
	},
});
</script>

<style scoped></style>
