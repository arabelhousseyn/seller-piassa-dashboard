<template>
    <div class="sellers-data-table">
        <v-container fluid>
            <bread-crumbs-component title1="Marques" link="/home/signs" icon="mdi mdi-chevron-right" />
            <v-data-table
                :loading="loading"
                loading-text="Chargement... veuillez patienter"
                :headers="headers"
                :items="sings"
                :search="search"
                disable-sort
                class="elevation-1"
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Marques</v-toolbar-title>
                        <v-divider
                            class="mx-4"
                            inset
                            vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <store-sign-dialog />
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
                                <v-list-item link @click="update(item)">
                                    <v-list-item-icon><v-icon color="primary">mdi-pencil</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Modifier</v-list-item-title></v-list-item-content>
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

                <template v-slot:item.logo="{ item }">
                    <v-avatar><v-img :src="item.logo" :lazy-src="item.lgo"></v-img> </v-avatar>
                </template>

                <template v-slot:no-data>
                    <v-btn
                        color="primary">
                        Reset
                    </v-btn>
                </template>
            </v-data-table>
            <update-sign-dialog @close="close1" :dialog="dialog1" :data="data" />
            <delete-sign-dialog @close="close" :dialog="dialog" :id="sing_id" />
            <restore-sign-dialog @close="close2" :dialog="dialog2" :id="sing_id" />
        </v-container>
    </div>
</template>

<script>

import BreadCrumbsComponent from "../components/BreadCrumbsComponent";
import StoreSignDialog from "../components/dialog/Sign/StoreSignDialog";
import UpdateSignDialog from "../components/dialog/Sign/UpdateSignDialog";
import DeleteSignDialog from "../components/dialog/Sign/DeleteSignDialog";
import RestoreSignDialog from "../components/dialog/Sign/RestoreSignDialog";

export default {
    components: {RestoreSignDialog, DeleteSignDialog, UpdateSignDialog, StoreSignDialog, BreadCrumbsComponent},
    data : ()=>({
        sings : [],
        loading : true,
        search : null,
        dialog : false,
        dialog1 : false,
        dialog2 : false,
        headers: [
            {
                text: 'Marque',
                value: 'name',
                align: 'start',
                sortable: true,
            },
            {text: 'logo',value: 'logo'},
            { text: 'Préfixe', value: 'prefix' },
            { text: 'Créé à', value: 'created_at' },
            { text: 'Mis à jour à', value: 'updated_at' },
            { text: 'Statu', value: 'deleted_at' },
            { text: 'actions', value: 'actions', sortable: false },
        ],
        profile : [],
        data : [],
        sing_id : null,
    }),
    methods : {
        reset()
        {
            this.init()
        },
        close()
        {
            this.sing_id = null
            this.dialog = false
        },
        close1()
        {
            this.data = []
            this.dialog1 = false
        },
        close2()
        {
            this.sing_id = id
            this.dialog2 = true
        },
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get('/api/signs')
                    .then(e =>{
                        this.loading = false
                        this.sings = e.data.data
                    }).catch(err => {
                    this.$toast.open({message : 'Erreur dans serveur veuillez réessayer',type : 'error'})
                })
            })
        },
        destroy(id)
        {
            this.sing_id = id
            this.dialog = true
        },
        restore(id)
        {
            this.sing_id = id
            this.dialog2 = true

        },
        update(data)
        {
            this.data = data
            this.dialog1 = true
        }
    },
    mounted() {
        this.init()
    }
}
</script>
