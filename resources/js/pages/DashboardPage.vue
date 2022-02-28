<template>
    <div class="dashboard">
        <progress-circular-component />
            <header-component />
            <v-main>
                <router-view />
                <footer-component />
            </v-main>
        </div>
</template>

<script>
import ProgressCircularComponent from "../components/ProgressCircularComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
export default {
    components: {FooterComponent, HeaderComponent, ProgressCircularComponent},
    mounted() {

    }
}
</script>
