<template>
    <div class="notification-templating">
        <v-container fluid>
            <bread-crumbs-component title1="Envoi des notifications" link="/home/notifications" icon="mdi mdi-chevron-right" />
            <v-card>
                <v-card-title><v-icon>mdi-broadcast</v-icon> <span class="ml-2">Envoi des notification</span></v-card-title>
                <v-card-text>
                    <form @submit.prevent="sendPush" method="post">
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

                        <v-alert v-if="message !== null" outlined type="success" text dismissible>
                           {{message}}
                        </v-alert>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn :disabled="disabled" v-bind="attrs" v-on="on" type="submit" large color="primary"><v-icon v-if="!send">mdi-send</v-icon>  <v-progress-circular v-else indeterminate color="white"></v-progress-circular></v-btn>
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
import BreadCrumbsComponent from "../components/BreadCrumbsComponent";
export default {
    components: {BreadCrumbsComponent},
    data : () =>({
        data : {
            title : 'Titre',
            body : 'Text',
            type : "ALL",
        },
        rules: [v => v.length <= 255 || 'Max 255 characters'],
        disabled : true,
        message : null,
        send : false,
    }),
    methods : {
        sendPush()
        {
            this.disabled = true
            this.send = true
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post('/api/users/send-push-notifications', this.data)
                    .then(e => {
                        this.disabled = false
                        this.send = false
                        this.message = e.data.message
                    }).catch(err => {
                        this.disabled = false
                        this.send = false
                    this.$toast.open({message: 'Erreur dans serveur veuillez réessayer', type: 'error'})
                })
            })
        },
        check()
        {
            this.disabled = (this.data.title.length == 0 || this.data.body.length == 0) ? true : false;
        }
    }
}
</script>
