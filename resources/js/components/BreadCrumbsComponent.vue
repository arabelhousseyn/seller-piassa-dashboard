<template>
    <v-card class="mb-5 elevation-1">
        <v-breadcrumbs>
            <v-breadcrumbs-item href="/home">Acceuil</v-breadcrumbs-item>
            <v-breadcrumbs-divider><v-icon>{{ icon }}</v-icon></v-breadcrumbs-divider>
            <v-breadcrumbs-item :href="link">{{ title1 }}</v-breadcrumbs-item>
        </v-breadcrumbs>
    </v-card>
</template>

<script>
export default {
    props :['title1','icon','link']
}
</script>
