<script >
import AppButton from './AppButton.vue';
export default {
    name: "ShowCase",
    components: { AppButton },
    props: {

      name: String

    }
}
</script>

<template>


  <div class="showcase-container w-full flex flex-col md:flex-row justify-center align-center pb-32 pt-24" >
  <div class="showcase-info w-full md:w-1/2 text-left mx-4 md:pl-24 mt-24 pr-8" data-aos="fade-up">
    <h1 class="text-6xl font-bold py-4 " data-aos="fade-up-right"><span class="text-yellow-500">Access Geology help</span> from anywhere and anytime</h1>

    <p class="py-4">Get the best earth science education online with our comprehensive website. Students have access to free chapter summaries, quizzes, flashcards, audio summaries, and more. Plus, online tutoring is available to help you succeed. Try us out today!</p>


      <AppButton
      name='Explore Topics'
      link="#topics"
      class="mt-16"
      />

  </div>

  <div class="showcase-img w-full  mt-2 md:w-1/2 flex " data-aos="fade-up-right">



    <img src="/imgs/showcase-img.svg" alt="Young person studying at a computer" class=" w-full md:w-3/4 place-center self-center">


  </div>

  </div>

</template>

<style scoped>

.showcase-container {
  height: 85vh;
}

h1 {
  text-shadow:   1px 4px 2px rgba(0, 0, 0, 0.164);
}

</style>
