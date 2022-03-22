<template>
    <div class="users-data-table">
        <v-container fluid>
            <bread-crumbs-component title1="Commandes" link="/home/orders" icon="mdi mdi-chevron-right" />
            <v-data-table
                :loading="loading"
                loading-text="Chargement... veuillez patienter"
                :headers="headers"
                :items="orders"
                :search="search"
                disable-sort
                class="elevation-1"
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Commandes</v-toolbar-title>
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
                                <v-list-item v-if="item.deleted_at == null" link @click="destroy(item.id)">
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

                <template v-slot:item.invoice.path="{ item }">
                    <a :href="item.invoice.path" target="_blank"><v-icon large>mdi-file-pdf-box</v-icon></a>
                </template>

                <template v-slot:item.confirmed_by_administrator_at="{ item }">
                    <v-chip dark v-if="item.confirmed_by_administrator_at == null" color="yellow">
                        En attente
                    </v-chip>
                    <v-chip dark v-else color="green">
                        Confirmé
                    </v-chip>
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
import DeleteUserDialog from "../dialog/user/DeleteUserDialog";
import RestoreUserDialog from "../dialog/user/RestoreUserDialog";
import CreateUserDialog from "../dialog/user/CreateUserDialog";
import UserProfileDialog from "../dialog/user/UserProfileDialog";
import UpdateUserDialog from "../dialog/user/UpdateUserDialog";
import SecurityDialog from "../dialog/user/SecurityDialog";
import UserCommercialInfo from "../dialog/user/UserCommercialInfo";
import BreadCrumbsComponent from "../BreadCrumbsComponent";
export default {
    components: {
        BreadCrumbsComponent,
        UserCommercialInfo,
        SecurityDialog,
        UpdateUserDialog, UserProfileDialog, CreateUserDialog, RestoreUserDialog, DeleteUserDialog},
    data : ()=>({
        dialog : false,
        dialog1 : false,
        dialog2 : false,
        dialog3 : false,
        dialog4 : false,
        dialog5 : false,
        id : null,
        orders : [],
        profile : [],
        data : [],
        info : [],
        loading : true,
        selected : null,
        search : null,
        headers: [
            {
                text: 'Ref',
                align: 'start',
                sortable: true,
                value: 'ref',
            },
            { text: 'Livraison', value: 'type_delivery' },
            { text: 'Sous Total', value: 'amount' },
            { text: 'Nom utilisateur', value: 'user.profile.full_name' },
            { text: 'Téléphone', value: 'user.phone' },
            { text: 'Facture', value: 'invoice.path' },
            { text: 'Créé à', value: 'created_at' },
            { text: 'Mise à jour à', value: 'updated_at' },
            { text: 'Confirmation', value: 'confirmed_by_administrator_at' },
            { text: 'Statu', value: 'deleted_at' },
            { text: 'actions', value: 'actions', sortable: false },
        ],
    }),
    methods : {
        reset()
        {
            this.init()
        },
        destroy(id)
        {
            this.dialog = true
            this.selected = id
        },
        restore(id)
        {
            this.dialog1 = true
            this.selected = id
        },
        close()
        {
            this.selected = null
            this.dialog = false
        },
        close1()
        {
            this.selected = null
            this.dialog1 = false
        },
        close2()
        {
            this.profile = []
            this.info = []
            this.dialog2 = false
        },
        close3()
        {
            this.data = []
            this.dialog3 = false
        },
        close4()
        {
            this.id = null
            this.dialog4 = false
        },
        close5()
        {
            this.dialog5 = false
        },
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get('/api/orders/all')
                    .then(e =>{
                        this.loading = false
                        this.orders = e.data.data
                    }).catch(err => {
                    this.$toast.open({message : 'Erreur dans serveur veuillez réessayer',type : 'error'})
                })
            })
        },
        openProfile(data)
        {
            this.dialog2 = true
            this.profile = data.profile
            this.info = data.commercial_info
        },
        update(data)
        {
            this.dialog3 = true
            this.data = data
        },
        security(id)
        {
            this.dialog4 = true
            this.id = id
        },
        commercial_info(info)
        {
            this.dialog5 = true
            this.info = info
        }
    },
    mounted() {
        this.init()
    }
}
</script>
