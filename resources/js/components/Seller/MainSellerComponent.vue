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
                                <v-list-item link @click="fetchSuggestions(item.request.suggestions,item.id)">
                                    <v-list-item-icon><v-icon color="primary">mdi-chart-box</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Disponible</v-list-item-title></v-list-item-content>
                                </v-list-item>
                                <v-list-item link @click="fetchImages(item.request.images)">
                                    <v-list-item-icon><v-icon color="primary">mdi-folder-multiple-image</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Images</v-list-item-title></v-list-item-content>
                                </v-list-item>
                                <v-list-item link @click="destroy(item.id)">
                                    <v-list-item-icon><v-icon color="red">mdi-trash-can</v-icon></v-list-item-icon>
                                    <v-list-item-content><v-list-item-title>Indisponible</v-list-item-title></v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-menu>
                </template>

                <template v-slot:item.request.informations="{ item }">
                    <ol v-for="(item,index) in item.request.informations" :key="index">
                        <li>
                            <strong>Detail {{index + 1}}</strong>
                            <ul>
                                <li>Pièce : {{ parse(item.value).piece }}</li>
                                <li>Marque : {{ parse(item.value).mark }}</li>
                                <li>Quantité : {{ parse(item.value).qt }}</li>
                                <li>Dimenssion : {{ parse(parse(item.value).details).dimension }} </li>
                                <li v-if="parse(parse(item.value).details).left">Partie Gauche</li>
                                <li v-if="parse(parse(item.value).details).right">Partie droite</li>
                                <li v-if="parse(parse(item.value).details).front">Partie avant</li>
                                <li v-if="parse(parse(item.value).details).back">Partie arrière</li>
                            </ul>
                        </li>
                    </ol>
                </template>

                <template v-slot:item.request.vehicle="{ item }">
                            <ul>
                                <li>Marque : {{ item.request.vehicle.sign.name }} </li>
                                <li>Modèle : {{ item.request.vehicle.model }}</li>
                                <li>Année : {{ item.request.vehicle.year }} </li>
                                <li>motorisation : {{ item.request.vehicle.motorization }}</li>
                                <li>numéro de châssis : {{ item.request.vehicle.chassis_number }}</li>
                            </ul>
                </template>

                <template v-slot:no-data>
                    <v-btn
                        color="primary">
                        Reset
                    </v-btn>
                </template>
            </v-data-table>
        </v-container>
        <request-images-dialog @close="close4" v-if="dialog2" :dialog="dialog2" :images="images" />
        <decline-request-dialog @close1="close3" @close="close2" :id="seller_request_id" :dialog="dialog1" />
        <suggestions-request-dialog @close="close1" :suggestions="suggestions" :dialog="dialog" :seller_request_id="seller_request_id" />
    </div>
</template>

<script>
import BreadCrumbsComponent from "../BreadCrumbsComponent"
import DeclineRequestDialog from "../dialog/requests/DeclineRequestDialog"
import SuggestionsRequestDialog from "../dialog/requests/SuggestionsRequestDialog";
import RequestImagesDialog from "../dialog/requests/RequestImagesDialog";
export default {
    components: {RequestImagesDialog, SuggestionsRequestDialog, DeclineRequestDialog, BreadCrumbsComponent},
    data : ()=>({
        sellers : [],
        loading : true,
        search : null,
        headers: [
            {
                text: 'Type',
                align: 'start',
                sortable: true,
                value: 'request.type.name'
            },
            { text: 'Détails', value: 'request.informations' },
            { text: 'Véhicule', value: 'request.vehicle' },
            { text: 'Créé à', value: 'request.created_at' },
            { text: 'actions', value: 'actions', sortable: false },
        ],
        suggestions : [],
        seller_request_id : null,
        dialog : false,
        dialog1 : false,
        dialog2 : false,
        images : [],
    }),
    methods : {
        parse(data)
        {
            return JSON.parse(data)
        },
        reset()
        {
            this.init()
        },
        fetchImages(images)
        {
            this.images = images
            this.dialog2 = true
        },
        fetchSuggestions(data,seller_request_id)
        {
            this.suggestions = data
            this.seller_request_id = seller_request_id
            this.dialog = true
        },
        destroy(id)
        {
           this.seller_request_id = id
            this.dialog1 = true
        },
        close1()
        {
            this.suggestions = []
            this.seller_request_id = null
            this.dialog = false
        },
        close2()
        {
            this.seller_request_id = null
            this.dialog1 = false
        },
        close3(id)
        {
            let seller_request_id = id
           this.sellers = this.sellers.filter((seller)=>{
                return seller.id !== seller_request_id
            },seller_request_id)
            this.dialog1 = false
            this.seller_request_id = null
        },
        close4()
        {
            this.images = []
            this.dialog2 = false
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
