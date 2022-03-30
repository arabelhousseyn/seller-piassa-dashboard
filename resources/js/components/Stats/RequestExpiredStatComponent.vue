<template>
    <div class="request-expired-datatable">
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
    </div>
</template>

<script>
export default {
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
