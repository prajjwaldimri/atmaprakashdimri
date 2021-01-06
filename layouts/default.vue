<template>
  <div class="content">
    <NavBar />
    <Nuxt class="main-content" />
    <Footer />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { NavBar, Footer },
};
</script>

<style lang="scss">
html {
  font-family: "Work Sans", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #f8f8f8;
  background-color: black;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  transition: all 300ms;
}

.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-image: url("~assets/background.jpg?webp");
  background-size: contain;
}

.main-content {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

$gold: #d8ab4e;
</style>
