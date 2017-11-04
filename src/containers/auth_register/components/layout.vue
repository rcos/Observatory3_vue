<template>
    <div class="container h-100">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-4">

                <div class="card card-body">
                    <h4 class="card-title">Register</h4>
                    <p class="card-text" v-if="$route.query.redirect">You need to login first.</p>

                      <form @submit.prevent="login">
                          <fieldset>

                              <FormInput></FormInput>

                              <FormSubmit></FormSubmit>

                              <p v-if="error" class="error">Bad registration information</p>

                          </fieldset>

                      </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
  // import auth from '../../../services/auth.js'
  import FormInput from '@/components/FormInput'
  import FormSubmit from '@/components/FormSubmit'

  export default {
    data () {
      return {
        loading: false,
        error: false
      }
    },

    components: {
      FormInput,
      FormSubmit
    },

    methods: {
      isValid () {
        return !(this.email === '' || this.password === '')
      },
      register () {
        if (!this.isValid()) {
          return
        }

        // let data = {
        //   email: this.email,
        //   password: this.password,
        //   remember: this.remember
        // }

        this.loading = true

        // auth.login(this.email, this.password, (loggedIn) => {
        //   this.loading = false

        //   if (loggedIn) {
        //     this.$router.replace(this.$route.query.redirect || '/')
        //   } else {
        //     this.error = true
        //   }
        // })
      }
    }
  }
</script>