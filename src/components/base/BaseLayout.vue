<template>
	<IonPage>
		<IonHeader>
			<IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton :default-href="pageDefaultBackLink"></IonBackButton>
                </IonButtons>
				<IonTitle> {{ pageTitle }}</IonTitle>
			</IonToolbar>
		</IonHeader>
		<IonContent>
			<slot />
		</IonContent>
	</IonPage>
</template>

<script>
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
    IonBackButton,
    IonButtons
} from "@ionic/vue";

export default {
    props: [
        "pageTitle",
        "pageDefaultBackLink"
    ],
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
        IonBackButton,
        IonButtons
	},
};
</script>

<style>
</style>