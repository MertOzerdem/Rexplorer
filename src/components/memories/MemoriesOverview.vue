<template>
    <IonImg :src="image" alt=""></IonImg>
    <h2>{{title}}</h2>
    <p>{{description}}</p>
</template>

<script>
import {IonImg} from "@ionic/vue"

export default {
    props: ["title", "image", "description"],
    components: {
        IonImg
    }
}
</script>

<style>

</style>