<template>
    <div class="update-shipper-dialog">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
        >
            <v-card>
                <v-card-title>
                    <span class="text-h5">Modification</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <form @submit.prevent="update" method="put">
                            <v-row>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        label="Marque"
                                        v-model="data.name"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
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
                                    <v-btn type="submit" color="success"><v-icon v-if="!progress">mdi-check</v-icon> <v-progress-circular v-else indeterminate color="white"></v-progress-circular> </v-btn>
                                </v-col>
                            </v-row>
                        </form>
                    </v-container>
                    <v-divider></v-divider>
                        <v-file-input
                            accept="image/png, image/jpeg, image/jpg"
                            placeholder="Logo"
                            prepend-icon="mdi-camera"
                            label="Logo"
                            @change="logo"
                        ></v-file-input>

                    <v-alert v-if="hasError1" border="right" colored-border type="error" elevation="2">
                        <ul>
                            <li v-for="(error,index) in errors1" :key="index"><span>{{error}}</span></li>
                        </ul>
                    </v-alert>

                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
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
    props : ['data','dialog'],
    data : ()=>({
        data2 : {
            name : null,
            prefix : null,
        },
        hasError : false,
        errors : [],
        hasError1 : false,
        errors1 : [],
        progress : false,
    }),
    methods : {
        close()
        {
            this.$emit('close')
        },
        update()
        {
            this.progress = true
            this.data2.name = this.data.name
            this.data2.prefix = this.data.prefix
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.put(`/api/signs/${this.data.id}`,this.data2).then(e=>{
                    if(e.status == 204)
                    {
                        this.$toast.open({
                            message : "Opération effectué",
                            type : 'success',
                        })
                        window.location.reload()
                    }
                }).catch(err =>{
                    let errors = Object.values(err.response.data.errors)
                    for (const error of errors) {
                        this.errors.push(error[0])
                        this.hasError = true
                        this.progress = false
                    }
                })
            })

        },
        logo(e)
        {
            this.errors1 = []
            this.hasError1 = false
            let data = new FormData
            data.append('sign_id',this.data.id)
            data.append('logo',e)

            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post(`/api/signs/change-sign-logo`,data).then(e=>{
                    if(e.status == 204)
                    {
                        this.$toast.open({
                            message : "Opération effectué",
                            type : 'success',
                        })
                        window.location.reload()
                    }
                }).catch(err =>{
                    let errors = Object.values(err.response.data.errors)
                    for (const error of errors) {
                        this.errors1.push(error[0])
                        this.hasError1 = true
                    }
                })
            })

        }
    }
}
</script>
