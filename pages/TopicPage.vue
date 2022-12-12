/imgs<script>

  import Topics from "../components/Topics.vue";
  import Tutoring from "../components/Tutoring.vue";
  import Community from "../components/Community.vue";

export default {
  name: "TopicPage",
  components: {Community, Tutoring, Topics},
  data() {
    return {
      topics: []
    }
  },

  created() {
    this.topics = [


      {
        id: 1,
        topic: 'The Earth',
        description: "An overview of the Earth and it's life systems",
        image: '/imgs/img1.png',
        link: 'Earth'
      },

      {
        id: 2,
        topic: 'Minerals',
        description: "Everything you wanted to knmow about minerals",
        image: '/imgs/pexels-pixabay-56030.jpg',
        link: "Minerals"

      },

      {
        id: 3,
        topic: 'Tectonics',
        description: "Everything you wanted to knmow about minerals",
        image: '/imgs/img6.png',
        link: "Tectonics"

      },

      {
        id: 4,
        topic: 'Igneous Rocks',
        description: "Everything you wanted to knmow about minerals",
        image: '/imgs/img3.png',
        link: "Igneous"

      },
      {
        id: 5,
        topic: 'Volcanoes',
        description: "Everything you ssswanted to knmow about minerals",
        image: '/imgs/pexels-pixabay-73830.jpg',
        link: "Volcanoes"

      },
      {
        id: 6,
        topic: 'Sedimentary Rocks',
        description: "Everything you wanted to knmow about minerals",
        image: '/imgs/img6.png',
        link: "Sedimentary"

      },
      {
        id: 7,
        topic: 'Metamorphic Rocks',
        description: "Everything you wanted to knmow about minerals",
        image: '/imgs/img5.png',
        link: "Metamorphic"

      },
      {
        id: 8,
        topic: 'Earthquakes',
        description: "Everything you wanted to knmow about minerals",
        image: '/imgs/img8.png',
        link: "Earthquake"

      },
      {
        id: 9,
        topic: 'Mountains',
        description: "Everything you wanted to knmow about minerals",
        image: '/imgs/pexels-eberhard-grossgasteiger-1670187.jpg',
        link: "Mountains"

      },
      {
        id: 10,
        topic: 'Desert Geology',
        description: "Everything you wanted to knmow about minerals",
        image: '/imgs/img2.png',
        link: "Desert"

      },






    ]
  },
}
</script>




<template>
  <div>

      <Topics :topics="topics"/>
    <Tutoring/>
    <Community/>


  </div>
</template>