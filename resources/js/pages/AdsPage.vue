<template>
    <div class="ads-page">
        <v-container fluid>
            <bread-crumbs-component title1="Publicités" link="/home/ads" icon="mdi mdi-chevron-right" />

            <div class="content">
                <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                >
                    <template slot="progress">
                        <v-progress-linear
                            color="primary"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                    </template>

                    <v-img
                        v-if="image !== null"
                        height="640"
                        width="360"
                        :src="image.path"
                    ></v-img>

                    <v-img v-else height="250" :src="$store.state.broken"></v-img>

                    <v-card-text>

                        <div v-if="image !== null" class="my-4 text-subtitle-1">
                            <span class="font-weight-bold">créé à</span> : {{image.created_at}}
                        </div>

                        <div v-if="image !== null" class="my-4 text-subtitle-1">
                            <span class="font-weight-bold">Mise à jour à</span> : {{image.updated_at}}
                        </div>

                        <div v-if="image !== null" class="my-4 text-subtitle-1">
                            <span class="font-weight-bold">Taille standard</span> : {{image.size}}
                        </div>

                        <v-file-input
                            v-if="image == null"
                            label="Image 360x640"
                            filled
                            v-model="data.image"
                            @change="upload"
                            prepend-icon="mdi-camera"
                        ></v-file-input>

                        <v-alert v-if="hasError" border="right" colored-border type="error" elevation="2">
                            <ul>
                                <li v-for="(error,index) in errors" :key="index"><span>{{error}}</span></li>
                            </ul>
                        </v-alert>

                    </v-card-text>

                    <div v-if="image !== null">
                        <v-divider class="mx-4"></v-divider>
                        <v-card-text>
                            <v-file-input
                                color="green"
                                label="Modifier Image 640x1920"
                                filled
                                v-model="data.image"
                                @change="update"
                                prepend-icon="mdi-camera"
                            ></v-file-input>

                            <v-alert v-if="hasError1" border="right" colored-border type="error" elevation="2">
                                <ul>
                                    <li v-for="(error,index) in errors1" :key="index"><span>{{error}}</span></li>
                                </ul>
                            </v-alert>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="red" @click="dialog = true" dark><v-icon>mdi-delete</v-icon> Supprimer</v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </div>
            <delete-ads-dialog v-if="dialog" :dialog="dialog" :id="image.id" @close="dialog = false" />
        </v-container>
    </div>
</template>
<script>
import BreadCrumbsComponent from "../components/BreadCrumbsComponent";
import DeleteAdsDialog from "../components/dialog/Ads/DeleteAdsDialog";
export default {
    data : ()=>({
        loading: true,
        image : null,
        hasError : false,
        errors : [],
        hasError1 : false,
        errors1 : [],
        data : {
          image : null,
        },
        dialog : false,

    }),
    methods: {
        init () {
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.get('/api/ads').then(e => {
                    this.image = e.data.data
                    this.loading = false
                })
            })
        },
        upload()
        {
            this.hasError = false
            this.errors = []

            let form = new FormData
            form.append('ad',this.data.image)

            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post('/api/ads',form).then(e => {
                    this.$toast.open({
                        message : "Opération effectué",
                        type : 'success',
                    })
                    window.location.reload()
                }).catch(err => {
                    let errors = Object.values(err.response.data.errors)
                    for (const error of errors) {
                        this.errors.push(error[0])
                        this.hasError = true
                    }
                })
            })
        },
        update()
        {
            this.hasError1 = false
            this.errors1 = []
            let form = new FormData
            form.append('ad',this.data.image)

            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post(`/api/ads/${this.image.id}?_method=PUT`,form).then(e => {
                    this.$toast.open({
                        message : "Opération effectué",
                        type : 'success',
                    })
                    window.location.reload()
                }).catch(err => {
                    let errors = Object.values(err.response.data.errors)
                    for (const error of errors) {
                        this.errors1.push(error[0])
                        this.hasError1 = true
                    }
                })
            })
        }
    },
    components: {DeleteAdsDialog, BreadCrumbsComponent},
    mounted() {
        this.init()
    }
}
</script>
