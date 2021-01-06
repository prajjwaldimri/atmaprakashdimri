<template lang="pug">
.works
  ul.timeline
    li.event(data-date="2003")
      img(src="~assets/intel-award-2003.jpg?webp", loading="lazy")
      h2 Intel Award - I
      p Awarded Intel Award in 2003 for excellent work in the area of computer education.

    li.event(data-date="2004")
      img(src="~assets/intel-award-2004.jpg?webp", loading="lazy")
      h2 Intel Award - II
      p Again awarded Intel Award in 2004 for excellent work in the area of computer education.

    li.event(data-date="2004")
      h2 State level computer competition
      p Shaumil Malgudi won the state level computer competition under his guidance.

    li.event(data-date="2008")
      h2 Uttarakhand Government's Award
      p Satyam Malgudi won Uttarakhand Government's computer awards under his guidance.

    li.event(data-date="2009")
      img(src="~assets/sailesh-matyani.jpg?webp", loading="lazy")
      h2 Shailesh Matiyani Award
      p Awarded the highest teaching honor in the state of Uttarakhand.

    li.event(data-date="2011")
      img(src="~assets/dm-honor.jpg?webp", loading="lazy")
      h2 Honored by District Magistrate
      p For his excellent performance in educating students, he was honored by the district magistrate of Chamoli, Uttarakhand.

    li.event(data-date="2011")
      h2 For his inspiring results in the subject of Mathematics
      p He was sent to visit I.I.T. Bombay by the Govt. of India.

    li.event(data-date="2012")
      img(src="~assets/youth-icon.jpg?webp", loading="lazy")
      h2 Awarded the "Excellent National Science Teacher Award"
      p by National Science Academy.

    li.event(data-date="")
      h2 Computer Whiz
      p He has created many software and distribute them for free all over India. Some of them are used for "filing income tax", "managing G.P.F." and "managing pre-boards".

    li.event(data-date="2014")
      img(src="~assets/youth-icon.jpg?webp", loading="lazy")
      h2 Recieved the Youth Icon Award

    li.event(data-date="")
      h2 Success in INSPIRE Awards
      p 3 students under his guidance have reached National Level in INSPIRE.

    li.event(data-date="2015")
      img(src="~assets/president-award.jpg?webp", loading="lazy")
      h2 National Teacher's Award
      p He was awarded one of the highest teacher's honor of India.

    li.event(data-date="")
      img(src="~assets/election-dm.jpg?webp", loading="lazy")
      h2 For his active work in elections
      p He was honored by the district magistrate of Chamoli.

    li.event(data-date="2016")
      img(src="~assets/president-estate.jpg?webp", loading="lazy")
      h2 Chosen for a visit in the presedential estate.
      p One of the 13 people chosen from India.

    li.event(data-date="2017")
      h2 State level quiz competitions
      p Led the team which won the state level quiz competition of Uttarakhand.

    li.event(data-date="")
      h2 Transfer policies
      p Helped in creating transfer policies, surplus policies and promotion policies in Uttarakhand.

    li.event(data-date="Ongoing")
      h2 Keep checking here
      p To see what else is being done.
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