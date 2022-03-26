<template>
    <div class="users-data-table">
        <v-container fluid>
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
                        <v-toolbar-title>Achats</v-toolbar-title>
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
export default {
    props : ['data'],
    data : ()=>({
        data2 : undefined,
        search : null,
        user_order_id : window.location.pathname.split('/').pop(),
        headers: [
            {
                text: 'Marque',
                align: 'start',
                sortable: true,
                value: 'item.mark',
            },
            { text: 'Prix', value: 'item.price' },
            { text: 'disponible à', value: 'item.available_at' },
        ],
    }),
    methods : {
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get(`/api/orders/items/${this.user_order_id}`)
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
