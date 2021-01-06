<template lang="pug">
.top-nav
  .nav-header
    img(src="~/assets/brand.svg", height="18")
  .nav-items
    NuxtLink(to="/") about
    NuxtLink(to="/works") works
    NuxtLink(to="/gallery") gallery
    NuxtLink(to="/downloads") downloads
</template>

<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
  height: 3rem;
  max-height: 3rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 100;

  @media screen and (max-width: 700px) {
    top: inherit;
    bottom: 0;
    justify-content: center;
    background-color: #111;
  }
}

.nav-header {
  @media screen and (max-width: 700px) {
    display: none;
  }
}

.nav-items {
  a {
    margin: 0 0.5rem;
  }
  display: flex;
}

a:link,
a:visited {
  color: #f8f8f8;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

a:hover {
  border-bottom: 1px solid #f8f8f8;
  width: max-content;
}

a.nuxt-link-exact-active.nuxt-link-active {
  border-bottom: 1px solid #d8ab4e;
  width: max-content;
}
</style>

<script>
export default {};
</script>