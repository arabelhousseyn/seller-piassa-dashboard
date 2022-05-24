<template>
    <div class="user_profile">
        <template>
            <v-row justify="center">
                <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="600px"
                >
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Profile</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <p><span class="font-weight-bold text-h6">Nom complete : </span> <span>{{profile.full_name}}</span></p>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <p><span class="font-weight-bold text-h6">Sexe : </span> <span v-if="profile.gender =='M'">Homme</span> <span v-if="profile.gender =='W'">Femme</span></p>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <p><span class="font-weight-bold text-h6">Willaya : </span> <span>{{profile.province.name}}</span></p>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <span v-if="info !== null" class="text-h5 font-weight-bold">Document</span>
                            <v-container v-if="info !== null">
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <p><span class="font-weight-bold text-h6">Registre commerce : </span> <span>{{info.commercial_registration}}</span></p>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <p><span class="font-weight-bold text-h6">Nif : </span> <span v-if="info.nif == null ">/</span> <span>{{info.nif}}</span> </p>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <p><span class="font-weight-bold text-h6">Numero AR : </span> <span class="text-h6 font-weight-bold" v-if="info.num_ar == null ">/</span> <span>{{info.num_ar}}</span> </p>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <p><span class="font-weight-bold text-h6">Nom entreprise : </span> <span>{{info.name_company}}</span></p>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <p><span class="font-weight-bold text-h6">Nom contact : </span> <span>{{info.contact_name}}</span></p>
                                    </v-col>
                                </v-row>
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
            </v-row>
        </template>
    </div>
</template>

<script>
export default {
    props : ['dialog','profile','info'],
    methods : {
        close()
        {
            this.$emit('close2')
        }
    }
}
</script>
