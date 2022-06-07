<template>
    <div class="update-profile-component">
        <v-card elevation="0">
            <v-card elevation="0">
                <v-card-title>Sécurité</v-card-title>
                <v-card-text>
                    <form @submit.prevent="updatePassword" method="put">
                        <v-row>
                            <v-col
                                cols="12"
                                md="6"
                                lg="6"
                            >
                                <v-text-field
                                    type="password"
                                    @keydown="check"
                                    v-model="infos.old_password"
                                    label="Ancien Mote de passe *"
                                    dense
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                                lg="6"
                            >
                                <v-text-field
                                    type="password"
                                    @keydown="check"
                                    v-model="infos.password"
                                    label="Mote de passe *"
                                    dense
                                ></v-text-field>
                            </v-col>

                            <v-col
                                cols="12"
                                md="6"
                                lg="6"
                            >
                                <v-text-field
                                    type="password"
                                    @keydown="check"
                                    v-model="infos.password_confirmation"
                                    label="Confirmation mote de passe *"
                                    dense
                                ></v-text-field>
                            </v-col>

                            <v-alert v-if="hasError1" border="right" colored-border type="error" elevation="2">
                                <ul>
                                    <li v-for="(error,index) in errors1" :key="index"><span>{{error}}</span></li>
                                </ul>
                            </v-alert>

                            <v-col cols="12">
                                <v-btn :disabled="disable1" type="submit" color="green"><v-icon v-if="!progress1" color="white">mdi-check</v-icon> <v-progress-circular v-else indeterminate color="white"></v-progress-circular></v-btn>
                            </v-col>
                        </v-row>
                    </form>
                </v-card-text>
            </v-card>
        </v-card>
    </div>
</template>

<script>
export default {
    data : () => ({
        data : [],
        disable : false,
        disable1 : true,
        progress : false,
        progress1 : false,
        infos : {
            old_password : null,
            password : null,
            password_confirmation : null,
        },
        hasError1 : false,
        errors1 : [],
        hasError : false,
        errors : [],
    }),
    methods : {
        updatePassword()
        {
            this.disable1 = true
            this.progress1 = true
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.put('/api/seller/change-password',this.infos).then(e=>{
                    this.$toast.open({
                        message : "Opération effectué",
                        type : 'success',
                    })
                    this.$store.commit('SET_AUTH',false)
                    this.$store.commit('SET_USER',[])
                    localStorage.clear()
                    this.$router.push('/')
                }).catch(err =>{
                    let errors = Object.values(err.response.data.errors)
                    for (const error of errors) {
                        this.errors1.push(error[0])
                        this.hasError1 = true
                        this.disable1 = false
                        this.progress1 = false
                    }
                })
            })
        },
        check()
        {
            this.disable1 = (this.infos.old_password == null || this.infos.password == null ||
                this.infos.password_confirmation == null) ? true : false
        }
    },
    mounted() {
        this.data = this.$store.getters.GET_USER
    }
}
</script>
