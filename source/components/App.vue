<template lang="pug">
  div
    app-topnav
    router-view
</template>

<script>
import TopNav from "./TopNav.vue";

export default {
  components: {
    "app-topnav": TopNav
  }
};
</script>


