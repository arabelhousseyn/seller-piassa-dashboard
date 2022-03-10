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
                                        <p><span class="font-weight-bold text-h6">Nom complete : </span> <span>{{profile.first_name}} {{profile.last_name}}</span></p>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <p><span class="font-weight-bold text-h6">Nom commercial : </span> <span>{{profile.commercial_name}}</span></p>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <p><span class="font-weight-bold text-h6">Willaya : </span> <span>{{profile.province.name}}</span></p>
                                    </v-col>

                                    <v-col cols="12">
                                        <GmapMap
                                            disableDefaultUi="true"
                                            :center="{lat:parseInt(profile.location[0]), lng:parseInt(profile.location[1])}"
                                            :zoom="9"
                                            map-type-id="terrain"
                                            style="width: 500px; height: 300px"
                                        >
                                            <GmapMarker
                                                :position="{lat:parseInt(profile.location[0]), lng:parseInt(profile.location[1])}"
                                                :clickable="true"
                                            >
                                                <GmapInfoWindow>Position</GmapInfoWindow>
                                            </GmapMarker>
                                        </GmapMap>
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
    props : ['dialog','profile'],
    methods : {
        close()
        {
            this.$emit('close')
        }
    }
}
</script>
