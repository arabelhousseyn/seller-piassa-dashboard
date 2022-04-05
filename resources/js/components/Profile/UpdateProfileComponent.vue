<template>
    <div class="update-profile-component">
        <v-card elevation="0">
            <v-card elevation="0">
                <v-card-title>Informations globales</v-card-title>
                <v-card-text>
                    <form @submit.prevent="update" method="put">
                        <v-row>
                            <v-col
                                cols="12"
                                md="6"
                                lg="6"
                            >
                                <v-text-field
                                    v-model="data.fullName"
                                    label="Nom complet"
                                    dense
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                                lg="6"
                            >
                                <v-text-field
                                    v-model="data.phone"
                                    label="Téléphone"
                                    dense
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-btn :disabled="disable" type="submit" color="green"><v-icon color="white">mdi-check</v-icon></v-btn>
                            </v-col>
                        </v-row>
                    </form>
                </v-card-text>
            </v-card>
            <v-card elevation="0">
                <v-card-title>Sécurité</v-card-title>
                <v-card-text>
                    <form @submit.prevent="updatePassword" method="put">
                        <v-row>
                            <v-col
                                cols="12"
                                md="6"
                                lg="6"
                            >
                                <v-text-field
                                    v-model="infos.old_password"
                                    label="Ancien Mote de passe *"
                                    dense
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                                lg="6"
                            >
                                <v-text-field
                                    v-model="infos.password"
                                    label="Mote de passe *"
                                    dense
                                ></v-text-field>
                            </v-col>

                            <v-col
                                cols="12"
                                md="6"
                                lg="6"
                            >
                                <v-text-field
                                    v-model="infos.password_confirmation"
                                    label="Confirmation mote de passe *"
                                    dense
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-btn :disabled="disable1" type="submit" color="green"><v-icon color="white">mdi-check</v-icon></v-btn>
                            </v-col>
                        </v-row>
                    </form>
                </v-card-text>
            </v-card>
        </v-card>
    </div>
</template>

<script>
export default {
    data : () => ({
        data : [],
        disable : false,
        disable1 : true,
        infos : {
            old_password : null,
            password : null,
            password_confirmation : null,
        },
    }),
    methods : {
        update()
        {

        },
        updatePassword()
        {

        }
    },
    mounted() {
        this.data = this.$store.getters.GET_USER
    }
}
</script>
