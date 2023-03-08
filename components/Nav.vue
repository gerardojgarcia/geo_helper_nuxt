<script>
import AppButton from './AppButton.vue';
import NavSearch from './NavSearch.vue';


    export default {
    name: "Nav",

       



    components: {
    AppButton,
    NavSearch
},

      methods: {
        openMenu(){
          document.querySelector('#nav-menu').classList.toggle('hidden')
        },

        close() {

          for(let i=0; i < document.querySelectorAll('.nav-link').length; i++ ) {

            document.querySelector('#nav-menu').classList.add('hidden')

          }

        }
      }
   
}
</script>

<template>

  <nav class="flex items-center justify-between flex-wrap bg-green-900 p-6 fixed w-full z-10 top-0">
    <div class="flex items-center flex-shrink-0 text-white mr-6">

      <span class="font-bold text-xl tracking-tight">EarthTutor</span>
    </div>
    <span class="text-white hidden md:inline lg:inline">{{message}}</span>
    <div class="block lg:hidden">
      <button @click="openMenu()" class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div id="nav-menu" class="w-full hidden block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <NuxtLink to="/" class=" nav-link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-200 mr-4" @click="close()">
          Home
        </NuxtLink>
        <NuxtLink to="TopicPage" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-200 mr-4">
          Topics
        </NuxtLink>

      </div>

      <i class="fa fa-shopping-bag text-white hidden md:inline mr-8 cursor-pointer" aria-hidden="true"></i>
      <i class="fa fa-user text-white hidden md:inline mr-8 cursor-pointer" aria-hidden="true"></i>


      <div>
        <NuxtLink href="#footer" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-white mt-4 lg:mt-0">Contact</NuxtLink>
      </div>
    </div>
  </nav>

</template>


<style scoped>
    a {
        margin-right: 1.5rem;
    }

</style>