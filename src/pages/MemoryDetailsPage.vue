<template>
	<BaseLayout
		:pageTitle="loadedMemory ? loadedMemory.title : 'loading a Memory'"
		pageDefaultBackLink="/memories"
	>
		<h2 v-if="!loadedMemory">Could not find a Id from memory</h2>
		<MemoryOverview
			v-else
			:title="loadedMemory.title"
			:image="loadedMemory.image"
			:description="loadedMemory.description"
		></MemoryOverview>
	</BaseLayout>
</template>

<script>
import MemoryOverview from "../components/memories/MemoriesOverview.vue";

export default {
	components: {
		MemoryOverview,
	},
	data() {
		return {
			memoryId: this.$route.params.id,
		};
	},
	computed: {
		loadedMemory() {
			return this.$store.getters.memory(this.memoryId);
		},
	},
	watch: {
		$route(currentRoute) {
			this.memoryId = currentRoute.params.id;
		},
	},
};
</script>

<style>
</style>