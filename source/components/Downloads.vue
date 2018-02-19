<template lang="pug">
  .container(style="padding: 4%")
    section.accordions
      .accordion.is-active
        .accordion-header
          p Income Tax Related Software
          button.toggle(aria-label="toggle")
        .accordion-body
          table.table.is-hoverable.is-fullwidth
            thead
              tr
                th
                  abbr(title="Name")
                  | File Name
                th
                  abbr(title="Uploaded")
                  | Upload Date
                th
                  abbr(title="Dl. Link")
                  | Download Link

            tbody
              tr(v-for="file in files" v-if="file.type == 'income-tax-related'")
                td  {{file.name}}
                td  {{file.created_at}}
                td
                  p.field
                    a.button.is-primary(v-on:click="fileDownloadClick(file.fileId)")
                      span.icon
                        i.fas.fa-download
                      span Download


      .accordion.is-active
        .accordion-header
          p Government Orders
          button.toggle(aria-label="toggle")
        .accordion-body
          table.table.is-hoverable.is-fullwidth
            thead
              tr
                th
                  abbr(title="Name")
                  | File Name
                th
                  abbr(title="Uploaded")
                  | Upload Date
                th
                  abbr(title="Dl. Link")
                  | Download Link

            tbody
              tr(v-for="file in files" v-if="file.type == 'government-orders'")
                td  {{file.name}}
                td  {{file.created_at}}
                td
                  p.field
                    a.button.is-primary(v-on:click="fileDownloadClick(file.fileId)")
                      span.icon
                        i.fas.fa-download
                      span Download

      .accordion.is-active
        .accordion-header
          p Exam Software
          button.toggle(aria-label="toggle")
        .accordion-body
          table.table.is-hoverable.is-fullwidth
            thead
              tr
                th
                  abbr(title="Name")
                  | File Name
                th
                  abbr(title="Uploaded")
                  | Upload Date
                th
                  abbr(title="Dl. Link")
                  | Download Link

            tbody
              tr(v-for="file in files" v-if="file.type == 'exam-software'")
                td  {{file.name}}
                td  {{file.created_at}}
                td
                  p.field
                    a.button.is-primary(v-on:click="fileDownloadClick(file.fileId)")
                      span.icon
                        i.fas.fa-download
                      span Download

      .accordion.is-active
        .accordion-header
          p Other
          button.toggle(aria-label="toggle")
        .accordion-body
          table.table.is-hoverable.is-fullwidth
            thead
              tr
                th
                  abbr(title="Name")
                  | File Name
                th
                  abbr(title="Uploaded")
                  | Upload Date
                th
                  abbr(title="Dl. Link")
                  | Download Link

            tbody
              tr(v-for="file in files" v-if="file.type == 'other'")
                td  {{file.name}}
                td  {{file.created_at}}
                td
                  p.field
                    a.button.is-primary(v-on:click="fileDownloadClick(file.fileId)")
                      span.icon
                        i.fas.fa-download
                      span Download


</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      files: []
    };
  },
  methods: {
    getFiles: function() {
      this.$http.get("/allFiles").then(
        response => {
          this.files = response.body;
          this.files.forEach(file => {
            file.created_at = moment(file.created_at).format(
              "MMMM Do YYYY, h:mm a"
            );
          });
        },
        err => {
          console.log(err);
        }
      );
    },
    fileDownloadClick: function(fileId) {
      window.location.href = window.location.origin + "/downloadFile/" + fileId;
    }
  },
  beforeMount() {
    this.getFiles();
  }
};
</script>

<style lang="scss" scoped>
.accordion-header {
  padding: 1em 1em !important;
}

.toggle {
  background-color: hsla(0, 0%, 4%, 1.2) !important;
}
</style>



