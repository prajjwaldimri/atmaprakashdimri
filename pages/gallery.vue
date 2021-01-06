<template lang="pug">
.begin

  section.container

        .gallery
            img(src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
            span.description First description
        .gallery
            img(src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
            span.description Second description
        .gallery
            img(src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
            span.description Third description
            
        .gallery
            img(src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
            span.description Fourth description
        .gallery
            img(src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
            span.description Fifth description
        .gallery
            img(src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
            span.description Sixth description
        .gallery
            img(src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
            span.description Seventh description
        .gallery
            img(src="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
            span.description Eighth description
        .gallery
            img(src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
            span.description Ninth description
        .gallery
            img(src="https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
            span.description Tenth description
        .gallery
            img(src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
            span.description Eleventh description
        .gallery
            img(src="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60") 
            span.description Twelfth description
      


</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 300px;
}
.container .gallery img {
  width: 100%;
  height: 100%;
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
  opacity: 0.7;
}

.container .gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #20263f;
}
</style>

