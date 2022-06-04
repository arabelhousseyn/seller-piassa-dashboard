<template>
    <div class="main">
        <v-container fluid>
            <v-row>
                <v-col cols="12" lg="4" md="4">
                    <card-information-component
                        :count="$store.state.data.requests.count"
                        :icon="$store.state.data.requests.icon"
                        :title="$store.state.data.requests.title" />
                </v-col>
                <v-col cols="12" lg="4" md="4">
                    <card-information-component
                        :count="$store.state.data.income_year.count"
                        :icon="$store.state.data.income_year.icon"
                        :title="$store.state.data.income_year.title" />
                </v-col>
                <v-col cols="12" lg="4" md="4">
                    <card-information-component
                        :count="$store.state.data.income_month.count"
                        :icon="$store.state.data.income_month.icon"
                        :title="$store.state.data.income_month.title" />
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <v-card elevation="0">
                        <v-card-text>
                            <comission-stats-component />
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import CardInformationComponent from "./CardInformationComponent"
import ComissionStatsComponent from "./charts/ComissionStatsComponent"
export default {
    components: { ComissionStatsComponent, CardInformationComponent}
}
</script>
