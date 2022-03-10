<template>
    <div class="sellers-data-table">
        <v-container fluid>
            <bread-crumbs-component title1="Vendeurs" link="/home/sellers" icon="mdi mdi-chevron-right" />
            <v-data-table
                :loading="loading"
                loading-text="Chargement... veuillez patienter"
                :headers="headers"
                :items="sellers"
                :search="search"
                sort-by="created_at"
                class="elevation-1"
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Vendeurs</v-toolbar-title>
                        <v-divider
                            class="mx-4"
                            inset
                            vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <store-seller-dialog />
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
                                <v-list-item link @click="()=>{}">
                                    <v-list-item-icon><v-icon color="primary">mdi-pencil</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Modifier</v-list-item-title></v-list-item-content>
                                </v-list-item>
                                <v-list-item link @click="()=>{}">
                                    <v-list-item-icon><v-icon color="primary">mdi-phone</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Téléphones</v-list-item-title></v-list-item-content>
                                </v-list-item>
                                <v-list-item link @click="()=>{}">
                                    <v-list-item-icon><v-icon color="primary">mdi-bag-checked</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Travaux</v-list-item-title></v-list-item-content>
                                </v-list-item>

                                <v-list-item v-if="item.deleted_at == null" link @click="()=>{}">
                                    <v-list-item-icon><v-icon color="red">mdi-delete</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Supprimer</v-list-item-title></v-list-item-content>
                                </v-list-item>
                                <v-list-item v-else link @click="()=>{}">
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
        <seller-profile-dialog v-if="dialog" :dialog="dialog" :profile="profile" @close="close" />
    </div>
</template>

<script>
import BreadCrumbsComponent from "../BreadCrumbsComponent";
import SellerProfileDialog from "../dialog/Seller/SellerProfileDialog";
import StoreSellerDialog from "../dialog/Seller/StoreSellerDialog";
export default {
    components: {StoreSellerDialog, SellerProfileDialog, BreadCrumbsComponent},
    data : ()=>({
        sellers : [],
        loading : true,
        search : null,
        dialog : false,
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
        profile : [],
    }),
    methods : {
        reset()
        {
            this.init()
        },
        fetchProfile(data)
        {
            this.dialog = true
            this.profile = data
        },
        close()
        {
          this.dialog = false
          this.profile = []
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
        }
    },
    mounted() {
        this.init()
    }
}
</script>
