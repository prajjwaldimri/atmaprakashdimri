<template lang="pug">
  .container(style="padding: 4%")
    tabs
      tab(v-for="(award, index) in awards" :name="award.name" :key="award.id" :selected="index==0")
        .columns
          .column.is-6
            h1.subtitle.has-text-info Award Received: {{award.time}}
            .content(v-html="award.long_description")
          .column.is-6
            tiny-slider(:mode="gallery" :controls="false" :loop="true" :autoplay="true" :autoplayButtonOutput="false")
              div(v-for="imageId in award.imageIds" :key="imageId")
                figure.image
                  img(v-bind:src="'/showImage/' + imageId")

</template>

<script>
import moment from "moment";
import VueTinySlider from "vue-tiny-slider";

export default {
  data() {
    return {
      awards: [],
      auto: 3000
    };
  },
  methods: {
    getAwards: function() {
      this.$http.get("/getAwards").then(
        response => {
          this.awards = response.body;
          this.awards.forEach(award => {
            award.time = moment(award.time).format("MMMM Do YYYY");
          });
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  beforeMount() {
    this.getAwards();
  },
  components: {
    "tiny-slider": VueTinySlider
  }
};
</script>

<style lang="scss" scoped>
.slide {
  height: 300px;
  position: relative;
}
</style>

