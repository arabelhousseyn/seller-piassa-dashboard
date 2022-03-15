<template>
    <div class="store-seller-job-dialog">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-plus</v-icon> Ajouter
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Ajouter</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <form @submit.prevent="store" method="post">
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        label="Description de l'emploi*"
                                        v-model="data.job"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-select @change="check" :items="items" placeholder="Marques" v-model="selectedSign"></v-select>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-select @change="check" :items="items2" placeholder="Types" v-model="selectedType"></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn type="submit" :disabled="disable" color="primary"><v-icon>mdi-check</v-icon></v-btn>
                                </v-col>
                            </v-row>
                        </form>
                    </v-container>
                    <small>*Indique le champ obligatoire</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Fermer
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    props : ['seller_id'],
    data : ()=>({
        dialog : false,
        selectedSign : null,
        selectedType : null,
        data : {
            job : null,
            sign_id : null,
            type_id : null,
            seller_id : null,
        },
        signs : [],
        types : [],
        items : [],
        items2 : [],
        disable : true,
    }),
    methods : {
        store()
        {
            this.data.seller_id = this.seller_id
        },
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get(`/api/signs/all`)
                    .then(e=>{
                        this.signs = e.data.data
                        for (const sign of this.signs) {
                            this.items.push(sign.name)
                        }
                    })
                    .catch(err =>{
                        if(err.response.status == 404)
                        {
                            this.$router.push('/home/sellers')
                        }
                        console.log(err)
                    })
            })

            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get(`/api/types/all`)
                    .then(e=>{

                        this.types = e.data.data
                        for (const type of this.types) {
                            this.items2.push(type.name)
                        }
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
        check()
        {
            this.disable = (this.selectedSign == null || this.selectedType == null || this.data.job == null) ? true : false
        }
    },
    mounted() {
        this.init()
    }
}
</script>
