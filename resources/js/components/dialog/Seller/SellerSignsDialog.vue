<template>
    <div class="sellser-signs-dialog">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600"
        >
            <v-card>
                <v-card-title class="text-h5">
                    Marques
                    <v-spacer></v-spacer>
                    <store-seller-job-signs-dialog @close3="close3" :seller_job_id="seller_job_id" />
                </v-card-title>
                <v-card-text>
                    <v-container v-if="loading">
                        <v-row
                            align-content="center"
                            justify="center"
                        >
                            <v-col
                                class="text-subtitle-1 text-center"
                                cols="12"
                            >
                                Chargement, veuillez patienter
                            </v-col>
                            <v-col cols="6">
                                <v-progress-linear
                                    color="primary"
                                    indeterminate
                                    rounded
                                    height="6"
                                ></v-progress-linear>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-simple-table v-else dense>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">
                                    Type
                                </th>
                                <th class="text-left">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                v-for="(item,index) in data"
                                :key="index"
                            >
                                <td>{{ item.sign.name }}</td>
                                <td>
                                    <v-btn color="red" @click="destroy(item.id)" rounded small dark elevation="1"><v-icon>mdi-trash-can</v-icon></v-btn>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="colse"
                    >
                        Fermer
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <destroy-seller-job-sign-dialog @close="close1" @close1="close2" v-if="dialog1" :dialog="dialog1" :id="seller_job_sign_id" />
    </div>
</template>

<script>

import DestroySellerJobSignDialog from "./DestroySellerJobSignDialog";
import StoreSellerJobSignsDialog from "./StoreSellerJobSignsDialog";
export default {
    components: {StoreSellerJobSignsDialog, DestroySellerJobSignDialog},
    props : ['seller_job_id','dialog'],
    data : () =>({
        data : [],
        loading : true,
        dialog1 : false,
        seller_job_sign_id : null,
    }),
    methods : {
        colse()
        {
            this.$emit('close')
        },
        destroy(seller_job_sign_id)
        {
            this.dialog1 = true
            this.seller_job_sign_id = seller_job_sign_id
        },
        init()
        {
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.get(`/api/sellers/signs/${this.seller_job_id}`).then(e => {
                    this.data = e.data.data
                    this.loading = false
                })
            }).catch(err=>{
                this.close()
            })
        },
        close1(seller_job_sign_id)
        {
            this.dialog1 = false
            this.seller_job_sign_id = null
        },
        close2(seller_job_sign_id)
        {
            for (let i = 0;i<this.data.length;i++)
            {
                if(this.data[i].id == seller_job_sign_id)
                {
                    this.data.splice(i,1)
                }
            }

            this.dialog1 = false
            this.seller_job_sign_id = null
        },
        close3()
        {
            this.init()
        }
    },
    mounted() {
        this.init()
    }
}
</script>
