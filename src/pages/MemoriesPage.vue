<template>
	<BaseLayout pageTitle="All Memories">
		<IonList>
			<IonItem
				v-for="memory in memories"
				:key="memory.id"
				:router-link="`/memories/${memory.id}`"
			>
				<IonThumbnail slot="start">
					<IonImg :src="memory.image"></IonImg>
				</IonThumbnail>
				<IonLabel>{{ memory.title }}</IonLabel>
			</IonItem>
		</IonList>
	</BaseLayout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";

export default {
	components: {
		IonList,
		IonItem,
		IonImg,
		IonThumbnail,
		IonLabel,
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
