<script>
import AppButton from "../components/AppButton.vue";
import Nav from "../components/Nav.vue";
import ShowCase from "../components/ShowCase.vue";
import Topics from "../components/Topics.vue";
import Tutoring from "../components/Tutoring.vue";
import Features from "../components/Features.vue";
import Community from "../components/Community.vue";
import Footer from "../components/Footer.vue";
import ToTop from "../components/ToTop.vue";
import ToBottom from "../components/ToBottom.vue";
import AppImageUploader from "~/components/AppImageUploader.vue";
import AppImageUploaderLaravel from "~/components/AppImageUploaderLaravel.vue";
export default {
  name: "index",

  components: {
    AppImageUploaderLaravel,
    AppButton,
    Nav,
    ShowCase,
    Topics,
    Tutoring,
    Features,
    Community,
    Footer,
    ToTop,
    ToBottom,
    AppImageUploader

  },
  props: {
    name: String,
  },

  data() {
    return {
      topics: [],
    };
  },

  created() {
    this.topics = [
      {
        id: 1,
        topic: "The Earth",
        description: "An overview of the Earth and it's life systems",
        image: "/imgs/img1.webp",
        link: "Earth",
      },

      {
        id: 2,
        topic: "Minerals",
        description: "Everything you wanted to knmow about minerals",
        image: "/imgs/pexels-pixabay-56030.webp",
        link: "Minerals",
      },

      {
        id: 3,
        topic: "Tectonics",
        description: "Everything you wanted to knmow about Plate Tectonics",
        image: "/imgs/img6.webp",
        link: "Tectonics",
      },

      {
        id: 4,
        topic: "Igneous Rocks",
        description: "Everything you wanted to knmow about Igneous Rocks",
        image: "/imgs/img3.webp",
        link: "Igneous",
      },
      {
        id: 5,
        topic: "Volcanoes",
        description: "Everything you ssswanted to knmow about Volcanoes",
        image: "/imgs/pexels-pixabay-87651.webp",
        link: "Volcanoes",
      },
      {
        id: 6,
        topic: "Sedimentary Rocks",
        description: "Everything you wanted to knmow about Sedimentary Rocks",
        image: "/imgs/img6.webp",
        link: "Sedimentary",
      },
      {
        id: 7,
        topic: "Metamorphic Rocks",
        description: "Everything you wanted to knmow about Metamorphic Rocks",
        image: "/imgs/img2.webp",
        link: "Metamorphic",
      },
      {
        id: 8,
        topic: "Earthquakes",
        description: "Everything you wanted to knmow about Earthquakes",
        image: "/imgs/img8.webp",
        link: "Earthquake",
      },
      {
        id: 9,
        topic: "Mountains",
        description: "Everything you wanted to knmow about Mountains",
        image: "/imgs/pexels-eberhard-grossgasteiger-1670187.webp",
        link: "Mountains",
      },
      {
        id: 10,
        topic: "Desert Geology",
        description: "Everything you wanted to knmow about Desert Geology",
        image: "/imgs/img2.webp",
        link: "Desert",
      },
    ];
  },
};
</script>

<template>
  <div>
    <ShowCase />
    <Features />
    <Topics :topics="topics" />
    <!--<AppGeoNews/>-->
    <Tutoring />
    <!--<AppImageUploader/>-->
    <AppImageUploaderLaravel/>
    <Community />
    <ToTop />
    <ToBottom />
  </div>
</template>

<style scoped>
body {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
