<script>
export default {
  name: "AppSideNav"
}
</script>

<template >
  <div class=" hidden md:flex flex-col 1/2 p-16  bg-white  ">
    <strong>Topics</strong>
<ul class="flex flex-col w-full space-y-2 ">
  <NuxtLink to="Earth">Earth</NuxtLink>
  <NuxtLink to="Minerals">Minerals</NuxtLink>
  <NuxtLink to="Igneous">Igneous Rocks</NuxtLink>
  <NuxtLink to="Metamorphic">Metamorphic Rocks</NuxtLink>
  <NuxtLink to="Sedimentary">Sedimentary Rocks</NuxtLink>
  <NuxtLink>Plate Tectonics</NuxtLink>
  <NuxtLink>Volcanoes</NuxtLink>
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

</style>