<template>
	<BaseLayout :pageTitle="loadedMemory ? loadedMemory.title : 'loading a Memory'" pageDefaultBackLink="/memories">
		<h2 v-if="!loadedMemory">Could not find a Id from memory</h2>
        <h2 v-else>Memories Found</h2>
	</BaseLayout>
</template>

<script>
export default {
	data() {
		return {
			memoryId: this.$route.params.id,
		};
	},
    computed: {
        loadedMemory() {
            return this.$store.getters.memory(this.memoryId);
        }
    },
    watch: {
        $route(currentRoute) {
            this.memoryId = currentRoute.params.id
        }
    }
};
</script>

<style>
</style>