<template lang="pug">
  div
    section.hero.is-medium
      .hero-body
        .container.has-text-centered
          h1.title.has-text-white Hello, I am 
          h2.subtitle.has-text-white Atma Prakash Dimri

    .container(style="padding-top: 2%")
      .columns
        .column.is-6
          .box
            figure.image.is-128x128
              img(v-bind:src="'/showImage/' + user.profileImageId", alt="Author's Image")

        .is-divider-vertical(data-content="OR")

        .column.is-6
          .box
</template>

<style lang="scss" scoped>
@import "../scss/main.scss";

.hero {
  background-image: url("https://images.pexels.com/photos/157039/pexels-photo-157039.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb");
  background-size: cover;
}
</style>


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

