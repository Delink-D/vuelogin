<template>
  <div class='md-layout md-gutter login'>
    <div class='md-layout-item'></div>

    <!-- login form -->
    <form novalidate class="md-layout-item login-card" @submit.prevent="validateUser">
      <md-card>
        <md-card-header class='login-card--header'>
          <div class='md-title'>Login App</div>
        </md-card-header>

        <md-card-content>
          <!-- userd filed -->
          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>

          <!-- password field -->
          <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input type="password" name="password" id="password" v-model="form.password" />
            <span class="md-error" v-if="!$v.form.password.required">The Password is required</span>
            <span class="md-error" v-else-if="!$v.form.password.minLength">Your password is shorter</span>
          </md-field>

          <md-checkbox v-model="remember" class="md-primary">Remember Me</md-checkbox>
        </md-card-content>

        <!-- progress-bar after login -->
        <md-progress-bar md-mode="indeterminate" v-if="showProgressBar" />

        <md-card-actions class='md-alignment-left'>
          <md-button type="submit" class="md-raised md-primary" :disabled="submitButtonDisabled">Login</md-button>
        </md-card-actions>
      </md-card> <!-- end of login card -->

      <md-snackbar :md-active.sync="userLoggedin">The user {{ loggedinUser }} was Loggedin successuly!</md-snackbar>
      <md-snackbar :md-active.sync="wrongCredentilas">
        <span>The userId or password are wrong, pls try again!</span>
        <md-button class="md-primary" @click="wrongCredentilas = false">Close</md-button>
      </md-snackbar>
    </form> <!-- end of form -->

    <div class='md-layout-item'></div>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

  export default {
    name: 'LoginComponet',
    mixins: [validationMixin],
    data: () => ({
      form: {
        email: null,
        password: null
      },
      remember: true,
      userLoggedin: false,
      showProgressBar: false,
      loggedinUser: null,
      submitButtonDisabled: false,
      wrongCredentilas: false
    }),
    validations: {
      form: {
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6)
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        /** call function to clear the form */
        this.form.email = null
        this.form.password = null
      },
      loginUser () {
        /** function to login user */
        this.showProgressBar = true

        // call API to authenticate the username and password
        if (this.form.email === 'admin@delink.com' && this.form.password === 'admin321') {
          /** set timeout while login is still running */
          window.setTimeout(() => {
            console.log('The user is loged in as => ' + this.form.email)

            this.loggedinUser = `${this.form.email}`
            this.userLoggedin = true
            this.showProgressBar = false
            this.clearForm()
          }, 2000)
        }else {
          window.setTimeout(() => {
            console.log('Check your credentilas => ' + this.form.email)

            this.showProgressBar = false
            this.wrongCredentilas = true
          }, 2000)
          
        }
      },
      validateUser () {
        /** check if form is valid */
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.loginUser()
        }
      }
    }
  }
</script>

<style scoped>
  .login {
    padding-top: 70px;
  }
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  .login-card {
    min-width: 400px;
    height: auto;
  }
  .login-card--header {
    text-align: center;
  }
</style>