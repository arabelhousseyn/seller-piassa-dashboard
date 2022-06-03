<template>
    <div class="sellers-data-table">
        <v-container fluid>
            <bread-crumbs-component title1="Demandes" link="/home/requests" icon="mdi mdi-chevron-right" />
            <v-data-table
                :loading="loading"
                loading-text="Chargement... veuillez patienter"
                :headers="headers"
                :items="sellers"
                :search="search"
                disable-sort
                class="elevation-1"
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Demandes</v-toolbar-title>
                        <v-divider
                            class="mx-4"
                            inset
                            vertical
                        ></v-divider>
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
                    <v-menu
                        bottom
                        min-width="200"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                dark
                                color="primary"
                                fab
                                small
                                text
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon>mdi-dots-horizontal</v-icon>
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item-group>
                                <v-list-item link @click="fetchProfile(item.profile)">
                                    <v-list-item-icon><v-icon color="primary">mdi-account</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Compte</v-list-item-title></v-list-item-content>
                                </v-list-item>
                                <v-list-item link @click="update(item)">
                                    <v-list-item-icon><v-icon color="primary">mdi-pencil</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Modifier</v-list-item-title></v-list-item-content>
                                </v-list-item>
                                <v-list-item link @click="security(item.id)">
                                    <v-list-item-icon><v-icon color="primary">mdi-security</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Sécurité</v-list-item-title></v-list-item-content>
                                </v-list-item>
                                <v-list-item link @click="$router.push({name : 'sellerPhones', params : {id : item.id,phones : item.phones} })">
                                    <v-list-item-icon><v-icon color="primary">mdi-phone</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Téléphones</v-list-item-title></v-list-item-content>
                                </v-list-item>
                                <v-list-item link @click="$router.push({name : 'sellerJobs',params : {id : item.id,jobs : item.job}})">
                                    <v-list-item-icon><v-icon color="primary">mdi-bag-checked</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Travaux</v-list-item-title></v-list-item-content>
                                </v-list-item>

                                <v-list-item v-if="item.deleted_at == null" link @click="destory(item.id)">
                                    <v-list-item-icon><v-icon color="red">mdi-delete</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Supprimer</v-list-item-title></v-list-item-content>
                                </v-list-item>
                                <v-list-item v-else link @click="restore(item.id)">
                                    <v-list-item-icon><v-icon color="green">mdi-restore</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Restaurer</v-list-item-title></v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-menu>
                </template>

                <template v-slot:item.deleted_at="{ item }">
                    <v-chip dark v-if="item.deleted_at == null" color="green">
                        Active
                    </v-chip>
                    <v-chip dark v-else color="red">
                        Supprimé
                    </v-chip>
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
import BreadCrumbsComponent from "../BreadCrumbsComponent"
export default {
    components: {BreadCrumbsComponent},
    data : ()=>({
        sellers : [],
        loading : true,
        search : null,
        dialog : false,
        headers: [
            {
                text: 'Nom complete',
                align: 'start',
                sortable: true,
                value: 'request.vehicle.user.profile.full_name',
            },
            { text: 'Telephone', value: 'request.vehicle.user.phone' },
            { text: 'Type', value: 'request.type.name' },
            { text: 'Type', value: 'request.type.name' },
            { text: 'Details', value: 'request.informations' },
            { text: 'Créé à', value: 'request.created_at' },
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
                axios.get('/api/sellers/requests')
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
