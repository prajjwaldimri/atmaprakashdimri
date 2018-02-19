<template lang="pug">
  .container(style="padding: 4%")
    tabs
      tab(v-for="(award, index) in awards" :name="award.name" :key="award.id" :selected="index==0")
        .columns
          .column.is-8
            h1.subtitle.has-text-info Award Received: {{award.time}}
            .content(v-html="award.long_description")
          .column.is-4
            figure.image
              img(v-bind:src="'/showImage/' + award.heroImageId")
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
  }
};
</script>
