<template>
    <div class="user-order">
        welcome to user orders
        {{data}}
    </div>
</template>
<script>
export default {
    props :['data'],
    data : ()=>({
        data2 : undefined,
    }),
    methods : {
      fetchOrders()
      {

      }
    },
    mounted() {

    }
}
</script>
