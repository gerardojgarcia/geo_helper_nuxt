<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "Community",
  components: { FontAwesomeIcon },
};
</script>

<template>
  <div
    class="community-container bg-white flex flex-col flex-wrap px-4 items-center justify-center pb-16"
  >
    <div class="community-text text-left md:ml-4 md:ml-16 md:mt-16">
      <h4 class="text-6xl mb-4 text-shadow-lg">Earth Science Deep Dives</h4>
      <p class="mb-16 text-gray-500 text-xl w-4/5 md:w-2/5">
        Different topics of interest that go beyond general geology. Satisfy your
        curiosity and get answers to questions you can't find anywhere else.
      </p>
    </div>

    <div
      class="grid grid-cols-2 place-content-center text-left w-full md:w-3/5 flex-wrap pl-4 md:ml-16"
    >
      <!--Community Card-->
      <div
        class="community-card flex flex-col space-y-6 items-center border-2 border-black mb-8 rounded-md md:w-3/4 p-4 cursor-pointer"
      >
        <nuxt-img src="/imgs/img1.webp" />

        <div class="flex-col self-start">
          <strong class="text-xl text-black">Sequoia and Kings Canyon</strong>
          <p class="text-gray-500 text-sm">
            Geologic History and other interesting information
          </p>
        </div>
      </div>
      <!--Community Card-->
      <div
        class="community-card flex flex-col space-y-6 items-center border-2 border-black mb-8 rounded-md md:w-3/4 p-4 cursor-pointer"
      >
        <nuxt-img src="/imgs/img1.webp" />

        <div class="flex-col self-start">
          <strong class="text-xl text-black">San Andreas Fault</strong>
          <p class="text-gray-500 text-sm">
            Geologic History and other interesting information
          </p>
        </div>
      </div>
      <!--Community Card-->
      <div
        class="community-card flex flex-col space-y-6 items-center border-2 border-black mb-8 rounded-md md:w-3/4 p-4 cursor-pointer"
      >
        <nuxt-img src="/imgs/img1.webp" />

        <div class="flex-col self-start">
          <strong class="text-xl text-black">Gelogy of the San Gabriel Mountains</strong>
          <p class="text-gray-500 text-sm">
            Geologic History and other interesting information
          </p>
        </div>
      </div>
      <!--Community Card-->
      <div
        class="community-card flex flex-col space-y-6 items-center border-2 border-black mb-8 rounded-md md:w-3/4 p-4 cursor-pointer"
      >
        <nuxt-img src="/imgs/img1.webp" />

        <div class="flex-col self-start">
          <strong class="text-xl text-black">Geology of Los Angeles</strong>
          <p class="text-gray-500 text-sm">
            Geologic History and other interesting information
          </p>
        </div>
      </div>
      <!--Community Card-->
      <div
        class="community-card flex flex-col space-y-6 items-center border-2 border-black mb-8 p-4 rounded-md md:w-3/4 cursor-pointer"
      >
        <nuxt-img src="/imgs/img1.webp" />

        <div class="community-card-info flex-col self-start">
          <strong class="text-xl text-black">What are our beaches made of? </strong>
          <p class="text-gray-500 text-sm">
            Geologic History and other interesting information
          </p>
        </div>
      </div>

      <!--Community Card-->
      <div
        class="community-card flex flex-col space-y-6 items-center border-2 border-black mb-8 rounded-md md:w-3/4 p-4 cursor-pointer"
      >
        <nuxt-img src="/imgs/img1.webp" />

        <div class="flex-col self-start">
          <strong class="text-xl text-black">Sequoia and Kings Canyon</strong>
          <p class="text-gray-500 text-sm">
            Geologic History and other interesting information
          </p>
        </div>
      </div>
    </div>

    <!-- <div
      class="community-cards max-w-lg flex flex-wrap justify-center ml-2 mt-4 md:mt-24"
    >
       <div
        class="community-card w-52 h-52 flex text-center shadow-md flex-col items-center p-6 mr-4 cursor-pointer hover:shadow-xl"
      >
        <div class="icon-div w-10 h-10 bg-green-200 mt-4 flex">
          <font-awesome-icon
            icon="fa-solid fa-user"
            class="place-center self-center ml-3"
          ></font-awesome-icon>
        </div>
        <div class="data font-bold py-4 mt-4">Geology of Los Angeles</div>
        <div class="title text-gray-400 text-sm">The ground that shakes a metropolis</div>
      </div>
      <div
        class="community-card w-52 h-52 flex text-center shadow-md flex-col items-center mr-4 cursor-pointer hover:shadow-xl"
      >
        <div class="icon-div w-10 h-10 bg-green-200 mt-4 flex">
          <font-awesome-icon
            icon="fa-solid fa-user"
            class="place-center self-center ml-3"
          ></font-awesome-icon>
        </div>
        <div class="data font-bold py-4 mt-4">The San Andreas Fault</div>
        <div class="title text-gray-400 text-sm">
          A real threat or just an overreaction?
        </div>
      </div>
      <div
        class="community-card w-52 h-52 flex text-center shadow-md flex-col items-center mr-4 cursor-pointer hover:shadow-xl"
      >
        <div class="icon-div w-10 h-10 bg-green-200 mt-4 flex">
          <i class="fa-solid fa-user place-center self-center ml-3"></i>
        </div>
        <div class="data font-bold py-4 mt-4">History of the San Gabriel Mountains</div>
        <div class="title text-gray-400 text-sm">The ground that shakes a metropolis</div>
      </div>
      <div
        class="community-card w-52 h-52 flex text-center shadow-md flex-col items-center mr-4 cursor-pointer hover:shadow-xl"
      >
        <div class="icon-div w-10 h-10 bg-green-200 mt-4 flex">
          <i class="fa-solid fa-user place-center self-center ml-3"></i>
        </div>
        <div class="data font-bold py-4 mt-4">The Faults of Los Angeles</div>
        <div class="title text-gray-400 text-sm">The ground that shakes a metropolis</div>
      </div>
    </div>-->
  </div>
</template>

<style scoped>
.community-card {
  transition: all 500ms;
  margin-bottom: 25px;
}

.community-card:hover {
  box-shadow: 4px 5px 0px #f3a08e;
}

.community-card-info {
  background-color: ;
}
.icon-div {
  border-radius: 50rem;
}
</style>
