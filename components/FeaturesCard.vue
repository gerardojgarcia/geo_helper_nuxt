<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "FeaturesCard",
  components: { FontAwesomeIcon },
  props: {
    icon: String,
    data: String,
    title: String,
  },
};
</script>

<template>
  <div
    class="feature-card bg-white bg-opacity-50 backdrop-blur-md rounded-lg text-left my-4 p-8 md:mx-4 w-72 flex flex-col justify-start"
  >
    <div class="icon-box self-start grid place-items-center bg-white">
      <font-awesome-icon :icon="icon" class="text-5xl text-black" />
    </div>
    <p class="data mt-8 text-4xl font-bold text-black text-left">{{ data }}+</p>
    <p class="text-black text-2xl m-2 text-left">{{ title }}</p>
  </div>
</template>

<style scoped>
.icon-box {
  margin-top: 25px;
  width: 50px;
  height: 50px;
  border-radius: 50rem;
}

i {
  justify-self: center;
  margin-top: 15px;
}
</style>
