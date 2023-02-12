<script>
export default {
  name: "AppSideNav",

  methods: {
    select() {
      const link = document.querySelector(".link");

      link.classList.toggle("selected");
    },
  },
};
</script>

<template>
  <div class="hidden md:flex flex-col 1/2 p-16 bg-white">
    <strong>Topics</strong>
    <ul class="flex flex-col w-full space-y-2">
      <NuxtLink class="focus:text-green-700" to="/">Home</NuxtLink>
      <NuxtLink class="link focus:text-green-700 active:bg-black" to="Earth"
        >Earth</NuxtLink
      >
      <NuxtLink class="focus:text-green-700" to="Minerals">Minerals</NuxtLink>
      <NuxtLink class="active:text-green-700" to="Igneous">Igneous Rocks</NuxtLink>
      <NuxtLink class="active:text-green-700" to="Metamorphic"
        >Metamorphic Rocks</NuxtLink
      >
      <NuxtLink class="focus:text-green-700" to="Sedimentary">Sedimentary Rocks</NuxtLink>
      <NuxtLink class="focus:text-green-700" to="Tectonics">Plate Tectonics</NuxtLink>
      <NuxtLink class="focus:text-green-700" to="Volcanoes">Volcanoes</NuxtLink>
      <NuxtLink></NuxtLink>
      <NuxtLink></NuxtLink>
      <NuxtLink></NuxtLink>
    </ul>
    <strong>Jump to Section</strong>
    <ul class="flex flex-col space-y-2">
      <a href="#summary">Summary</a>

      <a href="#key_points">Key Points</a>
      <a href="#questions_answers">Q&A</a>
    </ul>
  </div>
</template>

<style scoped>
.selected {
  color: green;
}
</style>
