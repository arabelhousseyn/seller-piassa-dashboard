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
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        label="Nom"
                                        v-model="data.fullName"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        label="Téléphone"
                                        v-model="data.phone"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-select placeholder="Types" :items="items" v-model="selectedType"></v-select>
                                    <v-chip color="primary">{{data.type}}</v-chip>
                                </v-col>

                                <v-alert v-if="hasError" border="right" colored-border type="error" elevation="2">
                                    <ul>
                                        <li v-for="(error,index) in errors" :key="index"><span>{{error}}</span></li>
                                    </ul>
                                </v-alert>

                                <v-col cols="12">
                                    <v-btn type="submit" color="success"><v-icon>mdi-check</v-icon> </v-btn>
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
        selectedType : null,
        provinces : [],
        data2 : {
            phone : null,
            fullName : null,
            type : null,
        },
        items : ['admin','agent'],
        hasError : false,
        errors : []
    }),
    methods : {
        close()
        {
            this.$emit('close')
        },
        update()
        {
            this.data2.phone = this.data.phone
            this.data2.fullName = this.data.fullName
            if(this.selectedType == null)
            {
                this.data2.type = this.data.type
            }else{
                this.data2.type = this.selectedType
            }

            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.put(`/api/admins/${this.data.id}`,this.data2).then(e=>{
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
                    }
                })
            })

        }
    }
}
</script>
