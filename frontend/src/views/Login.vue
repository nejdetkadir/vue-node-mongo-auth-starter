<template>
  <div>
    <h1>Login</h1>
    <AuthForm :is-login="true"/>
  </div>
</template>

<script>
import AuthForm from "../components/AuthForm"
export default {
  components: {
    AuthForm
  }
}
</script>