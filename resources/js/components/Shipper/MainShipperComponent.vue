<template>
    <div class="shippers-data-table">
        <v-container fluid>
            <bread-crumbs-component title1="Livreurs" link="/home/shippers" icon="mdi mdi-chevron-right" />
            <v-data-table
                :loading="loading"
                loading-text="Chargement... veuillez patienter"
                :headers="headers"
                :items="shippers"
                :search="search"
                disable-sort
                class="elevation-1"
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Livreurs</v-toolbar-title>
                        <v-divider
                            class="mx-4"
                            inset
                            vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <store-shipper-dialog />
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
                                <v-list-item link @click="openProfile(item)">
                                    <v-list-item-icon><v-icon color="primary">mdi-account</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Compte</v-list-item-title></v-list-item-content>
                                </v-list-item>
                                <v-list-item link @click="update(item)">
                                    <v-list-item-icon><v-icon color="primary">mdi-pencil</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Modifier</v-list-item-title></v-list-item-content>
                                </v-list-item>

                                <v-list-item link @click="update(item)">
                                    <v-list-item-icon><v-icon color="primary">mdi-currency-usd</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Comissions</v-list-item-title></v-list-item-content>
                                </v-list-item>

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
        <delete-shipper-dialog @close="close" :dialog="dialog" :id="shipper_id" />
        <restore-shipper-dialog @close="close1" :dialog="dialog1" :id="shipper_id" />
    </div>
</template>

<script>
import BreadCrumbsComponent from "../BreadCrumbsComponent";
import StoreShipperDialog from "../dialog/Shipper/StoreShipperDialog";
import DeleteShipperDialog from "../dialog/Shipper/DeleteShipperDialog";
import RestoreShipperDialog from "../dialog/Shipper/RestoreShipperDialog";
export default {
    components: {RestoreShipperDialog, DeleteShipperDialog, StoreShipperDialog, BreadCrumbsComponent},
    data : ()=>({
        dialog : false,
        dialog1 : false,
        dialog2 : false,
        dialog3 : false,
        id : null,
        shippers : [],
        profile : [],
        data : [],
        loading : true,
        shipper_id : null,
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
            this.shipper_id = id
        },
        restore(id)
        {
            this.dialog1 = true
            this.shipper_id = id
        },
        close()
        {
            this.dialog = false
            this.shipper_id = null
        },
        close1()
        {
            this.dialog1 = false
            this.shipper_id = null
        },
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get('/api/shippers')
                    .then(e =>{
                        this.loading = false
                        this.shippers = e.data.data
                    }).catch(err => {
                    this.$toast.open({message : 'Erreur dans serveur veuillez réessayer',type : 'error'})
                })
            })
        },
        openProfile(data)
        {
            this.dialog2 = true
            this.profile = data.profile
        }
    },
    mounted() {
        this.init()
    }
}
</script>
