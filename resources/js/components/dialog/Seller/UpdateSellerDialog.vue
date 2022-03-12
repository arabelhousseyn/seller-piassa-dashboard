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
                                        v-model="data.profile.first_name"
                                    ></v-text-field>
                                </v-col>


                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        label="Prénom"
                                        v-model="data.profile.last_name"
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
                                    <v-text-field
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
                                        label="Nom commercial"
                                        v-model="data.profile.commercial_name"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                <v-select placeholder="Willayas" :items="items" v-model="selectedProvince"></v-select>
                                    <v-chip color="primary">{{data.profile.province.name}}</v-chip>
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
        selectedProvince : null,
        provinces : [],
        data2 : {
            phone : null,
            province_id : null,
            first_name : null,
            last_name : null,
            commercial_name : null,
        },
        items : [],
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
            this.data2.email = this.data.email
            this.data2.first_name = this.data.profile.first_name
            this.data2.last_name = this.data.profile.last_name
            this.data2.commercial_name = this.data.profile.commercial_name
            if(this.selectedProvince !== null)
            {
                for (const province of this.provinces) {
                    if(province.name == this.selectedProvince)
                    {
                        this.data2.province_id = province.id
                        break;
                    }
                }
            }else{
                this.data2.province_id = this.data.profile.province.id;
            }

            console.log(this.data2)


            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.put(`/api/sellers/${this.data.id}`,this.data2).then(e=>{
                    console.log(e)
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
    },
    mounted() {
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
    }
}
</script>
