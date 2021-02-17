<template lang="pug">
  div.mt-5
    h1.text-center Sing in
    AuthForm(:is-login="true")
</template>

<script>
import AuthForm from "../components/AuthForm"
export default {
  components: {
    AuthForm
  }
}
</script>