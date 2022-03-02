<template>
    <div class="main">
        <v-container fluid>
            <v-row>
                <v-col cols="12" lg="3" md="4">
                    <card-information-component
                        :count="$store.state.data.users.count"
                        :icon="$store.state.data.users.icon"
                        :title="$store.state.data.users.title" />
                </v-col>
                <v-col cols="12" lg="3" md="4">
                    <card-information-component
                        :count="$store.state.data.sellers.count"
                        :icon="$store.state.data.sellers.icon"
                        :title="$store.state.data.sellers.title" />
                </v-col>
                <v-col cols="12" lg="3" md="4">
                    <card-information-component
                        :count="$store.state.data.shippers.count"
                        :icon="$store.state.data.shippers.icon"
                        :title="$store.state.data.shippers.title" />
                </v-col>
                <v-col cols="12" lg="3" md="4">
                    <card-information-component
                        :count="$store.state.data.company.count"
                        :icon="$store.state.data.company.icon"
                        :title="$store.state.data.company.title" />
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid>
            <v-row>
                <v-col cols="12" lg="6" md="6">
                    <users-stats-component />
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <comission-stats-component />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import CardInformationComponent from "./CardInformationComponent";
import UsersStatsComponent from "./charts/UsersStatsComponent";
import ComissionStatsComponent from "./charts/ComissionStatsComponent";
export default {
    components: {ComissionStatsComponent, UsersStatsComponent, CardInformationComponent}
}
</script>
