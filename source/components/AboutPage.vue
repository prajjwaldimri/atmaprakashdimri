<template lang="pug">
  div
    section.hero.is-medium.is-info.is-bold
      .hero-body
        .container.has-text-centered
          h1.has-text-white.is-size-1.wow.fadeInDown(style="font-family: 'Patua One', cursive;") Hi, I am {{user.fullName}}
          .columns.column.is-12.is-centered(style="margin-left: 0; margin-right: 0; padding: 0; padding-top: 2%")
            figure.image.is-128x128.wow.fadeInUp
              img(v-bind:src="'/showImage/' + user.profileImageId", alt="Author's Image", style="border-radius: 100%; border: 4px solid #65def1;")
          h2.subtitle.wow.fadeIn(style="padding-top: 2%;", v-html="user.bio")

    section.hero.is-white.is-bold
      .hero-body
        .container.has-text-centered
          h1.title.wow.fadeInLeft What I Do
          h2.has.text.white.is-size-6.wow.fadeInRight I am passionate about providing students in remote areas a better education.

    section.hero.is-dark
      .hero-body
        .container.has-text-centered
          h1.title.has.text.white.wow.flip Converse with me!
          .columns.is-centered(style="padding-top: 2%")
            .column.is-1
              a.button.is-dark
                span.icon.is-large(style="color: #25d366")
                  i.fab.fa-3x.fa-whatsapp
            .column.is-1
              a.button.is-dark
                span.icon.is-large(style="color: #3b5998")
                  i.fab.fa-3x.fa-facebook-f
            .column.is-1
              a.button.is-dark
                span.icon.is-large(style="color: #00a1f1")
                  i.fas.fa-3x.fa-envelope
            .column.is-1
              a.button.is-dark
                span.icon.is-large(style="color: #eb0029")
                  i.fas.fa-3x.fa-mobile


</template>

<style lang="scss" scoped>
@import "../scss/main.scss";
</style>


<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    getAboutDetails: function() {
      this.$http.get("/getAboutDetails").then(
        response => {
          this.user = response.body;
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  beforeMount() {
    this.getAboutDetails();
  }
};
</script>

