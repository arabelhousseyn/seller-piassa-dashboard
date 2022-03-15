<template>
    <div class="store-shipper-dialog">
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
                                        label="Nom*"
                                        v-model="data.first_name"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        label="Prénom*"
                                        v-model="data.last_name"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        label="Téléphone*"
                                        v-model="data.phone"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        type="email"
                                        label="Email"
                                        v-model="data.email"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        type="password"
                                        label="Mote de passe*"
                                        v-model="data.password"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        type="password"
                                        label="Confirmation mote de passe*"
                                        v-model="data.password_confirmation"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-select @change="check" :items="items" v-model="selectedProvince" placeholder="Willayas"></v-select>
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
    data : ()=>({
        dialog : false,
        selectedProvince : null,
        data : {
            phone : null,
            first_name : null,
            last_name : null,
            province_id : null,
            password : null,
            password_confirmation : null,
        },
        provinces : [],
        items : [],
        disable : true,
        hasError : false,
        errors : [],
    }),
    methods : {
        store()
        {
            this.disabled = true
            for (const province of this.provinces) {
                if(province.name == this.selectedProvince)
                {
                    this.data.province_id = province.id
                    break;
                }
            }


            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post('/api/shippers',this.data).then(e=>{
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
                        this.disabled = false
                    }
                })
            })

        },

        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get('/api/provinces').then(e=>{
                    this.provinces = e.data
                    for (const province of e.data) {
                        this.items.push(province.name)
                    }
                }).catch(err =>{
                    this.$toast.open({
                        message : "ERROR",
                        type : 'error'
                    })
                })
            })
        },

        check()
        {
            this.hasError = false
            this.errors = []
            this.disable = (this.data.phone == null || this.data.first_name == null ||
            this.data.last_name == null || this.selectedProvince == null || this.data.password == null
            || this.data.password_confirmation == null) ? true : false
        }
    },
    mounted() {
        this.init()
    }
}
</script>
