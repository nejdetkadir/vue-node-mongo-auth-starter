<template lang="pug">
  form
    .alert.alert-danger.text-center(v-if="backendError") {{backendError}}
    .mb-3(v-if="!isLogin")
      label.form-label Name
      input.form-control(type='text' v-model="form.name")
    .mb-3
      label.form-label Email address
      input.form-control(type='email' v-model="form.email")
    .mb-3
      label.form-label Password
      input.form-control(type='password' v-model="form.password")
    button.btn.btn-primary(@click.prevent="auth") {{isLogin ? 'Login' : 'Register'}}
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      backendError: ''
    }
  },
  methods: {
    ...mapActions('account', ['login', 'registerUser']),
    async auth() {
      this.backendError = ''
      try {
        if (this.isLogin) {
          await this.login({user: {
            email: this.form.email,
            password: this.form.password
          }})
          this.$router.push('/')
        } else {
          await this.registerUser({user: this.form})
          this.$router.push('/login?registerSuccess=1')
        }
      } catch (e) {
        this.backendError = e.response.data.message
      }
    }
  },
  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.form{
  display: inline-grid;
}
input{
  margin: 0.5rem;
}
</style>