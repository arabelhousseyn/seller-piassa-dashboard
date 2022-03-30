<template>
    <div class="stats-page">
        <v-container fluid>
            <bread-crumbs-component title1="Statistiques" link="/home/statistics" icon="mdi mdi-chevron-right" />
            <v-row>
                <v-col cols="12" lg="6" sm="6">
                    <v-data-table
                        :loading="loading"
                        loading-text="Chargement... veuillez patienter"
                        :headers="headers"
                        :items="data"
                        :search="search"
                        disable-sort
                        class="elevation-1"
                    >
                        <template v-slot:top>
                            <v-toolbar
                                flat
                            >
                                <v-toolbar-title>Statistiques</v-toolbar-title>
                            </v-toolbar>
                            <v-toolbar flat>
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Recherche"
                                    single-line
                                    hide-details
                                ></v-text-field>
                            </v-toolbar>
                        </template>

                        <template v-slot:no-data>
                            <v-btn
                                color="primary">
                                Reset
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import BreadCrumbsComponent from "../components/BreadCrumbsComponent";
export default {
    components: {BreadCrumbsComponent},
    data : ()=>({
        headers: [
            {
              text : "Numéro de demande",
                value: "id",
                align : "start",
                sortable : true,
            },
            {text: 'Nom Véhicule', value: 'vehicle.model',},
            {text: 'Année Véhicule',value: 'vehicle.year'},
            {text: 'N° châssis',value: 'vehicle.chassis_number'},
            {text: 'Type',value: 'type.name'},
        ],
        data : [],
        days : 7,
        loading : true,
        search : null,
    }),
    methods : {
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get(`/api/statistics/request-expired/${this.days}`)
                    .then(e =>{
                        this.data = e.data.data
                        this.loading = false
                    }).catch(err => {
                    this.$toast.open({message : 'Erreur dans serveur veuillez réessayer',type : 'error'})
                })
            })
        }
    },
    mounted() {
        this.init()
    }
}
</script>
