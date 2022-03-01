<template>
    <div>
        <v-app-bar app color="white" elevation="0" clipped-right>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <bell-notification-menu-component />
            <menu-bar-component />
        </v-app-bar>

        <v-navigation-drawer app color="secondary" v-model="drawer" fixed>
            <v-list>
                <v-list-item class="px-2 d-flex justify-content-center">
                        <a href="/home"><img :src="$store.state.sm_logo"></img></a>
                </v-list-item>
            </v-list>

            <v-list dark>
                <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                >
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        style="border-right: 4px solid;"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import MenuBarComponent from "./MenuBarComponent"
import BellNotificationMenuComponent from './BellNotificationMenuComponent'
export default {
    components: {MenuBarComponent,BellNotificationMenuComponent},
    data: () => ({
        selectedItem: 0,
        drawer: null,
        items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard' },
            { title: 'Photos', icon: 'mdi-image' },
            { title: 'About', icon: 'mdi-help-box' },
        ]
    }),
};
</script>
