<template>
	<div>
		<h1>
			{{ firstStatRecord.skills.find((skill) => skill.skillId === 0).xp }}
		</h1>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
	name: 'PlayerLandingPage',
	computed: {
		...mapGetters({
			username: 'getCurrentUsername',
			displayName: 'getCurrentDisplayname',
			firstStatRecord: 'getFirstStatRecord',
		}),
	},
});
</script>

<style scoped></style>
