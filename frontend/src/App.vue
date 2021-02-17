<template lang="pug">
  div
    nav.navbar.navbar-expand-lg.navbar-dark.bg-primary
      .container-fluid
        router-link(to="/" class="navbar-brand") VNMAS
        button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarSupportedContent.collapse.navbar-collapse
          ul.navbar-nav.me-auto.mb-2.mb-lg-0
            li.nav-item(v-for="(r, i) in routes" :key="i")
              router-link(class="nav-link" :to="r.path" active-class="") {{r.name}}
            li.nav-item.dropdown
              a#navbarDropdown.nav-link.dropdown-toggle(href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false') User
              ul.dropdown-menu(aria-labelledby='navbarDropdown')
                li(v-for="(r, i) in authRoutes" :key="i")
                  router-link(class="dropdown-item" :to="r.path") {{r.name}}
    .container
      .row
        .col-md-6.mx-auto
          router-view
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        }
      ],
      authRoutes: [
        {
          name: 'Sign in',
          path: '/login'
        },
        {
          name: 'Sign up',
          path: '/register'
        }
      ]
    }
  }
}
</script>