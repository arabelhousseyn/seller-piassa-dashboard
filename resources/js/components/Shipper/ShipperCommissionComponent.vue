<template>
    <div v-if="this.data !== undefined || this.data1 !== undefined" class="shipper-commissions">
        <v-container fluid>
            <v-btn color="primary">
                <router-link style="text-decoration: none;color: white;" to="/home/shippers"><v-icon>mdi-subdirectory-arrow-left</v-icon> Retour </router-link>
            </v-btn>
            <v-data-table
                :headers="headers"
                :items="(data == undefined) ? data1 : data"
                :search="search"
                sort-by="[created_at]"
                :sort-desc="[true]"
                class="elevation-1 mt-3"
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Commissions</v-toolbar-title>
                        <v-divider
                            class="mx-4"
                            inset
                            vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
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
                    <v-btn @click="openMap(item.commission.start_coordination,item.commission.end_coordination)" text color="primary"><v-icon>mdi-map-marker</v-icon></v-btn>
                </template>

                <template v-slot:no-data>
                    <v-btn
                        color="primary">
                        Reset
                    </v-btn>
                </template>
            </v-data-table>
        </v-container>
        <delivery-maps-dialog v-if="dialog" @close="close" :lat="lat" :long="long" :dialog="dialog"  />
    </div>
</template>

<script>
import DeliveryMapsDialog from "../dialog/Shipper/DeliveryMapsDialog";
export default {
    components: {DeliveryMapsDialog},
    props : ['data'],
    data : ()=>({
        data1 : undefined,
        search : null,
        shipper_id : window.location.pathname.split('/').pop(),
        lat : null,
        long : null,
        dialog : false,
        headers: [
            {
                text: 'Ref commande',
                value: 'commission.user_order.order.ref',
                align: 'start',
                sortable: true,
            },
            {text: 'Commission', value: 'commission.amount'},
            { text: 'Date de l\'opération', value: 'commission.updated_at' },
            { text: 'Map', value: 'actions', sortable: false },
        ],
    }),
    methods : {
        close()
        {
          this.dialog = false
          this.lat = null
          this.long = null
        },
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get(`/api/shippers/comissions/${this.shipper_id}`)
                    .then(e=>{
                        this.data1 = e.data.data
                    })
                    .catch(err =>{
                        if(err.response.status == 404)
                        {
                            this.$router.push('/home/shippers')
                        }
                        console.log(err)
                    })
            })
        },
        openMap(start,end)
        {
            this.dialog = true
            this.lat = start
            this.long = end
        }
    },
    mounted() {
        this.init()
    }
}
</script>
