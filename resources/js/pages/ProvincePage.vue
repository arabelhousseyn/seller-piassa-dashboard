<template>
    <div class="sellers-data-table">
        <v-container fluid>
            <bread-crumbs-component title1="Willayas" link="/home/provinces" icon="mdi mdi-chevron-right" />
            <v-data-table
                :loading="loading"
                loading-text="Chargement... veuillez patienter"
                :headers="headers"
                :items="provinces"
                :search="search"
                disable-sort
                class="elevation-1"
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Willayas</v-toolbar-title>
                        <v-divider
                            class="mx-4"
                            inset
                            vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <store-province-dialog />
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

                                <v-list-item v-if="item.is_available" link @click="deactivate(item.id)">
                                    <v-list-item-icon><v-icon color="red">mdi-delete</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Désactiver</v-list-item-title></v-list-item-content>
                                </v-list-item>

                                <v-list-item v-else link @click="activate(item.id)">
                                    <v-list-item-icon><v-icon color="green">mdi-restore</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Activer</v-list-item-title></v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-menu>
                </template>

                <template v-slot:item.is_available="{ item }">
                    <v-chip dark v-if="item.is_available" color="green">
                        Disponible
                    </v-chip>
                    <v-chip dark v-else color="red">
                        Indisponible
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
        <deactivate-province-dialog @close="close" :id="province_id" :dialog="dialog" />
        <activate-province-dialog @close="close1" :id="province_id" :dialog="dialog1" />
        <update-provience-dialog @close="close2" :data="data" :dialog="dialog2" />
    </div>
</template>

<script>

import BreadCrumbsComponent from "../components/BreadCrumbsComponent";
import StoreProvinceDialog from "../components/dialog/Province/StoreProvinceDialog";
import DeactivateProvinceDialog from "../components/dialog/Province/DeactivateProvinceDialog";
import ActivateProvinceDialog from "../components/dialog/Province/ActivateProvinceDialog";
import UpdateProvienceDialog from "../components/dialog/Province/UpdateProvienceDialog";
export default {
    components: {
        UpdateProvienceDialog,
        ActivateProvinceDialog, DeactivateProvinceDialog, StoreProvinceDialog, BreadCrumbsComponent},
    data : ()=>({
        provinces : [],
        loading : true,
        search : null,
        dialog : false,
        dialog1 : false,
        dialog2 : false,
        headers: [
            {
                text: 'Code',
                align: 'start',
                sortable: true,
                value: 'code',
            },
            { text: 'Willaya', value: 'name' },
            { text: 'Créé à', value: 'created_at' },
            { text: 'Mis à jour à', value: 'updated_at' },
            { text: 'Statu', value: 'is_available' },
            { text: 'actions', value: 'actions', sortable: false },
        ],
        profile : [],
        data : [],
        province_id : null,
    }),
    methods : {
        reset()
        {
            this.init()
        },
        close()
        {
          this.province_id = null
          this.dialog = false
        },
        close1()
        {
          this.province_id = null
          this.dialog1 = false
        },
        close2()
        {
          this.data = []
          this.dialog2 = false
        },
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get('/api/provinces/all')
                    .then(e =>{
                        this.loading = false
                        this.provinces = e.data.data
                    }).catch(err => {
                    this.$toast.open({message : 'Erreur dans serveur veuillez réessayer',type : 'error'})
                })
            })
        },
        deactivate(id)
        {
            this.province_id = id
            this.dialog = true
        },
        activate(id)
        {
            this.province_id = id
            this.dialog1 = true
        },
        update(data)
        {
            this.data = data
            this.dialog2 = true
        }
    },
    mounted() {
        this.init()
    }
}
</script>
