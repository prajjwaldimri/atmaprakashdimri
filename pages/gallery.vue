<template lang="pug">
.begin
  section.container
    .gallery
      img(src="~assets/president-award.jpg?webp", loading="eager")
      span.description Receiving National Award to Teachers

    .gallery
      img(src="~assets/dm-honor.jpg?webp", loading="eager")
      span.description Honored by District Magistrate, Chamoli

    .gallery
      img(src="~assets/election-dm.jpg?webp", loading="lazy")
      span.description Award for excellent work during elections

    .gallery
      img(src="~assets/intel-award-2003.jpg?webp", loading="lazy")
      span.description Intel Award of 2003.

    .gallery
      img(src="~assets/president-estate.jpg?webp", loading="lazy")
      span.description In Rashtrapati Bhavan

    .gallery
      img(src="~assets/youth-icon.jpg?webp", loading="lazy")
      span.description Recieving Youth Icon Award

    .gallery
      img(src="~assets/intel-award-2004.jpg?webp", loading="lazy")
      span.description Intel Award of 2004

    .gallery
      img(src="~assets/sailesh-matyani.jpg?webp", loading="lazy")
      span.description Shailesh Matiyani Award

    .gallery
      img(src="~assets/award-red-board.jpg?webp", loading="lazy")
      span.description Recognition for excellent work

    .gallery
      img(src="~assets/chamoli-times.jpg?webp", loading="lazy")
      span.description Award by Chamoli Times

    .gallery
      img(src="~assets/president-group.jpg?webp", loading="lazy")
      span.description During visit to Rashtrapati Bhavan

    .gallery
      img(src="~assets/president-group-2.jpg?webp", loading="lazy")
      span.description Group photo with president
</template>

<style lang="scss" scoped>
.begin {
  padding: 7rem;
  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
}
.container {
  display: grid;
  //grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(399px, 1fr));
  grid-auto-rows: 300px;
}
.container .gallery img {
  width: 95%;
  height: 95%;
  object-fit: cover;
}

img {
  border-radius: 10px;
  padding: 5px;
}

.description {
  display: none;
  position: absolute;
  font-size: 1.2rem;
  padding: 1rem;
}

.container .gallery:hover {
  transform: scale(1.1);
}
.container .gallery:hover .description {
  display: block;
  text-align: center;
}

.container .gallery:hover img {
  opacity: 0.4;
}

.container .gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #d8ab4e;
  flex-basis: content;
}
</style>

