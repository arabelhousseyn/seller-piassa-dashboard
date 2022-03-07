<template>
    <div class="user-commercial-info">
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
                    Open Dialog
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Document</span>
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
                                        label="Registre commerce"
                                        v-model="commercial_info.commercial_registration"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        label="Nif"
                                        v-model="commercial_info.nif"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        label="Numero AR"
                                        v-model="commercial_info.num_ar"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        label="Nom entreprise"
                                        v-model="commercial_info.name_company"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                        label="Nom contact"
                                        v-model="commercial_info.contact_name"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn type="submit" color="success"><v-icon>mdi-pencil</v-icon></v-btn>
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
    props : ['dialog','commercial_info'],
    methods : {
        update()
        {

        },
        close()
        {
            this.$emit('close5')
        }
    }
}
</script>
