<template>
    <div class="bell-notification mr-5">
        <v-menu
            bottom
            offset-y
        >
            <template v-slot:activator="{ on, attrs }">
                <v-badge
                    bordered
                    color="error"
                    overlap
                >
                    <template v-slot:badge>
                        <span>0</span>
                    </template>
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                    small
                >
                    <v-icon>mdi-bell</v-icon>
                </v-btn>
                </v-badge>
            </template>
            <v-card>
                <v-card-text>
                    <v-list two-line>
                        <v-list-item-group>
                                <v-list-item>
                                    <v-list-item-avatar>
                                        <v-icon>mdi-star</v-icon>
                                    </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title>hello</v-list-item-title>

                                            <v-list-item-subtitle class="text--primary">You have new notification</v-list-item-subtitle>

                                            <v-list-item-subtitle>New notification</v-list-item-subtitle>
                                        </v-list-item-content>

                                        <v-list-item-action>
                                            <v-list-item-action-text>
                                                6h ago
                                            </v-list-item-action-text>

                                            <v-icon color="grey lighten-1">mdi-email-open-outline</v-icon>
                                        </v-list-item-action>
                                </v-list-item>

                                <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-icon>mdi-star</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>hello</v-list-item-title>

                                    <v-list-item-subtitle class="text--primary">You have new notification</v-list-item-subtitle>

                                    <v-list-item-subtitle>New notification</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-list-item-action-text>
                                        6h ago
                                    </v-list-item-action-text>

                                    <v-icon color="grey lighten-1">mdi-email-open-outline</v-icon>
                                </v-list-item-action>
                            </v-list-item>

                            <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-icon>mdi-star</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>hello</v-list-item-title>

                                    <v-list-item-subtitle class="text--primary">You have new notification</v-list-item-subtitle>

                                    <v-list-item-subtitle>New notification</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-list-item-action-text>
                                        6h ago
                                    </v-list-item-action-text>

                                    <v-icon color="grey lighten-1">mdi-email-open-outline</v-icon>
                                </v-list-item-action>
                            </v-list-item>

                            <v-divider></v-divider>
                        </v-list-item-group>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
export default {
    data: () => ({
        selected: [2],
        items: [
            {
                action: '15 min',
                headline: 'Brunch this weekend?',
                subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                title: 'Ali Connors',
            },
            {
                action: '2 hr',
                headline: 'Summer BBQ',
                subtitle: `Wish I could come, but I'm out of town this weekend.`,
                title: 'me, Scrott, Jennifer',
            },
            {
                action: '6 hr',
                headline: 'Oui oui',
                subtitle: 'Do you have Paris recommendations? Have you ever been?',
                title: 'Sandra Adams',
            },
            {
                action: '12 hr',
                headline: 'Birthday gift',
                subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
                title: 'Trevor Hansen',
            },
            {
                action: '18hr',
                headline: 'Recipe to try',
                subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                title: 'Britta Holt',
            },
        ],
    }),
}
</script>
