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
import { baseApiUrl } from '@/utils/constants';

export default Vue.extend({
	name: 'Home',
	data() {
		return {
			baseApiUrl: baseApiUrl,
		};
	},
	computed: {
		...mapGetters({
			username: 'getCurrentUsername',
			displayName: 'getCurrentDisplayname',
			firstStatRecord: 'getFirstStatRecord',
		}),
	},
	mounted() {
		this.$store.dispatch('setCurrentUsername', {
			username: this.$route.params.username,
		});
		this.$store.dispatch('setCurrentUserStatRecords');
	},
});
</script>

<style scoped></style>
