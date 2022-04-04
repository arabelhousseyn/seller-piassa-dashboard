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
                    <span class="text-h5">Créer un Administrateurs</span>
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
                                        label="Nom complet*"
                                        v-model="data.fullName"
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
                                    <v-select @change="check" v-model="selectedType" :items="items" placeholder="Types"></v-select>
                                </v-col>

                                <v-alert v-if="hasError" border="right" colored-border type="error" elevation="2">
                                    <ul>
                                        <li v-for="(error,index) in errors" :key="index"><span>{{error}}</span></li>
                                    </ul>
                                </v-alert>
                                <v-col cols="12">
                                    <v-btn type="submit" :disabled="disabled" color="primary"><v-icon v-if="!progress">mdi-check</v-icon> <v-progress-circular v-else indeterminate color="white"></v-progress-circular></v-btn>
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
        selectedType : null,
        data : {
            phone : null,
            fullName : null,
            type : null,
        },
        items : ['admin','agent'],
        hasError : false,
        errors : [],
        disabled : true,
        progress : false,
    }),
    methods : {
        check()
        {
            this.hasError = false
            this.errors = []
            this.disabled = (this.data.phone == null || this.data.fullName == null || this.selectedType == null) ? true : false

        },
        store()
        {
            this.progress = true
            this.disabled = true
            this.data.type = this.selectedType
            console.log(this.data)

            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post('/api/admins',this.data).then(e=>{
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
                        this.progress = false
                        this.disabled = false
                    }
                })
            })
        }
    }
}
</script>
