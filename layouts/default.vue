

<script>
export default {
  name: "default"
}
</script>

<template>

  <div>
    <Nav/>

    <slot/>
    <Footer/>
  </div>

</template>

<style scoped>
body  {
  padding: 0 !important;
  margin: 0 !important;
}

</style>