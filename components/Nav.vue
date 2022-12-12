<script>
import AppButton from './AppButton.vue';
import NavSearch from './NavSearch.vue';


    export default {
    name: "Nav",

        props:{
             name: String   
        },



    components: {
    AppButton,
    NavSearch
},
   
}
</script>

<template>
    <div>
      <header class="w-full flex justify-evenly my-8 bg-white items-center align-center z-10">

        <nav class="flex flex-row w-auto">



          <div class="navlinks text-gray-500">


            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="TopicPage">Topics</NuxtLink>

            <a href="#">Tutoring</a>
            <a href="#">FAQ</a>

          </div>

          <NavSearch class="hidden md:inline"/>



        </nav>

        <AppButton name="Contact"/>
      </header>

    </div>
</template>


<style scoped>
    a {
        margin-right: 25px;
    }

</style>