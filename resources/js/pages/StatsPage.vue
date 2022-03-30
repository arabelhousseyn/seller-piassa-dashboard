<template>
    <div class="stats-page">
        <v-container fluid>
            <bread-crumbs-component title1="Statistiques" link="/home/statistics" icon="mdi mdi-chevron-right" />
            <v-row>
                <v-col cols="12" lg="6" sm="6">
                    <request-expired-stat-component />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import RequestExpiredStatComponent from "../components/Stats/RequestExpiredStatComponent";
import BreadCrumbsComponent from "../components/BreadCrumbsComponent";
export default {
    components: {BreadCrumbsComponent, RequestExpiredStatComponent}
}
</script>
