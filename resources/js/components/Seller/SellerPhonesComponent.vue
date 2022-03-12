<template>
    <div class="seller-phones">
        welcome to seller phones
        {{phones}} {{data}}
    </div>
</template>

<script>
export default {
    props : ['phones'],
    data : ()=>({
        data : [],
        seller_id : window.location.pathname.split('/').pop()
    }),
    methods : {
       init()
       {
           axios.get('/sanctum/csrf-cookie').then(res =>{
               axios.get(`/api/sellers/phones/${this.seller_id}`)
                   .then(e=>{
                       this.data = e.data.data
                   })
                   .catch(err =>{
                       if(err.response.status == 404)
                       {
                           this.$router.push('/home/sellers')
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
