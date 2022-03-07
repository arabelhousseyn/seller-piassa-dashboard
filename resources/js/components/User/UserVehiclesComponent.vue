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
                               <create-vehicle-dialog />
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
            <delete-vehicle-dialog @close="close" :dialog="dialog" :id="id" />
            <update-vehicle-dialog v-if="dialog1" @close1="close1" :dialog="dialog1" :data="vehicle" />
        </div>
    </div>
</template>

<script>
import DeleteVehicleDialog from "../dialog/Vehicle/DeleteVehicleDialog";
import UpdateVehicleDialog from "../dialog/Vehicle/UpdateVehicleDialog";
import CreateVehicleDialog from "../dialog/Vehicle/CreateVehicleDialog";
export default {
    components: {CreateVehicleDialog, UpdateVehicleDialog, DeleteVehicleDialog},
    props : ['data'],
    data : ()=>({
       user_id : window.location.pathname.split('/').pop(),
        data2 : undefined,
        search : null,
        dialog : false,
        dialog1 : false,
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
            { text: 'Marque', value: 'sign.name' },
            { text: 'Créé à', value: 'created_at' },
            { text: 'Statu', value: 'deleted_at' },
            { text: 'actions', value: 'actions', sortable: false },
        ],
        id : null,
        vehicle : []
    }),
    methods : {
        reset()
        {
            this.init()
        },

        close()
        {
          this.dialog = false
          this.id = null
        },
        close1()
        {
          this.dialog1 = false
          this.vehicle = []
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
        },
        destroy(id)
        {
            this.id= id
            this.dialog = true
        },
        update(data)
        {
            this.dialog1 = true
            this.vehicle = data
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
