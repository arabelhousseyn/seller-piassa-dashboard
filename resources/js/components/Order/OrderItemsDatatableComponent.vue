<template>
    <div class="users-data-table">
        <v-container fluid>
            {{data}}
        </v-container>
    </div>
</template>

<script>
export default {
    props : ['data'],
    data : ()=>({
    }),
    mounted() {
        console.log(window.location.href)
    }
}
</script>
