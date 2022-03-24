<template>
    <div class="users-data-table">
        <v-container fluid>
            {{data}} {{data2}}
        </v-container>
    </div>
</template>

<script>
export default {
    props : ['data'],
    data : ()=>({
        data2 : undefined,
        user_id
    }),
    mounted() {
        console.log(window.location.href)
    }
}
</script>
