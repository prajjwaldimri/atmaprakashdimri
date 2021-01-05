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
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  .left-content {
    width: 45%;

    h1 {
      color: $gold;
      font-size: 3.5rem;
    }

    p {
      margin-top: 1rem;
      font-size: 1.4rem;
      opacity: 90%;
      line-height: 2rem;
    }
  }

  .right-content {
    width: 48%;
    img {
      width: 100%;
      border-radius: 0.8rem;
      opacity: 90%;
    }
  }
}
</style>