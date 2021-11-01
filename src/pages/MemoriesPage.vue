<template>
	<BaseLayout pageTitle="All Memories" pageDefaultBackLink="/memories">
		<template v-slot:actions-end>
			<IonButton>
				<IonIcon slot="icon-only" :icon="add">sadas</IonIcon>
			</IonButton>
		</template>
		<MemoriesList :memories="memories"></MemoriesList>
	</BaseLayout>
</template>

<script>
import MemoriesList from "../components/memories/MemoriesList.vue"
import {IonButton, IonIcon} from "@ionic/vue"
import {add} from "ionicons/icons"

export default {
	components: {
		MemoriesList,
		IonButton, 
		IonIcon
	},
	data() {
		return { add }
	},
	computed: {
		memories() {
			return this.$store.getters.memories;
		}
	}
};
</script>

<style>
</style>
