<template>
    <v-footer color="third" >
        <v-col
            class="text-center"
            cols="12"
        >
        <p class="mr-0" style="font-weight: bold;">&copy; Copyright {{text}} <strong style="color: #e85810;">Piassa</strong> Tout droit réservé</p>
            <p style="color: grey;" class="mr-0">Version {{ $store.state.data.app_version.versioning}}</p>
        <p class="mr-0">Created by <a style="text-decoration: none; color: #0b5ed7; font-weight: bold;" href="https://www.linkedin.com/in/elhousseyn-arab/" target="_blank">Elhousseyn Arab</a></p>
        </v-col>
    </v-footer>
</template>


<script>
export default {
    data : ()=>({
        text : '',
        current : 2022,
    }),
    mounted() {
        this.text = (new Date().getFullYear() == this.current) ? '2022' : `2022-${new Date().getFullYear() + 1}`
    }
}
</script>
