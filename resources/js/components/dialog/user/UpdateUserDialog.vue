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
                                        v-model="data.profile.full_name"
                                        label="Nom complete"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        v-model="data.email"
                                        label="Email"

                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        v-model="data.phone"
                                        label="Telephone"

                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-select v-model="selectedProvince" :items="items3" placeholder="Willyas"></v-select>
                                    <v-chip color="primary">{{ data.profile.province.name }}</v-chip>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-select v-model="selectedGender" :items="items" placeholder="Sexe"></v-select>
                                    <v-chip color="primary" v-if="data.profile.gender == 'M'">Homme</v-chip>
                                    <v-chip color="primary" v-if="data.profile.gender == 'W'">Femme</v-chip>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-select v-model="selectedRole" :items="items2" placeholder="Role"></v-select>
                                    <v-chip color="primary" v-if="data.roles[0].name == 'P'">Particulier</v-chip>
                                    <v-chip color="primary" v-if="data.roles[0].name == 'C'">Corporate</v-chip>
                                    <v-chip color="primary" v-if="data.roles[0].name == 'A'">Atelier</v-chip>
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
        selectedRole : null,
        selectedGender : null,
        selectedProvince : null,
        provinces : [],
        data2 : {
            phone : null,
            province_id : null,
            full_name : null,
            gender : null,
            role : null,
        },
        items : ['Homme','Femme'],
        items2 : ['Particulier','Corporate','Atelier'],
        items3 : [],
        hasError : false,
        errors : [],
        progress : false,
    }),
    methods : {
        close()
        {
            this.$emit('close3')
        },
        update()
        {
            this.progress = true
            this.data2.full_name = this.data.profile.full_name
            this.data2.phone = this.data.phone

            if(this.selectedGender !== null)
            {
                if(this.selectedGender == "Homme")
                {
                    this.data2.gender = 'M'
                }else if(this.selectedGender == "Femme")
                {
                    this.data2.gender = 'W'
                }
            }else{
                this.data2.gender = this.data.profile.gender;
            }

            if(this.selectedRole !== null)
            {
                if(this.selectedRole == 'Particulier')
                {
                    this.data2.role = 'P';
                }else if(this.selectedRole == 'Corporate')
                {
                    this.data2.role = 'C';
                }else if(this.selectedRole == 'Atelier')
                {
                    this.data2.role = 'A';
                }
            }else{
                this.data2.role = this.data.roles[0].name;
            }

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

            this.data2.email = this.data.email


            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.put(`/api/users/${this.data.id}`,this.data2).then(e=>{
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

        }
    },
    mounted() {
        axios.get('/sanctum/csrf-cookie').then(res =>{
            axios.get('/api/provinces').then(e=>{
                this.provinces = e.data
                for (const province of e.data) {
                    this.items3.push(province.name)
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
