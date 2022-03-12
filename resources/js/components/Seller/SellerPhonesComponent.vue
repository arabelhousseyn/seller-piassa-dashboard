<template>
    <div class="seller-phones">
        welcome to seller phones
        {{phones}}
    </div>
</template>

<script>
export default {
    props : ['phones'],
    data : ()=>({
        data : [],
    }),
    methods : {
       init()
       {

       }
    },
    mounted() {
        this.init()
    }
}
</script>
