<template lang="pug">
  div.mt-5
    h1.text-center Home Page
    .text-center
      button.btn.btn-primary(@click.prevent="doLogout") Logout
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapActions('account', ['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login?logoutSuccess=1')
    }
  }
}
</script>
