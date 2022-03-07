<template>
    <div class="user-vehicles-component">
        <div v-if="data2 !== undefined || data !== undefined">
            <v-container fluid>
                <v-btn color="primary">
                    <router-link style="text-decoration: none;color: white;" to="/home/users"><v-icon>mdi-subdirectory-arrow-left</v-icon> Retour </router-link>
                </v-btn>
                    <v-data-table
                        :headers="headers"
                        :items="(data == undefined) ? data2 : data"
                        :search="search"
                        sort-by="created_at"
                        class="elevation-1 mt-3"
                    >
                        <template v-slot:top>
                            <v-toolbar
                                flat
                            >
                                <v-toolbar-title>Vehicles</v-toolbar-title>
                                <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                ></v-divider>
                                <v-spacer></v-spacer>
                                <v-btn color="primary">
                                    <v-icon>mdi-plus</v-icon> Ajouter
                                </v-btn>
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
    </div>
</template>

<script>
export default {
    props : ['data'],
    data : ()=>({
       user_id : window.location.pathname.split('/').pop(),
        data2 : undefined,
        search : null,
        headers: [
            {
                text: 'Modèle',
                align: 'start',
                sortable: true,
                value: 'model',
            },
            { text: 'Année', value: 'year' },
            { text: 'Motorisation', value: 'motorization' },
            { text: 'Numéro de châssis', value: 'chassis_number' },
            { text: 'Créé à', value: 'created_at' },
            { text: 'Statu', value: 'deleted_at' },
            { text: 'actions', value: 'actions', sortable: false },
        ],
    }),
    methods : {
        reset()
        {
            this.init()
        },

        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get(`/api/users/vehicles/${this.user_id}`)
                    .then(e=>{
                        this.data2 = e.data.data
                    })
                    .catch(err =>{
                        console.log(err)
                    })
            })
        }
    },
    mounted()
    {
        if(this.data == undefined)
        {
            this.init()
        }
    }
}
</script>
