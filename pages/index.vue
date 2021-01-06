<template lang="pug">
.about
  .left-content
    h1 Atma Prakash Dimri
    p is a president award winning teacher currently working as a lecturer in Physics at Government Inter College Urgam, Chamoli, Uttarakhand.
  .right-content
    img(src="~assets/president-award.jpg?webp")
</template>


<style lang="scss" scoped>
$gold: #d8ab4e;

.about {
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }

  .left-content {
    width: 45%;

    @media screen and (max-width: 700px) {
      width: 90%;
    }

    h1 {
      color: $gold;
      font-size: 3.5rem;
      @media screen and (max-width: 700px) {
        font-size: 2rem;
        margin-top: 2rem;
      }
    }

    p {
      margin-top: 1rem;
      font-size: 1.4rem;
      opacity: 90%;
      line-height: 2rem;
      @media screen and (max-width: 700px) {
        font-size: 1rem;
        line-height: 1.3rem;
      }
    }
  }

  .right-content {
    @media screen and (max-width: 700px) {
      width: 90%;
    }
    width: 48%;
    img {
      width: 100%;
      border-radius: 0.8rem;
      opacity: 90%;
    }
  }
}
</style>