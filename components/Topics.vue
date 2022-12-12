<script>
import AppButton from './AppButton.vue';
import TopicsCard from './TopicsCard.vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
    name: "Topics",
    components: {FontAwesomeIcon, AppButton, TopicsCard },

    props: {
        name: String,
        topics: Array
    },
    methods: {
       topicLeft() {
            const leftEl = document.getElementById('topics-box')


                leftEl.scrollLeft -= 600

       },
       
       topicRight(){
        const rightEl = document.getElementById('topics-box')

        rightEl.scrollLeft += 600
       }
    }
}
</script>


<template>


    <div id="topics" class="topics-container w-full flex flex-col align-center justify-center md:px-16 pb-28">
    
        <!--Topics <Header-->


    <div class="mt-16">
        <p class="text-yellow-600 text-left ml-8">Earth Science Topics</p>


        <h2 class="text-5xl text-left ml-8 text-shadow-lg">Explore Topics</h2>
     
    </div>


    <!-- Topics Card <Box-->
<div class="flex flex-row w-full align-center justify-center items-center" >
    
            <div>
                <button  class="bg-white border-0 p-6" @click="topicLeft"><font-awesome-icon icon="fas fa-chevron-left" class="text-black text-2xl" /></button>
        </div>
    
        <div class="topic-box w-5/6 flex flex-row w-full mx-2 my-16 py-8 overflow-x-auto self-center scroll-smooth" id="topics-box" >
    
    
    
       <div class="flex flex-row " v-for="topic in topics" :key="topic.id">
    
           <TopicsCard  :topic="topic"/>
    
       </div>
    
    
    
        </div>
    
        <div>
            <button class="bg-white border-0 p-6"  @click="topicRight"><font-awesome-icon icon="fas fa-chevron-right" class="text-black text-2xl" /></button>
        </div>
    
    
    
    
        </div>
</div>





</template>