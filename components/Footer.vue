<template lang="pug">
footer
  p Made with ❤️ by&nbsp;
    span
      a(href="https://prajjwal.me", target="_blank") Prajjwal Dimri
</template>

<style lang="scss" scoped>
footer {
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 2rem;
  height: 2rem;
  opacity: 0.8;
  font-size: 0.8rem;

  @media screen and (max-width: 700px) {
    bottom: inherit;
    top: 0;
    position: fixed;
  }
}

a,
a:active,
a:visited {
  text-decoration: none;
  color: #f8f8f8;
}
</style>