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
            </v-container>
        </div>
    </div>
</template>
<script>
export default {
    props :['data'],
    data : ()=>({
        user_id : window.location.pathname.split('/').pop(),
        data2 : undefined,
        search : null,
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
      }
    },
    mounted() {
        if(this.data == undefined)
        {
            this.init()
        }
    }
}
</script>
