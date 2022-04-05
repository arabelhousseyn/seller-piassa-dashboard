<template>
    <div class="admin-profile-page">
        <v-container fluid>
            <v-row>
                <v-col cols="12" lg="6" md="6">
                    <update-profile-component />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import UpdateProfileComponent from "../components/Profile/UpdateProfileComponent";
export default {
    components: {UpdateProfileComponent}
}
</script>
