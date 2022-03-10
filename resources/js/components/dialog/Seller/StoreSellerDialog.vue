<template>
    <div class="store-seller-dialog">
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
                    <span class="text-h5">Créer un vendeur</span>
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
                                        v-model="data.last_name"
                                        label="Prénom*"
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
                                        v-model="data.phone"
                                        label="Téléphone*"
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
                                        v-model="data.email"
                                        type="email"
                                        label="Email*"
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
                                        v-model="data.password"
                                        type="password"
                                        label="Mote de passe*"
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
                                        v-model="data.password_confirmation"
                                        type="password"
                                        label="Confirmation mote de passe*"
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
                                        v-model="data.commercial_name"
                                        label="Nom commercial*"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-select @change="check" v-model="selectedProvince" :items="items" placeholder="Willayas"></v-select>
                                </v-col>

                                <v-alert v-if="hasError" border="right" colored-border type="error" elevation="2">
                                    <ul>
                                        <li v-for="(error,index) in errors" :key="index"><span>{{error}}</span></li>
                                    </ul>
                                </v-alert>
                                <v-col cols="12">
                                    <v-btn type="submit" :disabled="disabled" color="primary"><v-icon>mdi-check</v-icon></v-btn>
                                </v-col>
                            </v-row>
                        </form>
                    </v-container>
                    <small>*indique le champ obligatoire</small>
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
            email : null,
            first_name : null,
            last_name : null,
            province_id : null,
            commercial_name : null,
        },
        items : [],
        provinces : [],
        hasError : false,
        errors : [],
        disabled : true,
    }),
    methods : {
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
           this.disabled = (this.data.phone == null || this.data.email == null || this.data.commercial_name == null
            || this.data.first_name == null || this.data.last_name == null || this.selectedProvince == null) ? true : false

        },
        store()
        {

        }
    },
    mounted() {
        this.init()
    }
}
</script>
