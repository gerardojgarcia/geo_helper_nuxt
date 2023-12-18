<script>
export default {
  name: "Tutoring",
};
</script>

<template>
  <div
    class="tutor-container w-full flex flex-col md:flex-row md:py-16 pb-4 relative items-center justify-between px-4 md:px-24">
    <div class="tutor-info text-left flex flex-col md:m-16 pt-8">
      <div class="mt-8 mb-16" data-aos="fade-up">
        <h3 class="text-5xl ml-8 mb-2 text-shadow-lg">Get Online Help Right Now!</h3>

        <p class="text-lg ml-8">Submit your questions and get the exact help you need.</p>
      </div>

      <div class="tutor-form md:ml-2 w-full" data-aos="fade-up-right">
        <form action="submit" class="flex flex-col  m-auto space-y-6">
          <div class="flex items-center flex-col space-y-4">
            <input class="shadow-md rounded-lg p-2" type="text" name="first-name" placeholder="First Name" required />
            <input class="shadow-md rounded-lg p-2" type="text" name="last-name" placeholder="Last Name" required />
          </div>
          <div class="flex items-center flex-col space-y-4">
            <input class="shadow-md rounded-lg p-2" type="email" name="email" placeholder="Email" required />
            <textarea class="shadow-md rounded-lg p-2" type="text" name="name" placeholder="Question" required></textarea>
          </div>

          <button
            class="self-center text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white w-32 my-8">
            Submit
          </button>
        </form>
      </div>
    </div>

    <div class="tutor-img hidden md:inline mt-2 mr-16 md:ml-8" data-aos="fade-up-right">
      <img src="/geologist_research_1.png" alt="" class="w-full md:3/4" />
    </div>
  </div>
</template>

<style scoped>
.tutor-container {
  background-color: #ffe9a3;
}

.tutor-img {
  width: 50vh;
  height: 50vh;
}

form {
  width: 15vw;
  padding-top: 2rem;
}

input,
textarea {
  width: 25vw;

}

@media (max-width: 800px) {
  .tutor-img {
    width: 50vh;
  }
}
</style>
