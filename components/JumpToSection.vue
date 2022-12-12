<script>
export default {
  name: "JumpToSection",

  data() {

    return {
      section: []
    }

    },

  created() {
   this.section= [
     {
       id: 1,
       section: 'Summary',
       sectionHash: '#summary'
     },
     {
       id: 2,
       section: "Key Points",
       sectionHash: '#key_points'
     },
     {
       id: 3,
       section: "Q&A",
       sectionHash: '#questions_answers'
     },

   ]

  }



}
</script>


<template>
<div class="jump-container bg-white text-black w-24 h-1/4 rounded-lg py-4 md:mt-16 z-10 flex flex-col">
  <div class=" text-xl ml-8 ">

    <strong>Jump to Section</strong>
  </div>


<div class="flex flex-col md:flex-col w-full items-center self-end">
  <div v-for="section in section" :key="section.id" class="text-white ml-6 flex flex-col mt-4 px-4">

  <div class="mb-2"><a :href="section.sectionHash" class="bg-teal-400 rounded-sm p-2 shadow-md hover:shadow-xl">{{section.section}}</a></div>



</div>
</div>
</div>
</template>



<style scoped>
.jump-container {
  position: fixed;
}

</style>