<template>
    <div class="notification-templating">
        <v-container fluid>
            <v-card>
                <v-card-title><v-icon>mdi-broadcast</v-icon>Envoi des notification</v-card-title>
                <v-card-text>
                    <form @submit.prevent="send" method="post">
                        <v-text-field
                            required
                            placeholder="Titre"
                            v-model="data.title"
                            prepend-icon="mdi-format-title"
                            outlined
                            clearable
                            :rules="rules"
                            @keydown="check"
                            counter
                            max
                        ></v-text-field>
                        <v-textarea
                            required
                            counter
                            clearable
                            filled
                            prepend-icon="mdi-comment"
                            placeholder="Text"
                            @keydown="check"
                            :rules="rules"
                            v-model="data.body"
                            solo
                        ></v-textarea>

                        <v-radio-group
                            v-model="data.type"
                            row
                            prepend-icon="mdi-gender-male-female"
                        >
                            <v-radio
                                label="Tous"
                                color="black"
                                value="ALL"
                            ></v-radio>
                            <v-radio
                                label="Homme"
                                color="blue"
                                value="M"
                            ></v-radio>
                            <v-radio
                                label="Femme"
                                color="red"
                                value="W"
                            ></v-radio>
                        </v-radio-group>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn :disabled="disabled" v-bind="attrs" v-on="on" type="submit" large color="primary"><v-icon>mdi-send</v-icon></v-btn>
                            </template>
                            <span>Envoi</span>
                        </v-tooltip>
                    </form>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data : () =>({
        data : {
            title : 'Titre',
            body : 'Text',
            type : "ALL",
        },
        rules: [v => v.length <= 255 || 'Max 255 characters'],
        disabled : true,
    }),
    methods : {
        send()
        {

        },
        check()
        {
            this.disabled = (this.data.title.length == 0 || this.data.body.length == 0) ? true : false;
        }
    }
}
</script>
