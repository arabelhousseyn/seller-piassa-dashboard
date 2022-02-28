<template>
    <div class="my-login-page">
        <section class="h-100">
            <div class="container h-100">
                <div class="row justify-content-md-center h-100">
                    <div class="card-wrapper">
                        <div class="brand">
                            <img :src="$store.state.logo" alt="logo">
                        </div>
                        <div class="card fat">
                            <div class="card-body">
                                <h4 class="card-title">Connexion</h4>
                                <form method="POST" @click.prevent="login">
                                    <div class="form-group">
                                        <label for="phone">Téléphone</label>
                                        <input id="phone" type="text" @keydown="check" v-model="form.phone" class="form-control" name="phone" required autofocus>
                                    </div>

                                    <div class="form-group mt-2">
                                        <label for="password">Mote de passe
                                        </label>
                                        <input id="password" type="password" @keydown="check" v-model="form.password"  class="form-control" name="password" required data-eye>
                                    </div>

                                    <div v-if="hasError" class="alert alert-danger mt-3">
                                        <ul>
                                            <li v-for="(error,index) in errors" :key="index" >{{ error }}</li>
                                        </ul>
                                    </div>

                                    <div class="form-group mt-3">
                                        <button :disabled="disabled" type="submit" class="btn btn-primary piassa-color btn-block">
                                            <v-progress-circular
                                                v-if="loading"
                                                indeterminate
                                                color="white"
                                            ></v-progress-circular>
                                            <span v-else>Connexion</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="footer">
                            Copyright &copy; 2022 &mdash; piassa
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  export default {
      data : () => ({
          form : {
              phone : null,
              password : null,
          },
          disabled : true,
          loading : false,
          hasError : false,
          errors : []
      }),
      methods : {
          login(e)
          {
              this.loading = true
              e.preventDefault()
              axios.get('/sanctum/csrf-cookie').then(response => {
                  axios.post('/api/login',this.form)
                  .then(e=>{
                      this.loading = false
                      this.$store.commit('SET_AUTH',true)
                      this.$store.commit('SET_USER',e.data)
                      localStorage.setItem('isAuth',true)
                      localStorage.setItem('data',JSON.stringify(e.data))
                      this.$router.push('/home')
                  }).catch(err => {

                      if(err.response.status == 422)
                      {
                          let errors = err.response.data.errors
                          let values = Object.values(errors)
                          for (let i = 0;i<values.length;i++)
                          {
                              this.errors.push(values[i][0])
                          }
                          this.hasError = true
                      }
                      this.loading = false
                      this.disabled = true
                      this.removeData()
                      console.log(err)
                  })
              });
          },
          check()
          {
              this.hasError = false
              this.errors = []
              this.disabled = (this.form.phone == null || this.form.password == null) ? true : false
          },
          removeData()
          {
              this.form.phone = null
              this.form.password = null
          }
      }
  }
</script>
