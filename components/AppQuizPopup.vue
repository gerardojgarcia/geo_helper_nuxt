<script>
export default {
  name: "AppQuizPopup",

  methods: {
    closeModal() {
      const close = document.querySelector("#popup-close");
      const popupContainer = document.querySelector(".answer-container");

      popupContainer.classList.add("hidden");

      console.log("clicked");
    },
  },
};
</script>

<template>
  <div>
    <div
      class="answer-container flex flex-col w-96 p-16 z-10 fixed rounded-xl shadow-lg text-black top-1/2 left-1/3 bg-white opacity-0"
    >
      <div><strong id="answer-text" class="text-2xl m-auto">That's Correct!</strong></div>
      <div class="flex w-auto self-end mt-6 p-2">
        <button @click="closeModal()" id="popup-close" class="text-xl">X</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hidden {
  opacity: 0;
}

.answer-container {
  transition: all 1s ease-out;
}
</style>
