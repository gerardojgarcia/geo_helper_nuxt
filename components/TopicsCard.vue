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
    class="topic-card rounded-lg flex flex-col border-1 border-black shadow-md hover:shadow-xl mx-4 text-left cursor-pointer"
  >
    <nuxt-img
      :src="topic.image"
      alt="Image for Topic Content"
      class="topic-img rounded-lg p-2 mb-4 aspect-square"
      sizes="sm:100vw md:100vw lg:90vw"
      preload
    />
    <strong class="mx-4 text-3xl">{{ topic.topic }}</strong>
    <p class="mx-8 my-8">{{ topic.description }}</p>

    <div class="mt-auto mb-8 self-center">
      <NuxtLink
        :to="topic.link"
        class="card-btn rounded-sm bg-black shadow-md px-4 py-2 border-2 border-black text-white hover:shadow-xl"
      >
        Explore</NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
.topic-card {
  min-width: 350px;
  max-height: 520px;
  border: 1px solid black;
  box-shadow: 5px 2px black;
}

.topic-card > p {
  border-bottom: 2px solid grey;
  padding-bottom: 50px;
}

.topic-img {
  height: 50%;
  aspect-ratio: attr(width) / attr(height);
}

.card-btn:hover {
  box-shadow: 4px 5px 0px #f3a08e;
  transform: translateX(5px);
}
</style>
