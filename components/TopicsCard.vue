<script>
import AppButton from "./AppButton.vue";

export default {
  name: "TopicsCard",
  props: {
    name: String,
    topic: Object,
  },
  components: { AppButton },
};
</script>

<template>
  <div
    class="topic-card rounded-lg flex flex-col shadow-md hover:shadow-xl mx-4 text-left cursor-pointer"
  >
    <nuxt-img
      :src="topic.image"
      alt="Image for Topic Content"
      class="topic-img rounded-lg mb-4"
      sizes="sm:100vw md:100vw lg:100vw"
    />
    <strong class="mx-4 text-3xl">{{ topic.topic }}</strong>
    <p class="mx-8 my-8">{{ topic.description }}</p>

    <div class="mt-auto mb-8 self-center">
      <NuxtLink
        :to="topic.link"
        class="text-white rounded-sm bg-teal-700 shadow-md px-4 py-2 hover:bg-teal-500 border-0 hover:shadow-xl hover:text-white"
      >
        Explore</NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
.topic-card {
  min-width: 300px;
  max-height: 550px;
}

.topic-card > p {
  border-bottom: 2px solid grey;
  padding-bottom: 50px;
}

.topic-img {
  height: 50%;
  aspect-ratio: attr(width) / attr(height);
}
</style>
