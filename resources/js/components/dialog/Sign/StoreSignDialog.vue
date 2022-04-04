<template>
    <div class="store-sign-dialog">
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
                                        label="Marque*"
                                        v-model="data.name"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-file-input
                                        accept="image/png, image/jpeg, image/jpg"
                                        placeholder="Logo"
                                        prepend-icon="mdi-camera"
                                        label="Logo"
                                        @change="logo"
                                    ></v-file-input>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        label="Préfixe"
                                        v-model="data.prefix"
                                    ></v-text-field>
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
    data : ()=>({
        dialog : false,
        data : {
            name : null,
            logo : null,
            prefix : null,
        },
        disable : true,
        hasError : false,
        errors : [],
        hasError1 : false,
        errors1 : [],
        progress : false,
    }),
    methods : {
        store()
        {
            this.disable = true
            this.progress = true
            let data = new FormData
            data.append('name',this.data.name)
            data.append('logo',this.data.logo)
            if(this.data.prefix !== null)
            {
                data.append('prefix',this.data.prefix)
            }

            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post('/api/signs',data).then(e=>{
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
        check()
        {
            this.hasError = false
            this.errors = []
            this.disable = (this.data.name == null || this.data.logo == null) ? true : false
        },
        logo(e)
        {
            this.data.logo = e
            this.check()
        }
    }
}
</script>
