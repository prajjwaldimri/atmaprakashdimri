<template lang="pug">
  
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    getAboutDetails: function() {
      this.$http.get("/getAboutDetails").then(
        response => {
          this.user = response.body;
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  beforeMount() {
    this.getAboutDetails();
  }
};
</script>

