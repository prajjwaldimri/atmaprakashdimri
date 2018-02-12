<template lang="pug">
  .container
    div(id="galleryContainer")
      .card(v-for="image in images")
        .card-image
          figure.image.is-4by2
            img(v-bind:src="'/showImage/' + image._id")
</template>

<style scoped>
#galleryContainer {
  display: grid;
  grid-template-columns: auto;
}
</style>


<script>
export default {
  data() {
    return {
      images: []
    };
  },
  methods: {
    getImages: function() {
      this.$http.get("/allImages").then(
        response => {
          this.images = response.body;
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  beforeMount() {
    this.getImages();
  }
};
</script>
