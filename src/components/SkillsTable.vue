<template>
	<div class="ma-10">
		<v-data-table
			:headers="skillTableHeaders"
			:items="skills"
			disable-pagination
			hide-default-footer
		>
			<template v-slot:[`item.skillIcon`]="{ item }">
				<v-img :src="item.skillIcon" />
			</template>
		</v-data-table>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { skillTableHeaders } from '@/utils/constants';
import { skillIcon } from '../utils/helperFunctions';
import { Skill } from '@/types/rootTypes';

export default Vue.extend({
	name: 'SkillsTable',
	data: function() {
		return {
			skillTableHeaders,
			skillIcon,
		};
	},
	computed: {
		...mapGetters({
			skillGains: 'currentUserSkillGains',
		}),
		skills: function() {
			return this.skillGains.map((s: Skill) => {
				return {
					...s,
					skillIcon: skillIcon(s.skillId),
				};
			});
		},
	},
	methods: {
		...mapActions({
			setCurrentUsername: 'setCurrentUsername',
			getCurrentUserStatRecords: 'getCurrentUserStatRecords',
		}),
	},
	async mounted() {
		await this.getCurrentUserStatRecords();
	},
});
</script>

<style scoped></style>
