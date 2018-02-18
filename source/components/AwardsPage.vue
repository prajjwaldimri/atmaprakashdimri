<template lang="pug">
  div
    .tabs.is-full-width
      tabs(v-for="award in awards" :options="{ useUrlFragment: false }" :key="award.id")
        tab(v-bind:name="award.name" v-html="award.long_description")
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
