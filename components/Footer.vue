<script>
export default {
  name: "Footer",
};
</script>

<template>
  <div id="footer" class="footer-container grid grid-cols-4 pb-16 gap-4">
    <div class="footer-media flex flex-col items-center">
      <div>
        <strong class="text-3xl">EarthTutor</strong>
        <p>email: hi@earthtutor.org</p>
        <p>phone: 323-450-3223</p>
      </div>
    </div>

    <div class="footer-media flex flex-col items-center">
      <div>
        <strong class="text-3xl">Tutoring</strong>
        <p>Get help now</p>
        <p>Schedule a session</p>
      </div>
    </div>

    <div class="footer-media flex flex-col flex-start">
      <div>
        <strong class="text-3xl">Topics</strong>
      </div>

      <ul class="footer-topics-links grid grid-cols-2 pt-4">
        <li class="fa-brands fa-facebook">Earth</li>
        <li class="fa-brands fa-youtube">Minerals</li>
        <li class="fa-brands fa-twitter">Earthquakes</li>
        <li class="fa-brands fa-instagram">Sedimentary Rocks</li>
        <li>Metamorphic Rocks</li>
        <li>Igneous Rocks</li>
        <li>Plate Tectonics</li>
        <li>Volcanoes</li>
        <li>Mountains</li>
      </ul>
    </div>

    <div class="contact flex flex-col">
      <div class="self-start mb-8">
        <strong class="footer-strong text-5xl text-black">Get in Touch</strong>
      </div>

      <div class="flex w-full flex-col items-center">
        <form action="submit ">
          <div class="flex flex-col w-full">
            <input
              class="shadow-md form-name rounded-sm bg-white p-1 mb-4"
              type="text"
              v-model="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
              class="shadow-md form-email rounded-sm bg-white p-1"
              type="text"
              v-model="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <button
            class="form-btn self-center text-white rounded-sm bg-black w-full duration-100 px-4 py-2 border-0 hover:text-white my-8"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  background-color: #ffe9a3;
  padding: 4rem;
}

.social-media > i {
  font-size: 1.7rem;
  color: var(--accent-clr);
  margin-right: 1rem;
}

.footer-topics-links li {
  margin-right: 0.5rem;
}

.form-name {
  box-shadow: 4px 5px 0px black;
}

.form-email {
  box-shadow: 4px 5px 0px black;
}

.form-btn:hover {
  box-shadow: 4px 5px 0px #f3a08e;
}
</style>
