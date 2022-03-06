<template>
    <div class="update_user">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
        >
            <v-card>
                <v-card-title>
                    <span class="text-h5">User Profile</span>
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
                                        required
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
                                        required
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
                                        required
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

                                <v-col cols="12">
                                    <v-btn type="submit" color="success"><v-icon>mdi-pencil</v-icon> </v-btn>
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
        items : ['Homme','Femme'],
        items2 : ['Particulier','Corporate','Atelier'],
        items3 : []
    }),
    methods : {
        close()
        {
            this.$emit('close3')
        },
        update()
        {

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
