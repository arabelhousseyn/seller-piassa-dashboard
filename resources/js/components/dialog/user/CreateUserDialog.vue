<template>
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
                    <span class="text-h5">Créer un utilisateur</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-form @click.prevent="create" method="post">
                        <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        label="Nom complete*"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        label="Téléphone*"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        type="email"
                                        label="Email"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" sm="6">
                                    <v-text-field
                                        label="Mote de passe*"
                                        type="password"
                                        required
                                    ></v-text-field>
                                </v-col>
                            <v-col cols="12" md="6" sm="6">
                                <v-text-field
                                    label="Confirmer mote de passe*"
                                    type="password"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6" sm="6">
                                <v-select
                                    :items="items"
                                    placeholder="Sexe*"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" md="6" sm="6">
                                <v-select
                                    :items="items2"
                                    placeholder="Willaya*"
                                ></v-select>
                            </v-col>
                                <v-col cols="12">
                                    <v-btn type="submit" color="primary"><v-icon>mdi-plus</v-icon></v-btn>
                                </v-col>
                        </v-row>
                        </v-form>
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
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>
<script>
export default {
    data: () => ({
        dialog: false,
        provinces : [],
        data  : [],
        items: ['Homme', 'Femme'],
        items2 : [],
    }),
    methods : {
        create()
        {

        }
    },
    mounted() {
        axios.get('/sanctum/csrf-cookie').then(res =>{
            axios.get('/api/provinces').then(e=>{
                this.provinces = e.data
                for (const province of e.data) {
                    this.items2.push(province.name)
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
