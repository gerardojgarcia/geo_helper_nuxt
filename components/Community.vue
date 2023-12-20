<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "Community",
  components: { FontAwesomeIcon },
};
</script>

<template>
  <div class="community-container bg-white flex flex-col flex-wrap px-4 items-center justify-center pb-16">
    <div class="community-text text-left  md:ml-16 md:mt-16">
      <h4 class="text-6xl mb-4 text-shadow-lg">Earth Science Deep Dives</h4>
      <p class="mb-16 text-gray-500 text-xl w-4/5 md:w-2/5">
        Different topics of interest that go beyond general geology. Satisfy your
        curiosity and get answers to questions you can't find anywhere else.
      </p>
    </div>

    <div class="grid grid-cols-2 place-content-center text-left w-full md:w-3/5 flex-wrap pl-4 md:ml-16">
      <!--Community Card-->
      <div
        class="community-card flex flex-col space-y-6 items-center border-2 border-black mb-8 rounded-md md:w-3/4 p-4 cursor-pointer">
        <nuxt-img src="/kings_canyon_sequoia.webp" width="400px" fit="cover" class="overflow-hidden h-auto" />

        <div class="flex-col self-start">
          <strong class="text-xl text-black">Sequoia and Kings Canyon</strong>
          <p class="text-gray-500 text-sm">
            Geologic History and other interesting information
          </p>
        </div>
      </div>
      <!--Community Card-->
      <div
        class="community-card flex flex-col space-y-6 items-center border-2 border-black mb-8 rounded-md md:w-3/4 p-4 cursor-pointer">
        <nuxt-img src="/san_andreas_fault.webp" />

        <div class="flex-col self-start">
          <strong class="text-xl text-black">San Andreas Fault</strong>
          <p class="text-gray-500 text-sm">
            Geologic History and other interesting information
          </p>
        </div>
      </div>
      <!--Community Card-->
      <div
        class="community-card flex flex-col space-y-6 items-center border-2 border-black mb-8 rounded-md md:w-3/4 p-4 cursor-pointer">
        <nuxt-img src="/san_gabriel.webp" preload format="webp" />

        <div class="flex-col self-start">
          <strong class="text-xl text-black">Gelogy of the San Gabriel Mountains</strong>
          <p class="text-gray-500 text-sm">
            Geologic History and other interesting information
          </p>
        </div>
      </div>
      <!--Community Card-->
      <div
        class="community-card flex flex-col space-y-6 items-center border-2 border-black mb-8 rounded-md md:w-3/4 p-4 cursor-pointer">
        <nuxt-img src="/los_angeles_basin.png" preload format="webp"/>

        <div class="flex-col self-start">
          <strong class="text-xl text-black">Geology of Los Angeles</strong>
          <p class="text-gray-500 text-sm">
            Geologic History and other interesting information
          </p>
        </div>
      </div>
    </div>
  </div>




</template>

<style scoped>
.community-card {
  transition: all 500ms;
  margin-bottom: 25px;
  max-height: 30rem;

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
