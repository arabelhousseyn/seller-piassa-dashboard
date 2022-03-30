<template>
    <div class="stats-page">
        <v-container fluid>
            <bread-crumbs-component title1="Statistiques" link="/home/statistics" icon="mdi mdi-chevron-right" />
            welcome to stats page
        </v-container>
    </div>
</template>

<script>
import BreadCrumbsComponent from "../components/BreadCrumbsComponent";
export default {
    components: {BreadCrumbsComponent},
    data : ()=>({

    })
}
</script>
