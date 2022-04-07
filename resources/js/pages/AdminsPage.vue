<template>
    <div class="admins-data-table">
        <v-container fluid>
            <bread-crumbs-component title1="Administrateurs" link="/home/admins" icon="mdi mdi-chevron-right" />
            <v-data-table
                :loading="loading"
                loading-text="Chargement... veuillez patienter"
                :headers="headers"
                :items="users"
                :search="search"
                disable-sort
                class="elevation-1"
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Administrateurs</v-toolbar-title>
                        <v-divider
                            class="mx-4"
                            inset
                            vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <store-admin-dialog />
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
                                    <v-list-item-content><v-list-item-title>Bloqué</v-list-item-title></v-list-item-content>
                                </v-list-item>
                                <v-list-item v-else link @click="restore(item.id)">
                                    <v-list-item-icon><v-icon color="green">mdi-restore</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Restaurer</v-list-item-title></v-list-item-content>
                                </v-list-item>
                                <v-list-item link @click="security(item.id)">
                                    <v-list-item-icon><v-icon color="primary">mdi-security</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Sécurité</v-list-item-title></v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-menu>
                </template>

                <template v-slot:item.type="{item}">
                    <v-chip dark v-if="item.type == 'admin'" color="green">Administrateur Principale</v-chip>
                    <v-chip dark v-if="item.type == 'agent'" color="yellow">Agent de confirmation</v-chip>
                </template>

                <template v-slot:item.deleted_at="{ item }">
                    <v-chip dark v-if="item.deleted_at == null" color="green">
                        Active
                    </v-chip>
                    <v-chip dark v-else color="red">
                        Bloqué
                    </v-chip>
                </template>

                <template v-slot:no-data>
                    <v-btn
                        color="primary">
                        Reset
                    </v-btn>
                </template>
            </v-data-table>
            <destroy-admin-dialog :dialog="dialog" :id="selected" @close="close" />
            <restore-admin-dialog :dialog="dialog1" :id="selected" @close="close1" />
            <update-admin-dialog :dialog="dialog2" :data="data" @close="close2" />
            <admin-security-dialog :dialog="dialog3" :id="selected" @close="close3" />
        </v-container>
    </div>
</template>

<script>
import BreadCrumbsComponent from "../components/BreadCrumbsComponent";
import StoreAdminDialog from "../components/dialog/Admin/StoreAdminDialog";
import DestroyAdminDialog from "../components/dialog/Admin/DestroyAdminDialog";
import RestoreAdminDialog from "../components/dialog/Admin/RestoreAdminDialog";
import UpdateAdminDialog from '../components/dialog/Admin/UpdateAdminDialog'
import AdminSecurityDialog from "../components/dialog/Admin/AdminSecurityDialog";
export default {
    components: {
        AdminSecurityDialog,
        RestoreAdminDialog, DestroyAdminDialog, StoreAdminDialog, BreadCrumbsComponent,UpdateAdminDialog},
    data : ()=>({
        dialog : false,
        dialog1 : false,
        dialog2 : false,
        dialog3 : false,
        id : null,
        users : [],
        profile : [],
        data : [],
        info : [],
        loading : true,
        selected : null,
        search : null,
        headers: [
            {
                text: 'Nom complet',
                align: 'start',
                sortable: true,
                value: 'fullName',
            },
            { text: 'Téléphone', value: 'phone' },
            { text: 'Type', value: 'type' },
            { text: 'Créé à', value: 'created_at' },
            { text: 'Modifier à', value: 'created_at' },
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
        security(id)
        {
            this.dialog3 = true
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
            this.data = []
            this.dialog2 = false
        },
        close3()
        {
            this.dialog3 = false
            this.selected = null
        },
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get('/api/admins')
                    .then(e =>{
                        this.loading = false
                        this.users = e.data.data
                    }).catch(err => {
                    this.$toast.open({message : 'Erreur dans serveur veuillez réessayer',type : 'error'})
                })
            })
        },
        update(data)
        {
            this.dialog2 = true
            this.data = data
        },
    },
    mounted() {
        this.init()
    }
}
</script>
