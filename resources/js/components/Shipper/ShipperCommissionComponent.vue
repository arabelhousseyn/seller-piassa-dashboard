<template>
    <div class="shipper-commissions">
        welcome to shipper comissions
        {{data}} {{data1}}
    </div>
</template>

<script>
export default {
    props : ['data'],
    data : ()=>({
        data1 : undefined,
        shipper_id : window.location.pathname.split('/').pop()
    }),
    methods : {
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get(`/api/shippers/comissions/${this.shipper_id}`)
                    .then(e=>{
                        this.data1 = e.data.data
                    })
                    .catch(err =>{
                        if(err.response.status == 404)
                        {
                            this.$router.push('/home/shippers')
                        }
                        console.log(err)
                    })
            })
        }
    },
    mounted() {
        this.init()
    }
}
</script>
