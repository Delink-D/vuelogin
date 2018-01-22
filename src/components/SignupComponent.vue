<template>
  <div class="md-layout md-gutter">
    <!-- signup form -->
    <form novalidate class="md-layout-item signup-card" @submit.prevent="validateUser">
      <md-card>
        <md-card-header class='signup-card--header'>
          <div class='md-title d-text-align--c'>Sign Up User</div>
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
        </md-card-content>

        <!-- progress-bar after signup -->
        <md-progress-bar md-mode="indeterminate" v-if="showProgressBar" />

        <md-card-actions class='md-alignment-left'>
          <md-button type="submit" class="md-raised md-primary" :disabled="submitButtonDisabled">Login</md-button>
        </md-card-actions>
      </md-card> <!-- end of signup card -->
    </form>

    <!-- snackbar here -->
    <md-snackbar :md-active.sync="errorLogin">
      <span>ERROR: Could not login at this time!</span>
      <md-button class="md-primary" @click="errorLogin = false">Close</md-button>
    </md-snackbar>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import firebase from 'firebase'
  import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

  export default {
    name: 'SignupComponent',
    mixins: [validationMixin],
    data: () => ({
      form: {
        email: null,
        password: null
      },
      showProgressBar: false,
      errorLogin: false,
      submitButtonDisabled: false
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
      validateUser () {
        /** check if form is valid */
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.signupUser()
        }
      },
      signupUser () {
        /** function to login user */
        this.showProgressBar = true

        /** sign using firebase API */
        firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(user => {
          this.showProgressBar = false
          this.clearForm()

          /** redirect to home page */
          this.$router.replace('home')
        })
        .catch(err => {
          this.showProgressBar = false
          this.errorLogin = true
        })
      },
      clearForm () {
        /** call function to clear the form */
        this.form.email = null
        this.form.password = null
      }
    }
  }
</script>

<style scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  .signup-card {
    max-width: 500px;
  }
</style>