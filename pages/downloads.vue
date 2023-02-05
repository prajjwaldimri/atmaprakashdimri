<template lang="pug">
.downloads
  table.styled-table
    thead
      tr
        th File Name
        th Size
        th Upload Date
        th Download Link

    tbody
      tr
        td G.P.F. Software
        td 200 KB
        td February 2022
        td
          a(
            href="https://drive.google.com/file/d/1bPSIBE7hHILeDF-9VyCPQr466R8tij17/view",
            target="_blank"
          ) Click to download

      tr
        td Income Tax Software
        td 300 KB
        td February 2023
        td
          a(
            href="https://drive.google.com/file/d/1-kauwS4OzSL6klRNXE3A2eg66NnUCyxe/view",
            target="_blank"
          ) Click to download

      tr
        td Fonts
        td 17 MB
        td January 2021
        td
          a(
            href="https://drive.google.com/file/d/1Off53MZbCFRCmmFwQS9NJjopiMUKQ8Ee/view?usp=sharing",
            target="_blank"
          ) Click to download

      tr
        td Preboard Software Class 12th
        td 17 MB
        td February 2023
        td
          a(
            href="https://drive.google.com/file/u/1/d/1ulQ-EpID7plWpqWxjEBO-5OqWlxOGh7K/view?usp=share_link",
            target="_blank"
          ) Click to download

      tr
        td Preboard Software Class 10th
        td 17 MB
        td February 2023
        td
          a(
            href="https://drive.google.com/file/u/1/d/1q_r0LvdPoi0ZmVZJSlMz7dNvBqQc4e63/view?usp=share_link",
            target="_blank"
          ) Click to download
</template>

<style lang="scss" scoped>
$gold: #d8ab4e;

.downloads {
  width: 100vw;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  color: #f8f8f8;
  text-align: center;
}

.styled-table {
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: 1.1rem;
  min-width: 15rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }

  thead {
    tr {
      background-color: $gold;
      color: #333;
      text-align: left;
    }
  }

  th,
  td {
    padding: 1rem 1.5rem;
    text-align: center;
    @media screen and (max-width: 600px) {
      padding: 1rem 0.5rem;
    }
  }

  tbody {
    tr {
      border-bottom: thin solid #f8f8f8;

      &:nth-of-type(even) {
        background-color: #333;
      }

      &:last-of-type() {
        border-bottom: thin solid #f8f8f8;
      }
    }
  }
}
</style>
