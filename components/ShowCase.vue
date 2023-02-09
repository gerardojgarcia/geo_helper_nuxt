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
    class="showcase-container flex flex-col md:flex-row justify-center align-center pb-16 md:pb-32 pt-40 md:pt-24"
  >
    <div
      class="showcase-info w-full md:w-1/2 text-left md:mx-4 md:pl-24 md:mt-24 md:pr-8 px-4"
      data-aos="fade-up"
    >
      <h1 class="text-4xl md:text-6xl w-full font-bold py-4" data-aos="fade-up-right">
        <span class="text-yellow-700">Access Geology help</span> from anywhere and anytime
      </h1>

      <p class="py-4 w-full">
        Get the best earth science education online with our comprehensive website.
        Students have access to free chapter summaries, quizzes, flashcards, audio
        summaries, and more. Plus, online tutoring is available to help you succeed. Try
        us out today!
      </p>

      <AppButton name="Explore Topics" link="#topics" class="mt-16" />
    </div>
    <nuxt-img
      src="/showcase-img.png"
      format="webp"
      sizes="sm:90vw md:50vw lg:100vw"
      alt="Illustration of a student studying at their desk"
    />
  </div>
</template>

<style scoped>
.showcase-container {
  height: 85vh;
}

h1 {
  text-shadow: 1px 4px 2px rgba(0, 0, 0, 0.164);
}

.showcase-img {
  width: 65%;
}
</style>
