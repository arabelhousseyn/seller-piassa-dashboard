<template>
    <div class="seller-job-type-dialog">
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
                    <v-icon>mdi-plus</v-icon> Ajouter
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Types</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                          <form method="post" @submit.prevent="store" >
                              <v-col cols="12">
                                  <v-combobox
                                      @change="check"
                                      v-model="selectedTypes"
                                      :items="items2"
                                      label="Types*"
                                      multiple
                                      outlined
                                      dense
                                  ></v-combobox>
                              </v-col>

                              <v-alert v-if="hasError" border="right" colored-border type="error" elevation="2">
                                  <ul>
                                      <li v-for="(error,index) in errors" :key="index"><span>{{error}}</span></li>
                                  </ul>
                              </v-alert>
                              <v-col cols="12">
                                  <v-btn type="submit" :disabled="disabled" color="primary"><v-icon v-if="!progress">mdi-check</v-icon> <v-progress-circular v-else indeterminate color="white"></v-progress-circular></v-btn>
                              </v-col>
                          </form>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Fermer
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props : ['seller_job_id'],
    data : ()=>({
        disabled : true,
        progress : false,
        dialog : false,
        data : {
            seller_job_id : null,
            types : []
        },
        items2 : [],
        types : [],
        selectedTypes : [],
        hasError : false,
        errors : [],
    }),
    methods : {
        store()
        {
            for (const type of this.selectedTypes) {
                for (let i= 0;i<this.types.length;i++)
                {
                    if(type == this.types[i].name)
                    {
                        this.data.types.push({
                            type_id : this.types[i].id
                        })
                    }
                }
            }

            this.progress = true
            this.disabled = true
            this.data.seller_job_id = this.seller_job_id


            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post('/api/sellers/store_types',this.data).then(e=>{
                    this.$toast.open({
                        message : "Opération effectué",
                        type : 'success',
                    })
                    this.$emit('close3')
                    this.dialog = false
                    this.disabled = true
                    this.progress = false
                    this.selectedTypes = []
                }).catch(err =>{
                    let errors = Object.values(err.response.data.errors)
                    for (const error of errors) {
                        this.errors.push(error[0])
                        this.hasError = true
                        this.progress = false
                        this.disabled = false
                    }
                })
            })
        },
        init()
        {
             axios.get('/sanctum/csrf-cookie').then(res =>{
                axios.get('/api/types/all').then(e=>{
                    this.types = e.data.data
                    for (const type of e.data.data) {
                        this.items2.push(type.name)
                    }
                }).catch(err =>{
                    console.log(err)
                    this.$toast.open({
                        message : "ERROR",
                        type : 'error'
                    })
                })
            })
        },
        check()
        {
            this.disabled = (this.selectedTypes.length > 0) ? false : true
        }
    },
    mounted() {
        this.init()
    }
}
</script>
