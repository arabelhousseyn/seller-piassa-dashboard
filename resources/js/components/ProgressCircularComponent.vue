<template>
    <div class="prg-circular">
        <v-overlay color="white" opacity="1" :value="overlay">
            <v-progress-circular
                indeterminate
                color="primary"
                size="64"
            ></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
export default {
    data: () => ({
        overlay: true,
    }),
    created() {
        setTimeout(() => {
            this.overlay = false
        },3000)
    }
}
</script>
