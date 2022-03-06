<template>
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
                    <span class="text-h5">Créer un utilisateur</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-form @submit.prevent="create" method="post">
                        <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        v-model="data.full_name"
                                        label="Nom complete*"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        v-model="data.phone"
                                        label="Téléphone*"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="data.email"
                                        type="email"
                                        label="Email"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" sm="6">
                                    <v-text-field
                                        @keydown="check"
                                        v-model="data.password"
                                        label="Mote de passe*"
                                        type="password"
                                        required
                                    ></v-text-field>
                                </v-col>
                            <v-col cols="12" md="6" sm="6">
                                <v-text-field
                                    @keydown="check"
                                    v-model="data.password_confirmation"
                                    label="Confirmer mote de passe*"
                                    type="password"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4" sm="4">
                                <v-select
                                    @change="check"
                                    v-model="selectedGender"
                                    :items="items"
                                    placeholder="Sexe*"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" md="4" sm="4">
                                <v-select
                                    @change="check"
                                    v-model="selectedProvince"
                                    :items="items2"
                                    placeholder="Willaya*"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" md="4" sm="4">
                                <v-select
                                    @change="check"
                                    v-model="selectedRole"
                                    :items="items3"
                                    placeholder="Role*"
                                ></v-select>
                            </v-col>
                                <v-col
                                    v-if="show"
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        v-model="data.commercial_registration"
                                        label="Registre commerce*"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    v-if="show"
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        v-model="data.nif"
                                        label="Nif*"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    v-if="show"
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        v-model="data.num_ar"
                                        label="Numero ar*"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    v-if="show"
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        v-model="data.name_company"
                                        label="Nom entreprise*"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    v-if="show"
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        @keydown="check"
                                        v-model="data.contact_name"
                                        label="Nom contact*"
                                        required
                                    ></v-text-field>
                                </v-col>

                            <v-alert v-if="hasError" border="right" colored-border type="error" elevation="2">
                                <ul>
                                    <li v-for="(error,index) in errors" :key="index"><span>{{error}}</span></li>
                                </ul>
                            </v-alert>
                                <v-col cols="12">
                                    <v-btn type="submit" :disabled="disabled" color="primary"><v-icon>mdi-plus</v-icon></v-btn>
                                </v-col>
                        </v-row>
                        </v-form>
                    </v-container>
                    <small>*indique le champ obligatoire</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>
<script>
export default {
    data: () => ({
        dialog: false,
        provinces : [],
        selectedGender : null,
        selectedProvince : null,
        selectedRole : null,
        show : false,
        data  : {
            phone : null,
            password : null,
            password_confirmation : null,
            province_id : null,
            full_name : null,
            gender : null,
            role : null,
            commercial_registration : null,
            nif : null,
            num_ar : null,
            name_company : null,
            contact_name : null,
        },
        items: ['Homme', 'Femme'],
        items2 : [],
        items3 : ['Particulier','Corporate','Atelier'],
        disabled : true,
        errors : [],
        hasError : false,

    }),
    methods : {
        create()
        {
            if(this.selectedGender == "Homme")
            {
                this.data.gender = 'M'
            }else if(this.selectedGender == "Femme")
            {
                this.data.gender = 'W'
            }

            if(this.selectedRole == 'Particulier')
            {
                this.data.role = 'P';
            }else if(this.selectedRole == 'Corporate')
            {
                this.data.role = 'C';
            }else if(this.selectedRole == 'Atelier')
            {
                this.data.role = 'A';
            }

            for (const province of this.provinces) {
                if(province.name == this.selectedProvince)
                {
                    this.data.province_id = province.id
                    break;
                }
            }


            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post('/api/users',this.data).then(e=>{
                    this.$toast.open({
                        message : "Opération effectué",
                        type : 'success',
                    })
                    window.location.reload()
                }).catch(err =>{
                    let errors = Object.values(err.response.data.errors)
                    for (const error of errors) {
                        this.errors.push(error[0])
                        this.hasError = true
                    }
                })
            })
        },
        check()
        {
            if(this.selectedRole == 'Corporate')
            {
                this.show = true
            }else{
                this.show = false
            }
            this.hasError = false
            this.errors = []
            if(!this.show)
            {
                this.disabled = (this.data.phone == null || this.data.password == null
                    || this.data.password_confirmation == null || this.data.full_name == null ||
                    this.selectedProvince == null || this.selectedGender == null || this.selectedRole == null) ? true : false
            }else{
                this.disabled = (this.data.phone == null || this.data.password == null
                    || this.data.password_confirmation == null || this.data.full_name == null ||
                    this.selectedProvince == null || this.selectedGender == null || this.selectedRole == null
                || this.data.commercial_registration == null || this.data.nif == null
                || this.data.num_ar == null || this.data.name_company == null
                || this.data.contact_name == null) ? true : false
            }
        }
    },
    mounted() {
        axios.get('/sanctum/csrf-cookie').then(res =>{
            axios.get('/api/provinces').then(e=>{
                this.provinces = e.data
                for (const province of e.data) {
                    this.items2.push(province.name)
                }
            }).catch(err =>{
                this.$toast.open({
                    message : "ERROR",
                    type : 'error'
                })
            })
        })
    }
}
</script>
