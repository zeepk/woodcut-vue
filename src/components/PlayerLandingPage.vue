<template>
	<div class="ma-10">
		<v-data-table
			:headers="skillTableHeaders"
			:items="skillGains"
			disable-pagination
			hide-default-footer
			class="elevation-1"
		/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { skillTableHeaders } from '@/utils/constants';

export default Vue.extend({
	name: 'PlayerLandingPage',
	data: function () {
		return {
			skillTableHeaders
		}
	},
	computed: {
		...mapGetters({
			username: 'getCurrentUsername',
			displayName: 'getCurrentDisplayname',
			skillGains: 'getCurrentUserSkillGains',
		}),
	},
	methods: {
		...mapActions({
			setCurrentUsername: 'setCurrentUsername',
			setCurrentUserStatRecords: 'setCurrentUserStatRecords',
		}),
	},
	async mounted() {
		if (this.username === null) {
			const formattedUsername = this.$route.params.username
				.toLowerCase()
				.split(' ')
				.join('+');
			this.setCurrentUsername({
				username: formattedUsername,
			});
			await this.setCurrentUserStatRecords();
		}
	},
});
</script>

<style scoped></style>
