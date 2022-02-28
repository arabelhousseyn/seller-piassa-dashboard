<template>
    <v-app style="background-color: #eee;">
        <div class="master">
            <router-view />
        </div>
    </v-app>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('CHECK_AUTH')

        if(this.$store.state.isAuth)
        {
            this.$router.push('/home')
        }else{
            this.$router.push('/')
        }
    }
}
</script>
