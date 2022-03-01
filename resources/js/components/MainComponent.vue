<template>
    <div class="main">
        <v-container fluid>
            <v-row>
                <v-col cols="3">
                    <card-information-component count="50" type="users" icon="mdi-account" title="user" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import CardInformationComponent from "./CardInformationComponent";
export default {
    components: {CardInformationComponent}
}
</script>
