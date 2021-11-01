<template>
	<IonList>
        <MemoryListItem 
            v-for="memory in memories"
			:key="memory.id"
			:memory="memory"
        ></MemoryListItem>
    </IonList>
</template>

<script>
import {IonList} from "@ionic/vue"
import MemoryListItem from "./MemoryListItem.vue"

export default {
    props: ["memories"],
    components: {
        IonList,
        MemoryListItem
    }
}
</script>