<template lang="pug">
  .container(style="padding-top: 4%; padding-bottom: 4%;")
    tabs
      tab(v-for="(award, index) in awards" :name="award.name" v-html="award.long_description" :key="award.id" :selected="index==0")
</template>

<script>
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
