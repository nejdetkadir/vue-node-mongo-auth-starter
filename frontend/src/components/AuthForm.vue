<template>
  <div class="form">
    <h1 v-if="backendError">{{backendError}}</h1>
    <input type="text" v-model="form.name" placeholder="Your name" v-if="!isLogin">
    <input type="email" v-model="form.email" placeholder="Your email">
    <input type="password" v-model="form.password" placeholder="Your password">
    <button @click.prevent="auth">{{isLogin ? 'Login' : 'Register'}}</button>
  </div>
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
          this.$router.push('/home')
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