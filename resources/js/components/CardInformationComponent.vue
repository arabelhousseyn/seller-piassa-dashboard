<template>
    <div class="card-information">
        <v-card rounded elevation="0" class="pa-2 pt-2">

                <v-list disabled>
                       <v-list-item-group>
                           <v-list-item>
                               <v-list-item-content>
                                   <v-list-item-title><span style="font-size: 26px;" class="font-weight-bold">{{ count }}</span></v-list-item-title>
                                   <v-list-item-subtitle class="font-weight-bold grey--text">{{ title }}</v-list-item-subtitle>
                               </v-list-item-content>

                               <v-list-item-action>
                                   <v-icon color="primary" x-large>{{ icon }}</v-icon>
                               </v-list-item-action>
                           </v-list-item>
                       </v-list-item-group>
                </v-list>

        </v-card>
    </div>
</template>


<script>
export default {
    props : ['count','icon','title'],
    methods : {
    }
}
</script>
