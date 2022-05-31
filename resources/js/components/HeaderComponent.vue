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
                        <a href="/home"><img style="width: 150px;" :src="$store.state.sm_logo"></img></a>
                </v-list-item>
            </v-list>

            <v-list dark>
                <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                >
                    <v-list-item
                        @click="()=>{this.$router.push('/').catch(err => {})}"
                        style="border-right: 4px solid;"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Acceuil</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item
                        @click="()=>{this.$router.push('/home/requests').catch(err => {})}"
                        style="border-right: 4px solid;"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-chart-box</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Les demandes</v-list-item-title>
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
    }),
    methods : {
      init()
      {
          let path = window.location.pathname.replace('/','')
          if(path == 'home')
          {
              this.selectedItem = 0
          }else if(path.includes('home/users'))
          {
              this.selectedItem = 1;
          }else if(path.includes('home/sellers'))
          {
              this.selectedItem = 1;
          }else if(path.includes('home/shippers'))
          {
              this.selectedItem = 1;
          }
          else if(path.includes('home/provinces'))
          {
              this.selectedItem = 2;
          }
          else if(path.includes('home/signs'))
          {
              this.selectedItem = 3;
          }
          else if(path.includes('home/types'))
          {
              this.selectedItem = 4;
          }
          else if(path.includes('home/orders'))
          {
              this.selectedItem = 5;
          }
          else if(path.includes('home/notifications'))
          {
              this.selectedItem = 6;
          }
          else if(path.includes('home/statistics'))
          {
              this.selectedItem = 7;
          }
          else if(path.includes('home/ads'))
          {
              this.selectedItem = 8;
          }
          else{
              this.selectedItem = null
          }

      }
    },
    mounted() {
        this.init()
    }
};
</script>
