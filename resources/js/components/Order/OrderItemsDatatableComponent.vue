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
        user_order_id : window.location.pathname.split('/').pop()
    }),
    methods : {
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get(`/api/orders/items/${this.user_order_id}`)
                    .then(e =>{
                        this.data2 = e.data.data
                    }).catch(err => {
                    this.$router.push('/home/orders')
                })
            })
        }
    },
    mounted() {
        this.init()
    }
}
</script>
