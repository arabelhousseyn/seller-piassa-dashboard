<template>
    <div class="user-order">
        <div v-if="data2 !== undefined || data !== undefined">
            <v-container fluid>
                <v-btn color="primary">
                    <router-link style="text-decoration: none;color: white;" to="/home/users"><v-icon>mdi-subdirectory-arrow-left</v-icon> Retour </router-link>
                </v-btn>
                <v-data-table
                    :headers="headers"
                    :items="(data == undefined) ? data2 : data"
                    :search="search"
                    sort-by="[created_at]"
                    :sort-desc="[true]"
                    class="elevation-1 mt-3"
                >
                    <template v-slot:top>
                        <v-toolbar
                            flat
                        >
                            <v-toolbar-title>Commandes</v-toolbar-title>
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
                                    <v-list-item v-if="item.confirmed_by_administrator_at == null" link @click="confirm(item.id)">
                                        <v-list-item-icon><v-icon color="green">mdi-check</v-icon></v-list-item-icon>
                                        <v-list-item-content><v-list-item-title>Confirmer</v-list-item-title></v-list-item-content>
                                    </v-list-item>

                                    <v-list-item v-if="item.deleted_at == null" link @click="destroy(item.id)">
                                        <v-list-item-icon><v-icon color="red">mdi-delete</v-icon></v-list-item-icon>
                                        <v-list-item-content><v-list-item-title>Supprimer</v-list-item-title></v-list-item-content>
                                    </v-list-item>
                                    <v-list-item v-else link @click="restore(item.id)">
                                        <v-list-item-icon><v-icon color="green">mdi-restore</v-icon></v-list-item-icon>
                                        <v-list-item-content><v-list-item-title>Restaurer</v-list-item-title></v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-menu>
                    </template>

                    <template v-slot:item.invoice.path="{ item }">
                        <a v-if="item.invoice !== null" :href="item.invoice.path" target="_blank"><v-icon large>mdi-file-pdf-box</v-icon></a>
                    </template>

                    <template v-slot:item.confirmed_by_administrator_at="{ item }">
                        <v-chip dark v-if="item.confirmed_by_administrator_at == null" color="yellow">
                            En attente
                        </v-chip>
                        <v-chip dark v-else color="green">
                            Confirmé
                        </v-chip>
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
                <order-delete-dialog @close="close" :dialog="dialog" :id="selected" />
                <order-restore-dialog @close="close1" :dialog="dialog1" :id="selected" />
                <confirm-order-dialog @close="close2" :dialog="dialog2" :id="selected" />
            </v-container>
        </div>
    </div>
</template>
<script>
import OrderDeleteDialog from "../../dialog/Order/OrderDeleteDialog";
import OrderRestoreDialog from "../../dialog/Order/OrderRestoreDialog";
import ConfirmOrderDialog from "../../dialog/Order/ConfirmOrderDialog";
export default {
    components: {ConfirmOrderDialog, OrderRestoreDialog, OrderDeleteDialog},
    props :['data'],
    data : ()=>({
        user_id : window.location.pathname.split('/').pop(),
        data2 : undefined,
        search : null,
        dialog : false,
        dialog1 : false,
        dialog2 : false,
        selected : null,
        headers: [
            {
                text: 'Ref',
                align: 'start',
                sortable: true,
                value: 'ref',
            },
            { text: 'Livraison', value: 'type_delivery' },
            { text: 'Livreur', value: 'shipper_user_order.shipper.phone' },
            { text: 'Sous Total', value: 'amount' },
            { text: 'Facture', value: 'invoice.path' },
            { text: 'Créé à', value: 'created_at' },
            { text: 'Mise à jour à', value: 'updated_at' },
            { text: 'Confirmation', value: 'confirmed_by_administrator_at' },
            { text: 'Statu', value: 'deleted_at' },
            { text: 'actions', value: 'actions', sortable: false },
        ],
    }),
    methods : {
      init()
      {
          axios.get('/sanctum/csrf-cookie').then(res =>{
              axios.get(`/api/users/orders/${this.user_id}`)
                  .then(e=>{
                      this.data2 = e.data.data
                  })
                  .catch(err =>{
                      if(err.response.status == 404)
                      {
                          this.$router.push('/home/users')
                      }
                      console.log(err)
                  })
          })
      },
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
        confirm(id)
        {
            this.dialog2 = true
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
            this.selected = null
            this.dialog2 = false
        },
    },
    mounted() {
        if(this.data == undefined)
        {
            this.init()
        }
    }
}
</script>
