<template lang="pug">
footer
  p Made with ❤️ by&nbsp;
    span
      a(href="https://prajjwal.me") Prajjwal Dimri
</template>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 2rem;
  height: 2rem;
  opacity: 80%;
}

a,
a:active,
a:visited {
  text-decoration: none;
  color: #f8f8f8;
}
</style>