<template>
  <div>
    <h1>Home page</h1>
    <button @click.prevent="doLogout">Logout</button>
  </div>
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
