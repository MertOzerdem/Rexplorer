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
	data() {
		return {
			memories: [
				{
					id: "m1",
					image: "https://media.geeksforgeeks.org/wp-content/uploads/geek-stack-1.png",
					title: "good memory",
					description: "good memory desc",
				},
				{
					id: "m2",
					image: "https://media.geeksforgeeks.org/wp-content/uploads/geek-stack-1.png",
					title: "normal memory",
					description: "normal memory desc",
				},
				{
					id: "m3",
					image: "https://media.geeksforgeeks.org/wp-content/uploads/geek-stack-1.png",
					title: "bad memory",
					description: "bad memory desc",
				},
			],
		};
	},
};
</script>

<style>
</style>
