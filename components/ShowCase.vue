<script>
import AppButton from "./AppButton.vue";
export default {
  name: "ShowCase",
  components: { AppButton },
  props: {
    name: String,
  },
};
</script>

<template>
  <div
    class="showcase-container flex flex-col md:flex-row justify-between items-center pb-16 md:pb-32 pt-16 md:pt-10"
  >
    <div
      class="showcase-info w-full md:w-1/2 text-left md:mx-4 md:pl-16 md:mt-6 md:pr-8 px-4 relative"
      data-aos="fade-up"
    >
      <nuxt-img
        src="/imgs/earth_tuto_background_hero.png"
        alt="abstract shape for earth tutor hero background "
        class="fixed -z-10 top-10 opacity-10"
        sizes="sm:90vw md:50vw lg:80vw"
      />
      <h1
        class="text-4xl md:text-6xl w-4/5 font-bold text-black md:text-black py-4"
        data-aos="fade-up-right"
      >
        <span class="text-yellow-400">Access Geology help</span> from anywhere and anytime
      </h1>

      <p class="py-4 text-lg md:text-black">
        Get the best earth science education online with our comprehensive website.
        Students have access to free chapter summaries, quizzes, flashcards, audio
        summaries, and more. Plus, online tutoring is available to help you succeed!
      </p>

      <AppButton name="Explore Topics" link="#topics" class="mt-16" />
    </div>
    <div class="w-1/2 grid place-items-center">
      <div
        class="hero-img-container m-16 grid place-items-center self-center rounded-full overflow-hidden"
      >
        <nuxt-img
          src="/imgs/showcase_img.png"
          format="webp"
          sizes="sm:90vw md:100vw lg:100vw"
          alt="Illustration of a student studying at their desk"
          class="hero-img rounded-full"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-img-container {
  background-color: #f3a08e;
  box-sizing: border-box;
  box-shadow: 25px 5px 0px #ffe9a3, 30px 5px 0px black;
  height: 50vh;
  object-fit: fill;
  object-position: center;
  width: 20vw;
}

.showcase-container {
  height: 100vh;

  @media screen and (max-width: 500px) {
    background-color: white;
    color: black;
  }
}

h1 {
  text-shadow: 1px 4px 2px rgba(0, 0, 0, 0.164);
}

#background-video {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.hero-img {
  object-fit: cover;
  padding: 2rem;
  height: 95%;
}
</style>
