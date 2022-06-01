<template>
    <div class="sellers-data-table">
        <v-container fluid>
            <bread-crumbs-component title1="Demandes" link="/home/requests" icon="mdi mdi-chevron-right" />
            welcome
        </v-container>
    </div>
</template>

<script>
import BreadCrumbsComponent from "../BreadCrumbsComponent"
export default {
    components: {BreadCrumbsComponent},
    data : ()=>({
        sellers : [],
        loading : true,
        search : null,
        dialog : false,
    }),
    methods : {
        reset()
        {
            this.init()
        },
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get('/api/sellers')
                    .then(e =>{
                        this.loading = false
                        this.sellers = e.data.data
                    }).catch(err => {
                    this.$toast.open({message : 'Erreur dans serveur veuillez réessayer',type : 'error'})
                })
            })
        },
    },
    mounted() {
        this.init()
    }
}
</script>
