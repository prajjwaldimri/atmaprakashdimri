<template lang="pug">
  .container
    div(id="blogContainer")    
      .card(v-for="blog in blogs", v-on:click="blogClick(blog._id)")
        .card-image
          figure.image.is-4by3
            img(src="https://bulma.io/images/placeholders/1280x960.png", alt="Blog Image")
        .card-content
          .media
            .media-left
              figure.image.is-48x48
                img(src="https://bulma.io/images/placeholders/96x96.png", alt="Author's Image")
            .media-content
              p.title.is-4 {{blog.title}}
              p.subtitle.is-6 @atmaprakashdimri
          
          .content {{blog.content}}
            br
            br
            time(v-bind:dateTime="blog.updated_at")  {{blog.updated_at}}
      
</template>

<style lang="scss" scoped>
@import "../scss/main.scss";

#blogContainer {
  padding-top: 2%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.media-content {
  overflow-y: hidden;
}

.card:hover {
  cursor: pointer;
}
</style>



<script>
import moment from "moment";

export default {
  data() {
    return {
      blogs: []
    };
  },
  methods: {
    getBlogPosts: function() {
      this.$http.get("/allBlogPosts").then(
        response => {
          this.blogs = response.body;
          this.blogs.forEach(blog => {
            blog.updated_at = moment(blog.updated_at).format(
              "MMMM Do YYYY, h:mm a"
            );
          });
        },
        err => {
          console.log(err);
        }
      );
    },
    blogClick: function(blogId) {
      window.location.href = window.location.origin + "/blog/" + blogId;
    }
  },
  beforeMount() {
    this.getBlogPosts();
  }
};
</script>



