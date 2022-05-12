<template>
    <div class="update_user">
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
                                >
                                    <v-textarea
                                        label="Description"
                                        v-model="data.job"
                                    ></v-textarea>
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
        selectedProvince : null,
        provinces : [],
        data2 : {
            job : null,
        },
        items : [],
        hasError : false,
        errors : [],
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
            this.data2.job = this.data.job

            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.put(`/api/sellers/update_job_description/${this.data.id}`,this.data2).then(e=>{
                    console.log(e)
                    if(e.status == 204)
                    {
                        this.$toast.open({
                            message : "Opération effectué",
                            type : 'success',
                        })
                        this.progress = false
                        this.$emit('close')
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

        }
    }
}
</script>
