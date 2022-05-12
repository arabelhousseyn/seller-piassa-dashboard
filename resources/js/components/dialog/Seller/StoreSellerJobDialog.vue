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
                                >
                                    <v-text-field
                                        counter
                                        maxlength="255"
                                        @keydown="check"
                                        label="Description de l'emploi*"
                                        v-model="data.job"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-select @change="check" :items="items" placeholder="Marques" multiple outlined dense v-model="selectedSigns"></v-select>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-select @change="check" :items="items2" placeholder="Types" multiple outlined dense v-model="selectedTypes"></v-select>
                                </v-col>

                                <v-alert v-if="hasError" border="right" colored-border type="error" elevation="2">
                                    <ul>
                                        <li v-for="(error,index) in errors" :key="index"><span>{{error}}</span></li>
                                    </ul>
                                </v-alert>

                                <v-col cols="12">
                                    <v-btn type="submit" :disabled="disable" color="primary"><v-icon v-if="!progress">mdi-check</v-icon> <v-progress-circular v-else indeterminate color="white"></v-progress-circular> </v-btn>
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
        selectedSigns : [],
        selectedTypes : [],
        data : {
            job : null,
            signs : [],
            types : [],
            seller_id : null,
        },
        signs : [],
        types : [],
        items : [],
        items2 : [],
        disable : true,
        hasError : false,
        errors : [],
        progress : false,
    }),
    methods : {
        store()
        {
            this.disable = true
            this.progress = true
            this.data.seller_id = this.seller_id

            // store the signs id's to the array of signs into the data object
            for (const sign of this.selectedSigns) {
                for (let i= 0;i<this.signs.length;i++)
                {
                    if(sign == this.signs[i].name)
                    {
                        this.data.signs.push({
                            sign_id : this.signs[i].id
                        })
                    }
                }
            }

            // store the types id's to the array of types into the dara object
            for (const type of this.selectedTypes) {
                for (let i= 0;i<this.types.length;i++)
                {
                    if(type == this.types[i].name)
                    {
                        this.data.types.push({
                            type_id : this.types[i].id
                        })
                    }
                }
            }

            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post('/api/sellers/jobs/store',this.data).then(e=>{
                    this.$toast.open({
                        message : "Opération effectué",
                        type : 'success',
                    })
                    window.location.reload()
                }).catch(err =>{
                    let errors = Object.values(err.response.data.errors)
                    for (const error of errors) {
                        this.errors.push(error[0])
                        this.hasError = true
                        this.disable = false
                        this.progress = false
                    }
                })
            })
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
            this.disable = (this.selectedSigns.length == 0 || this.selectedTypes.length == 0 || this.data.job == null) ? true : false
        }
    },
    mounted() {
        this.init()
    }
}
</script>
