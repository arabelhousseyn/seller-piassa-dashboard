<template>
    <div class="users">
        <v-container fluid>
            <v-data-table
                :headers="headers"
                :items="users"
                sort-by="calories"
                class="elevation-1"
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Utilisateurs</v-toolbar-title>
                        <v-divider
                            class="mx-4"
                            inset
                            vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        hello
                    </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon
                        small
                        class="mr-2"

                    >
                        mdi-pencil
                    </v-icon>
                    <v-icon
                        small

                    >
                        mdi-delete
                    </v-icon>
                </template>
                <template v-slot:no-data>
                    <v-btn
                        color="primary"

                    >
                        Reset
                    </v-btn>
                </template>
            </v-data-table>
        </v-container>
    </div>
</template>

<script>
export default {
    data : ()=>({
        users : [],
        headers: [
            {
                text: 'Téléphone',
                align: 'start',
                sortable: true,
                value: 'phone',
            },
            { text: 'Email', value: 'email' },
            { text: 'Créé à', value: 'created_at' },
        ],
    }),
    mounted() {
        axios.get('/sanctum/csrf-cookie').then(res =>{
            axios.get('/api/users')
                .then(e =>{
                    this.users = e.data.data
                }).catch(err => {
                this.$toast.open({message : 'Erreur dans serveur veuillez réessayer',type : 'error'})
            })
        })
    }
}
</script>
