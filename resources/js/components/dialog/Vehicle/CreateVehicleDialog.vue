<template>
    <div class="create-vehicle-dialog">
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
                    <span class="text-h5">Saisie véhicule</span>
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
                                        label="Modèle*"
                                        v-model="data.model"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-select @change="check" v-model="selectedSign" placeholder="Marque" :items="items"></v-select>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        label="N° châssis*"
                                        v-model="data.chassis_number"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        label="Année*"
                                        v-model="data.year"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        label="Motorisation*"
                                        v-model="data.motorization"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-alert v-if="hasError" border="right" colored-border type="error" elevation="2">
                                    <ul>
                                        <li v-for="(error,index) in errors" :key="index"><span>{{error}}</span></li>
                                    </ul>
                                </v-alert>

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
    props : ['user_id'],
    data : ()=>({
        dialog : false,
        selectedSign : null,
        data : {
            user_id : null,
            sign_id : null,
            model : null,
            chassis_number : null,
            year : null,
            motorization : null
        },
        disable : true,
        items : [],
        signs : [],
        errors : [],
        hasError : false,
    }),
    methods : {
        store()
        {
            this.disable = true
            this.data.user_id = this.user_id
            for (const sign of this.signs) {
                if(sign.name == this.selectedSign)
                {
                    this.data.sign_id = sign.id
                    break;
                }
            }

            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post('/api/vehicles',this.data)
                .then(e => {
                    if(e.status == 204)
                    {
                        this.$toast.open({
                            message : 'Opération effectué',
                            type : 'success'
                        })
                        window.location.reload()
                    }
                })
                .catch(err => {
                    let errors = Object.values(err.response.data.errors)
                    for (const error of errors) {
                        this.errors.push(error[0])
                        this.hasError = true
                        this.disable = false
                    }
                })
            })

        },
        check()
        {
            this.hasError = false
            this.errors = []
            this.disable = (this.selectedSign == null || this.data.model == null || this.data.chassis_number == null
             || this.data.year == null || this.data.motorization == null) ? true : false
        },
        fetchSigns()
        {
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.get('/api/signs/all')
                    .then(e=>{
                        this.signs = e.data.data
                        for (const value of e.data.data) {
                            this.items.push(value.name)
                        }
                    })
            })
        }
    },
    mounted() {
        this.fetchSigns()
    }
}
</script>
