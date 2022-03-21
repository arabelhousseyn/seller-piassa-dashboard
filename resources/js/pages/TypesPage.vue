<template>
    <div class="sellers-data-table">
        <v-container fluid>
            <bread-crumbs-component title1="Types" link="/home/types" icon="mdi mdi-chevron-right" />
            <v-data-table
                :loading="loading"
                loading-text="Chargement... veuillez patienter"
                :headers="headers"
                :items="types"
                :search="search"
                disable-sort
                class="elevation-1"
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Types</v-toolbar-title>
                        <v-divider
                            class="mx-4"
                            inset
                            vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <store-type-dialog />
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
                    <iframe width="100" height="100" :src="item.logo"></iframe>
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
            <update-type-dialog @close="close1" :data="data" :dialog="dialog1" />
            <delete-type-dialog @close="close" :id="type_id" :dialog="dialog" />
            <restore-type-dialog @close="close2" :id="type_id" :dialog="dialog2" />
        </v-container>
    </div>
</template>

<script>

import BreadCrumbsComponent from "../components/BreadCrumbsComponent";
import StoreTypeDialog from "../components/dialog/Type/StoreTypeDialog";
import UpdateTypeDialog from "../components/dialog/Type/UpdateTypeDialog";
import DeleteTypeDialog from "../components/dialog/Type/DeleteTypeDialog";
import RestoreTypeDialog from "../components/dialog/Type/RestoreTypeDialog";

export default {
    components: {RestoreTypeDialog, DeleteTypeDialog, UpdateTypeDialog, StoreTypeDialog, BreadCrumbsComponent},
    data : ()=>({
        types : [],
        loading : true,
        search : null,
        dialog : false,
        dialog1 : false,
        dialog2 : false,
        headers: [
            {
                text: 'Type',
                value: 'name',
                align: 'start',
                sortable: true,
            },
            { text: '%', value: 'percent' },
            {text: 'logo',value: 'logo'},
            { text: 'Créé à', value: 'created_at' },
            { text: 'Mis à jour à', value: 'updated_at' },
            { text: 'Statu', value: 'deleted_at' },
            { text: 'actions', value: 'actions', sortable: false },
        ],
        profile : [],
        data : [],
        type_id : null,
    }),
    methods : {
        reset()
        {
            this.init()
        },
        close()
        {
            this.type_id = null
            this.dialog = false
        },
        close1()
        {
            this.data = []
            this.dialog1 = false
        },
        close2()
        {
            this.type_id = null
            this.dialog2 = false
        },
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get('/api/types')
                    .then(e =>{
                        this.loading = false
                        this.types = e.data.data
                    }).catch(err => {
                    this.$toast.open({message : 'Erreur dans serveur veuillez réessayer',type : 'error'})
                })
            })
        },
        destroy(id)
        {
            this.type_id = id
            this.dialog = true
        },
        restore(id)
        {
            this.type_id = id
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
