<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'LoginComponet',
  data () {
    return {
      msg: 'Login componet'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-card {
    min-width: 400px;
    height: auto;
  }
  .login-card--header {
    text-align: center;
  }
</style>
