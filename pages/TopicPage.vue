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
        image: '/earth_notebook_2.webp',
        link: 'Earth'
      },

      {
        id: 2,
        topic: 'Minerals',
        description: "Everything you wanted to knmow about minerals",
        image: '/watercolor_geode_2.png',
        link: "Minerals"

      },

      {
        id: 3,
        topic: 'Tectonics',
        description: "Everything you wanted to knmow about minerals",
        image: '/tectonics_1.png',
        link: "Tectonics"

      },

      {
        id: 4,
        topic: 'Igneous Rocks',
        description: "Everything you wanted to knmow about minerals",
        image: '/igneous_4.webp',
        link: "Igneous"

      },
      {
        id: 5,
        topic: 'Volcanoes',
        description: "Everything you ssswanted to knmow about minerals",
        image: '/eruption_1.webp',
        link: "Volcanoes"

      },
      {
        id: 6,
        topic: 'Sedimentary Rocks',
        description: "Everything you wanted to knmow about minerals",
        image: '/sedimentary_globe.png',
        link: "Sedimentary"

      },
      {
        id: 7,
        topic: 'Metamorphic Rocks',
        description: "Everything you wanted to knmow about minerals",
        image: '/metamorphism_1.webp',
        link: "Metamorphic"

      },
      {
        id: 8,
        topic: 'Earthquakes',
        description: "Everything you wanted to knmow about minerals",
        image: '/geology_earthquake_2.png',
        link: "Earthquakes"

      },
      {
        id: 9,
        topic: 'Mountains',
        description: "Everything you wanted to knmow about minerals",
        image: '/mountains_1.webp',
        link: "Mountains"

      },
      {
        id: 10,
        topic: 'Desert Geology',
        description: "Everything you wanted to knmow about minerals",
        image: '/desert_geo_1.webp',
        link: "DesertGeology"

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