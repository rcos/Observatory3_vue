<template>
    <div class="container h-100">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-4">

                <div class="card card-body">
                    <h4 class="card-title">Register</h4>
                    <p class="card-text" v-if="$route.query.redirect">You need to login first.</p>

                      <form @submit.prevent="register">
                          <fieldset>

                              <FormInput v-model="name" name='name' label='Name' placeholder='Name'/>
                              <FormInput v-model="email" name='email' label='Email' placeholder='Email'/>
                              <FormInput v-model="github.login" name='github'  label='GitHub Username' placeholder='GitHub Username'/>
                              <FormInput v-model="password" name='password' label='Password' placeholder='Password' type='password'/>
                              <FormInput v-model="passwordverify" name='passwordverify' label='Confirm Password' placeholder='Confirm Password' type='password'/>

                              <FormSubmit :props="{ label: 'Sign Up', css: 'btn-success btn-block' }"/>

                              <p v-if="error" class="error">Bad registration information</p>
                              <p v-else class="success">Successfully Regisetered!</p>

                          </fieldset>

                      </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import FormInput from '@/components/FormInput'
  import FormSubmit from '@/components/FormSubmit'
  import store from '@/store'

  export default {
    data () {
      return {
        name: 'Name Namerson',
        email: 'foo@bar.com',
        github: {
          login: 'boofar'
        },
        password: 'abc123',
        passwordverify: 'abc123',
        error: false
      }
    },

    components: {
      FormInput,
      FormSubmit
    },

    computed: {
      loading () {
        return store.getters['auth/loading']
      }
    },

    methods: {
      isValid () {
        return !(this.name === '' || this.email === '' || this.github === '' || this.password === '' || this.passwordverify === '' || this.password !== this.passwordverify)
      },
      register () {
        if (!this.isValid()) {
          this.error = true
          return
        }

        store.dispatch('auth/register')
        // this.error = false
        // this.loading = true
      }
    }
  }
</script>
