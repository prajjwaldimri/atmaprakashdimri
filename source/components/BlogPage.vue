<template lang="pug">
  div
    section.hero.is-medium.is-dark.blog-header(v-bind:style="{'background-image': heroImageUrl}")
      .hero-body.has-text-centered.blog-header-body
        .container(style="padding: 4%")
          .title.is-size-1 {{blog.title}}
          .subtitle(style="padding-top:2%") by {{blog.author.fullName}}
          social-sharing(inline-template)
            div
              network(network="email")
                span.icon.is-large
                  i.fas.fa-envelope.fa-2x
              network(network="facebook")
                span.icon.is-large
                  i.fab.fa-facebook.fa-2x
              network(network="twitter")
                span.icon.is-large
                  i.fab.fa-twitter-square.fa-2x
              network(network="whatsapp")
                span.icon.is-large
                  i.fab.fa-whatsapp-square.fa-2x
    .content.blog-content
      .container(v-html="blog.content")

</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {
        author: {}
      },
      heroImageUrl: ""
    };
  },
  methods: {
    getBlogDetails: function() {
      this.$http.get(`/blogContent/${this.id}`).then(
        response => {
          this.blog = response.body;
          this.heroImageUrl = `url('/showImage/${this.blog.heroImageId}')`;
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  beforeMount() {
    this.getBlogDetails();
  }
};
</script>

<style scoped>
.blog-header {
  background-size: contain;
}

.blog-header-body {
  background: rgba(0, 0, 0, 0.7);
  height: inherit;
}

.blog-content {
  padding: 5%;
}
</style>


