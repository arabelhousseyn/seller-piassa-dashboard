<template>
    <div class="user-vehicles-component">
        {{ data }}
    </div>
</template>

<script>
export default {
    props : ['data'],
    data : ()=>({
       user_id : window.location.pathname.split('/').pop(),
    }),
    mounted()
    {
        if(this.data == undefined)
        {
            console.log('empty')
        }
    }
}
</script>
