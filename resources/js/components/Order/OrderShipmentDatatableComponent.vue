<template>
    <div class="order-shipment-data-table">
        <v-container fluid>
            {{data}}
            <v-btn color="primary">
                <router-link style="text-decoration: none;color: white;" to="/home/orders"><v-icon>mdi-subdirectory-arrow-left</v-icon> Retour </router-link>
            </v-btn>
            <v-data-table
                :headers="headers"
                :items="data == undefined ? data2 : data"
                :search="search"
                sort-by="created_at"
                class="elevation-1 mt-3"
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Livraison</v-toolbar-title>
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
export default {
    props : ['data'],
    data : ()=>({
        data2 : undefined,
        search : null,
        user_order_id : window.location.pathname.split('/').pop(),
        headers: [
            {
                text: 'Statu',
                align: 'start',
                sortable: true,
                value: 'event',
            },
            { text: 'Créé à', value: 'created_at' },
        ],
    }),
    methods : {
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get(`/api/orders/events/${this.user_order_id}`)
                    .then(e =>{
                        this.data2 = e.data.data
                    }).catch(err => {
                    this.$router.push('/home/orders')
                })
            })
        }
    },
    mounted() {
        this.init()
    }
}
</script>
