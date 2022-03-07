<template>
    <div class="update-vehicle-user">
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
                                        label="Modèle"
                                        v-model="data.model"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        label="Année"
                                        v-model="data.year"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        label="Motorisation"
                                        v-model="data.motorization"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        label="Numéro de châssis"
                                        v-model="data.chassis_number"
                                    ></v-text-field>
                                </v-col>


                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-select v-model="selectedSign" :items="items"></v-select>

                                    <v-chip color="primary">{{data.sign.name}}</v-chip>
                                </v-col>

                                <v-col cols="12"> <v-btn type="submit" color="success"><v-icon>mdi-pencil</v-icon></v-btn> </v-col>
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
    props : ['dialog','data'],
    data : () =>({
        selectedSign : null,
        data2 : {
            model : null,
            year : null,
            motorization : null,
            chassis_number : null,
            sign : null,
        },
        items : [],
        signs : []
    }),
    methods : {
        close()
        {
            this.$emit('close1')
        },
        update()
        {
            this.data2.model = this.data.model
            this.data2.year = this.data.year
            this.data2.motorization = this.data.motorization
            this.data2.chassis_number = this.data.chassis_number
            if(this.selectedSign == null)
            {
                this.data2.sign = this.data.sign.id
            }else{
                for (const sign of this.signs) {
                    if(sign.name == this.selectedSign)
                    {
                        this.data2.sign = sign.id
                        break;
                    }
                }
            }



        },
        fetchSigns()
        {
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.get('/api/signs/all')
                .then(e=>{
                    this.signs = e.data.data
                    for (const value of e.data.data) {
                        this.items.push(value.name)
                    }
                })
            })
        }
    },
    mounted() {
        this.fetchSigns()
    }
}
</script>
