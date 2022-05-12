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
                        <store-seller-job-dialog v-if="data.length == 0" :seller_id="seller_id"/>

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
                                    <v-list-item-icon><v-icon color="success">mdi-pencil</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Modifier description</v-list-item-title></v-list-item-content>
                                </v-list-item>

                                <v-list-item  link @click="types(item.id)">
                                    <v-list-item-icon><v-icon color="success">mdi-square</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Types</v-list-item-title></v-list-item-content>
                                </v-list-item>

                                <v-list-item  link @click="signs(item.id)">
                                    <v-list-item-icon><v-icon color="success">mdi-square</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>marques</v-list-item-title></v-list-item-content>
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
        <delete-seller-job-dialog v-if="dialog" @close="close" :dialog="dialog" :id="seller_job_id"  />
        <seller-types-dialog v-if="dialog1" @close="close1" :dialog="dialog1" :seller_job_id="seller_job_id" />
        <seller-signs-dialog v-if="dialog2" @close="close2" :dialog="dialog2" :seller_job_id="seller_job_id" />
        <update-seller-job-description-dialog v-if="dialog3" @close="close3" :dialog="dialog3" :data="fruits" />
    </div>
</template>

<script>
import SellerTypesDialog from "../dialog/Seller/SellerTypesDialog";
import SellerSignsDialog from "../dialog/Seller/SellerSignsDialog";
import UpdateSellerJobDescriptionDialog from "../dialog/Seller/UpdateSellerJobDescriptionDialog";
import DeleteSellerJobDialog from "../dialog/Seller/DeleteSellerJobDialog";
import StoreSellerJobDialog from "../dialog/Seller/StoreSellerJobDialog";
export default {
    components: {
        StoreSellerJobDialog,
        DeleteSellerJobDialog, UpdateSellerJobDescriptionDialog, SellerSignsDialog, SellerTypesDialog},
    props : ['jobs'],
    data : ()=>({
        data : undefined,
        seller_id : window.location.pathname.split('/').pop(),
        search : null,
        dialog : false,
        headers: [
            {
                text: 'Description',
                align: 'start',
                sortable: true,
                value: 'job',
            },
            { text: 'actions', value: 'actions', sortable: false },
        ],
        seller_job_id : null,
        dialog1 : false,
        dialog2 : false,
        dialog3 : false,
        fruits : [],
    }),
    methods : {
        types(seller_job_id)
        {
            this.seller_job_id = seller_job_id
            this.dialog1 = true
        },
        signs(seller_job_id)
        {
            this.seller_job_id = seller_job_id
            this.dialog2 = true
        },
        update(data)
        {
          this.fruits = data
            this.dialog3 = true
        },
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
        },
        destory(id)
        {
            this.seller_job_id = id
            this.dialog = true
        },
        close()
        {
            this.seller_job_id = null
            this.dialog = false
        },
        close1()
        {
            this.seller_job_id = null
            this.dialog1 = false
        },
        close2()
        {
            this.seller_job_id = null
            this.dialog2 = false
        },
        close3()
        {
            this.fruits = []
            this.dialog3 = false
        }
    },
    mounted() {
        this.init()
    }
}
</script>
