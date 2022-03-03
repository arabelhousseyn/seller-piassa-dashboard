<template>
    <div class="resotre_user_dialog">
        <v-dialog
            v-model="dialog1"
            persistent
            max-width="290"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    Open Dialog
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5">
                    Etes-vous sûr que vous voulez restorer !
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="grey darken-1"
                        text
                        @click="close"
                    >
                        <v-icon>mdi-cancel</v-icon>
                    </v-btn>
                    <v-btn
                        v-if="!load"
                        color="success darken-1"
                        text
                        @click="destroy"
                    >
                        <v-icon>mdi-restore</v-icon>
                    </v-btn>

                    <v-progress-circular
                        v-else
                        indeterminate
                        color="primary"
                    ></v-progress-circular>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props : ['dialog1','id'],
    data : () =>({
        load : false,
    }),
    methods : {
        destroy()
        {
            this.load = true
            axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.put(`/api/users/restore/${this.id}`).then(e=>{
                    if(e.status == 204)
                    {
                        this.$toast.open({
                            message : 'Opération effectué',
                            type : 'success'
                        })
                        this.load = false
                        window.location.reload()
                    }
                }).catch(err =>{
                    this.$toast.open({
                        message : 'ERROR',
                        type : 'error'
                    })
                })
            })
        },
        close()
        {
            this.$emit('close1')
        }
    }
}
</script>
