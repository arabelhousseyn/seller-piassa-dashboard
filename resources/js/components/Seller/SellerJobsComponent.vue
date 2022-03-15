<template>
    <div v-if="jobs !== undefined || data !== undefined" class="seller-jobs">
        <v-container fluid>
            <v-btn color="primary">
                <router-link style="text-decoration: none;color: white;" to="/home/sellers"><v-icon>mdi-subdirectory-arrow-left</v-icon> Retour </router-link>
            </v-btn>
            <v-data-table
                :headers="headers"
                :items="jobs == undefined ? data : jobs"
                :search="search"
                sort-by="created_at"
                class="elevation-1 mt-3"
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Travaux</v-toolbar-title>
                        <v-divider
                            class="mx-4"
                            inset
                            vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <store-seller-job-dialog :seller_id="seller_id" />
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
                                <v-list-item v-if="item.deleted_at == null" link @click="destory(item.id)">
                                    <v-list-item-icon><v-icon color="red">mdi-delete</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Supprimer</v-list-item-title></v-list-item-content>
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
import StoreSellerJobDialog from "../dialog/Seller/StoreSellerJobDialog"
export default {
    components: {StoreSellerJobDialog},
    props : ['jobs'],
    data : ()=>({
        data : undefined,
        seller_id : window.location.pathname.split('/').pop(),
        search : null,
        headers: [
            {
                text: 'Description',
                align: 'start',
                sortable: true,
                value: 'job',
            },
            { text: 'Marque', value: 'sign.name' },
            { text: 'Type', value: 'type.name' },
            { text: 'actions', value: 'actions', sortable: false },
        ],
    }),
    methods : {
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get(`/api/sellers/jobs/${this.seller_id}`)
                    .then(e=>{
                        this.data = e.data.data
                    })
                    .catch(err =>{
                        if(err.response.status == 404)
                        {
                            this.$router.push('/home/sellers')
                        }
                        console.log(err)
                    })
            })
        }
    },
    mounted() {
        this.init()
    }
}
</script>
