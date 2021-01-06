<template lang="pug">
.works
  ul.timeline
    li.event(data-date="2003")
      img(src="~assets/intel-award-2003.jpg?webp")
      h2 Intel Award
      p Awarded Intel Award in 2003 for excellent work in the area of computer education.

    li.event(data-date="2004")
      img(src="~assets/intel-award-2004.jpg?webp")
      h2 Intel Award
      p Again awarded Intel Award in 2004 for excellent work in the area of computer education.

    li.event(data-date="2011")
      img(src="~assets/youth-icon.jpg?webp")
      h2 Youth Icon
      p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>

<style lang="scss" scoped>
$gold: #d8ab4e;

$spacing: 3rem;
$radius: 2rem;

$date: 15rem;
$dotborder: 0.4rem;
$dot: 0.8rem;
$line: 0.4rem;

.works {
  width: 100%;
  margin-top: $spacing;
  text-align: center;
}

.timeline {
  border-left: $line solid $gold;
  border-bottom-right-radius: $radius;
  border-top-right-radius: $radius;
  line-height: 1.5rem;
  padding: $spacing;
  margin: $spacing auto;
  margin-left: $spacing * 10;
  position: relative;
  list-style: none;
  text-align: left;
  max-width: 50%;

  @media screen and (max-width: 1000px) {
    margin-left: $spacing * 2.3;
    max-width: 90%;
  }

  .event {
    padding-bottom: ($spacing * 0.5);
    margin-bottom: $spacing;
    position: relative;

    img {
      height: 14rem;
    }

    h2 {
      margin-top: 2rem;
    }

    p {
      margin-top: 1rem;
    }

    &:before,
    &:after {
      position: absolute;
      display: block;
      top: 0;
    }

    &:before {
      left: ((($date * 0.6) + $spacing + $line + $dot + ($dotborder * 2)) * 1.5) *
        -1;
      color: $gold;
      content: attr(data-date);
      text-align: right;
      font-size: 2rem;
      min-width: $date;
      font-weight: 400;
    }

    &:after {
      box-shadow: 0 0 0 4px $gold;
      left: ($spacing + $line + ($dot * 0.35)) * -1;
      background: #f8f8f8;
      border-radius: 50%;
      height: $dot;
      width: $dot;
      content: "";
    }
  }
}
</style>

<script>
export default {};
</script>