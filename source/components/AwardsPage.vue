<template lang="pug">
  .container(style="padding: 4%")
    tabs
      tab(v-for="(award, index) in awards" :name="award.name" :key="award.id" :selected="index==0")
        .columns
          .column.is-6
            h1.subtitle.has-text-info Award Received: {{award.time}}
            .content(v-html="award.long_description")
          .column.is-6
            .siema
              figure.image(v-for="(imageId, index) in award.imageIds")
                img(v-bind:src="'/showImage/' + imageId")

</template>

<script>
import moment from "moment";
import Siema from "siema";

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
  updated: function() {
    var siemas = document.querySelectorAll(".siema");
    var mySiemas = [];

    for (const siema of siemas) {
      var tempSiema = new Siema({
        selector: siema,
        duration: 1000,
        easing: "ease-out",
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true
      });
      mySiemas.push(tempSiema);
    }

    mySiemas.forEach(siema => {
      setInterval(() => siema.next(), 5000);
    });
  }
};
</script>
