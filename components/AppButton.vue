<script>
export default {
  name: "AppButton",

  props: {
    name: String,
    link: String,
  },
};
</script>

<template>
  <div>
    <a
      :href="link"
      class="text-white rounded-sm bg-black shadow-md px-4 py-2 border-0 hover:shadow-xl hover:text-white"
      >{{ name }}</a
    >
  </div>
</template>

<style>
a {
  transition: all 200ms;
}

div a:hover {
  border: 1px solid black;
  box-shadow: 5px 2px black;
}
</style>
