<template lang="pug">
  .container
    div(id="galleryContainer")
      .item(v-bind:class="'h' + randomNumber(4) + ' ' +  'v' + randomNumber(4)", v-for="image in images")
        img(v-bind:src="'/showImage/' + image._id")
        .item__overlay
          button(v-on:click="imageClick(image._id)").button View ->
      .item(v-bind:class="'h' + randomNumber(1) + ' ' +  'v' + randomNumber(1)", v-for="image in images")
        img(v-bind:src="'/showImage/' + image._id")
        .item__overlay
          button(v-on:click="imageClick(image._id)").button View ->
      
</template>

<style scoped>
#galleryContainer {
  padding-top: 2%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
}

.item {
  overflow: hidden;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
}

.item img {
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item__overlay {
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background: #ffc60032;
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  transform: translateY(100%);
  transition: 0.2s;
}

.item:hover .item__overlay {
  transform: translateY(0);
}

.item__overlay button {
  background: none;
  border: 2px solid white;
  color: white;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px;
}

.item.v2 {
  grid-row: span 2;
}

.item.v3 {
  grid-row: span 3;
}

.item.v4 {
  grid-row: span 4;
}

.item.h2 {
  grid-column: span 2;
}

.item.h3 {
  grid-column: span 3;
}

.item.h4 {
  grid-column: span 4;
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
    },
    randomNumber: function(limit) {
      return Math.floor(Math.random() * limit);
    },
    imageClick: function(imageId) {
      window.location.href = window.location.origin + "/showImage/" + imageId;
    }
  },
  beforeMount() {
    this.getImages();
  }
};
</script>
