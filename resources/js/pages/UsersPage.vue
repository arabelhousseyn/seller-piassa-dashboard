<template>
    <div class="users">
        <v-container fluid>
            <v-data-table
                :loading="loading"
                loading-text="Chargement... veuillez patienter"
                :headers="headers"
                :items="users"
                :search="search"
                sort-by="created_at"
                class="elevation-1"
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Utilisateurs</v-toolbar-title>
                        <v-divider
                            class="mx-4"
                            inset
                            vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <v-btn color="primary">
                            <v-icon>mdi-plus</v-icon> Ajouter
                        </v-btn>
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
                <template v-slot:item.actions="{ item }">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" class="mr-2" v-bind="attrs" v-on="on">
                        <v-icon>
                            mdi-account
                        </v-icon>
                    </v-btn>
                        </template>
                        <span>Compte</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" class="mr-2" v-bind="attrs" v-on="on">
                                <v-icon>
                                    mdi-delete
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>Supprimer</span>
                    </v-tooltip>
                </template>
                <template v-slot:no-data>
                    <v-btn
                        color="primary">
                        Reset
                    </v-btn>
                </template>
            </v-data-table>
        </v-container>
    </div>
</template>

<script>
export default {
    data : ()=>({
        users : [],
        loading : true,
        search : null,
        headers: [
            {
                text: 'Téléphone',
                align: 'start',
                sortable: true,
                value: 'phone',
            },
            { text: 'Email', value: 'email' },
            { text: 'Créé à', value: 'created_at' },
            { text: 'actions', value: 'actions', sortable: false },
        ],
    }),
    methods : {
        reset()
        {
            this.init()
        },
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get('/api/users')
                    .then(e =>{
                        this.loading = false
                        this.users = e.data.data
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
