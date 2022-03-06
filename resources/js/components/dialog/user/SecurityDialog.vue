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
                        <form @submit.prevent="changePassword" method="post">
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        label="Mote de passe*"
                                        v-model="data.password"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        label="Confirmation mote de passe*"
                                        v-model="data.password_confirmation"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-btn type="submit" color="success"><v-icon>mdi-pencil</v-icon> </v-btn>
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
           user_id : null,
           password : null,
           password_confirmation : null,
       }
    }),
    methods : {
        close()
        {
            this.$emit('close4')
        },
        changePassword()
        {

        }
    }
}
</script>
