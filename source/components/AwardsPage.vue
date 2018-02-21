<template lang="pug">
  .container(style="padding: 4%")
    tabs
      tab(v-for="(award, index) in awards" :name="award.name" :key="award.id" :selected="index==0")
        .columns
          .column.is-6
            h1.subtitle.has-text-info Award Received: {{award.time}}
            .content(v-html="award.long_description")
          .column.is-6
            .carousel.carousel-animated.carousel-animate-slide
              .carousel-container
                .carousel-item.has-background(v-for="(imageId, index) in award.imageIds" v-bind:class="{'is-active' : index == 0}")
                  img.is-background(v-bind:src="'/showImage/' + imageId")
              .carousel-navigation.is-overlay
                .carousel-nav-left
                  i.fa.fa-chevron-left(aria-hidden="true")
                .carousel-nav-right
                  i.fa.fa-chevron-right(aria-hidden="true")
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      awards: []
    };
  },
  methods: {
    getAwards: function() {
      this.$http.get("/getAwards").then(
        response => {
          // location.reload();
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
  mounted() {
    this.getAwards();
  }
};
</script>
