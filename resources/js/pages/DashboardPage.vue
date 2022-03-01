<template>
    <div class="dashboard">
        <progress-circular-component />
            <header-component />
            <v-main v-if="!isLoading">
                <router-view />
            </v-main>
        <footer-component />
        </div>
</template>

<script>
import ProgressCircularComponent from "../components/ProgressCircularComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
export default {
    data : () =>({
       isLoading : true,
    }),
    components: {FooterComponent, HeaderComponent, ProgressCircularComponent},
    async mounted() {
       await axios.get('/sanctum/csrf-cookie').then(res =>{
            axios.get('/api/company/data',{headers : { 'Authorization' : `Bearer ${this.$store.state.user.token}`}})
            .then(e =>{
                this.isLoading = false
                this.$store.commit('SET_DATA',e.data)
            }).catch(err => {
                this.$toast.open({message : 'Erreur dans serveur veuillez réessayer',type : 'error'})
            })
        })
    }
}
</script>
