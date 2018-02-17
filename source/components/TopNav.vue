<template lang="pug">
  div
    nav(class="navbar is-fixed-top is-black", role="navigation", aria-label="main navigation")
      .container
        .navbar-brand
          a.navbar-item(href="/") A.P. Dimri
          button.button.navbar-burger
            span
            span
            span
        .navbar-menu
          .navbar-end
            router-link.navbar-item(to="/about") About
            router-link.navbar-item(to="/blogs") Blog
            router-link.navbar-item(to="/gallery") Gallery
            router-link.navbar-item(to="/gallery") Income Tax Software
            router-link.navbar-item(to="/gallery") Awards
</template>

<style scoped>
.router-link-active {
  border-bottom: 2px solid white;
}
</style>
