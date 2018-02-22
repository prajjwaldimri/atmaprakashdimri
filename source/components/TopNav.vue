<template lang="pug">
  div
    nav(class="navbar is-fixed-top is-black", role="navigation", aria-label="main navigation")
      .container
        .navbar-brand
          a.navbar-item.is-size-3(href="/", style="font-family: 'Sacramento', cursive;") A.P. Dimri
          button.button.navbar-burger.is-black(v-on:click="navbarMenuClick")
            span
            span
            span
        .navbar-menu
          .navbar-end
            router-link.navbar-item(to="/" exact) About
            router-link.navbar-item(to="/blogs") Blog
            router-link.navbar-item(to="/gallery") Gallery
            router-link.navbar-item(to="/awards") Awards
            router-link.navbar-item(to="/downloads") Downloads

</template>

<style lang="scss" scoped>
.router-link-active {
  border-bottom: 4px solid #06d6a0;
}
</style>

<script>
export default {
  methods: {
    navbarMenuClick: function() {
      document.querySelector(".navbar-menu").classList.toggle("is-active");
      document.querySelector(".navbar-burger").classList.toggle("is-active");
    }
  }
};
</script>

