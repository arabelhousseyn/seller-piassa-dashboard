<template>
    <div class="security">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
        >
            <v-card>
                <v-card-title>
                    <span class="text-h5">Modification mote de passe</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <form @submit.prevent="changePassword" method="put">
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        label="Mote de passe*"
                                        v-model="data.password"
                                        type="password"
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
                                        label="Confirmation mote de passe*"
                                        v-model="data.password_confirmation"
                                        type="password"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-alert v-if="hasError" border="right" colored-border type="error" elevation="2">
                                    <ul>
                                        <li v-for="(error,index) in errors" :key="index"><span>{{error}}</span></li>
                                    </ul>
                                </v-alert>

                                <v-col cols="12">
                                    <v-btn :disabled="disable" type="submit" color="success"><v-icon v-if="!progress">mdi-check</v-icon> <v-progress-circular v-else indeterminate color="white"></v-progress-circular> </v-btn>
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
    props :['dialog','user_id'],
    data : () =>({
       data : {
           password : null,
           password_confirmation : null,
       },
        errors : [],
        hasError : false,
        disable : true,
        progress : false,
    }),
    methods : {
        close()
        {
            this.$emit('close4')
        },
        changePassword()
        {
            this.progress = true
            this.disable = true
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.put(`/api/users/change-password/${this.user_id}`,this.data).then(e=>{
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
                        this.disable = false
                    }
                })
            })
        },
        check()
        {
            this.hasError = false
            this.errors = []
            this.disable = (this.data.password == null || this.data.password_confirmation == null) ? true : false
        }
    }
}
</script>
