<template>
    <div class="user-order">
        welcome to user orders
        {{data}} {{data2}}
    </div>
</template>
<script>
export default {
    props :['data'],
    data : ()=>({
        user_id : window.location.pathname.split('/').pop(),
        data2 : undefined,
    }),
    methods : {
      init()
      {
          axios.get('/sanctum/csrf-cookie').then(res =>{
              axios.get(`/api/users/orders/${this.user_id}`)
                  .then(e=>{
                      this.data2 = e.data.data
                  })
                  .catch(err =>{
                      if(err.response.status == 404)
                      {
                          this.$router.push('/home/users')
                      }
                      console.log(err)
                  })
          })
      }
    },
    mounted() {
        if(this.data == undefined)
        {
            this.init()
        }
    }
}
</script>
