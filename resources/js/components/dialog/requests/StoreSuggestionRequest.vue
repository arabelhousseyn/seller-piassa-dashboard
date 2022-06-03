<template>
    <div class="store-suggestion">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    Ajouter suggestion <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Ajouter</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <form method="post" @submit.prevent="store">
                                <v-col
                                    cols="12"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        v-model="data.mark"
                                        label="Marque*"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        v-model="data.price"
                                        label="Prix*"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                >
                                    <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :return-value.sync="data.available_at"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model="date"
                                                label="Disponible à*"
                                                prepend-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            @change="mutate"
                                            no-title
                                            scrollable
                                        >
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                text
                                                color="primary"
                                                @click="menu = false"
                                            >
                                                Cancel
                                            </v-btn>
                                            <v-btn
                                                text
                                                color="primary"
                                                @click="$refs.menu.save(data.available_at)"
                                            >
                                                OK
                                            </v-btn>
                                        </v-date-picker>
                                    </v-menu>
                                </v-col>

                                <v-alert v-if="hasError" border="right" colored-border type="error" elevation="2">
                                    <ul>
                                        <li v-for="(error,index) in errors" :key="index"><span>{{error}}</span></li>
                                    </ul>
                                </v-alert>

                                <v-col cols="12">
                                    <v-btn type="submit" :disabled="disable" color="primary" ><v-icon>mdi-plus</v-icon></v-btn>
                                </v-col>
                            </form>
                        </v-row>
                    </v-container>
                    <small>*Indique le champ obligatoire</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props : ['seller_request_id'],
    data : ()=>({
        menu: false,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        data : {
            mark : null,
            price : null,
            available_at : (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            seller_request_id : null
        },
        errors : [],
        hasError : false,
        disable : true,
        dialog : false,
        loading : false,
    }),
    methods : {
        store()
        {
            this.loading = true
            this.disable = true
            this.data.seller_request_id = this.seller_request_id

            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post('/api/sellers/sotre-seller-suggestion',this.data).then(e=>{
                    this.$toast.open({
                        message : "Opération effectué",
                        type : 'success',
                    })
                    this.loading = false
                    this.disable = true
                    this.empty()
                    this.dialog = false
                }).catch(err =>{
                    let errors = Object.values(err.response.data.errors)
                    for (const error of errors) {
                        this.errors.push(error[0])
                        this.hasError = true
                        this.loading = false
                        this.disable = false
                    }
                })
            })
        },
        empty()
        {
            this.data.mark = null
            this.data.price = null
            this.data.available_at = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
        },
        check()
        {
            this.disable = (this.data.mark == null || this.data.price == null) ? true : false
        },
        mutate(e)
        {
            this.data.available_at = e
            this.date = e
        }
    },
    mounted() {

    }
}
</script>
