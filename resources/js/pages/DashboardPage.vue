<template>
    <div class="dashboard">
        {{$store.state.user}}
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$store.state.user)
    }
}
</script>
