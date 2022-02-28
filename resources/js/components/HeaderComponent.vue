<template>
    <div>
        <v-app-bar app color="white" elevation="0" clipped-right>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Title</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer app color="secondary" v-model="drawer" fixed>
            <v-list>
                <v-list-item class="px-2 d-flex justify-content-center">
                        <img style="height: 50px; width: 150px;" :src="$store.state.logo"></img>
                </v-list-item>
            </v-list>

            <v-list nav>
                <v-list-item v-for="item in items" :key="item.title" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data: () => ({
        drawer: null,
        items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard' },
            { title: 'Photos', icon: 'mdi-image' },
            { title: 'About', icon: 'mdi-help-box' },
        ]
    }),
};
</script>
