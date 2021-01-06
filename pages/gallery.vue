<template lang="pug">
.begin

  section.container

        .gallery
            img(src="~assets/president-award.jpg?webp")
            span.description First description
        .gallery
            img(src="~assets/dm-honor.jpg?webp")
            span.description Second description
        .gallery
            img(src="~assets/election-dm.jpg?webp")
            span.description Third description
            
        .gallery
            img(src="~assets/intel-award-2003.jpg?webp")
            span.description Fourth description
        .gallery
            img(src="~assets/intel-award-2004.jpg?webp")
            span.description Fifth description
        .gallery
            img(src="~assets/president-estate.jpg?webp")
            span.description Sixth description
        .gallery
            img(src="~assets/youth-icon.jpg?webp")
            span.description Seventh description
        .gallery
            img(src="~assets/sailesh-matyani.jpg?webp")
            span.description Eighth description
        .gallery
            img(src="~assets/award-red-board.jpg?webp")
            span.description Ninth description
        .gallery
            img(src="~assets/chamoli-times.jpg?webp")
            span.description Tenth description
        .gallery
            img(src="~assets/president-group.jpg?webp")
            span.description Eleventh description
        .gallery
            img(src="~assets/president-group-2.jpg?webp")
            span.description Twelfth description
      


</template>

<style lang="scss" scoped>
.begin {
  padding: 7rem;
}
.container {
  display: grid;
  //grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
}

.container .gallery:hover {
  transform: scale(1.1);
}
.container .gallery:hover .description {
  display: block;
  text-align: center;
}

.container .gallery:hover img {
  opacity: 0.1;
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

