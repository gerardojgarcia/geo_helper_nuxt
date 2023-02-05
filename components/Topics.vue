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


    <div id="topics" class="topics-container w-full flex flex-col align-center justify-center md:px-16 pb-28" >

        <!--Topics <Header-->


    <div class="mt-16" data-aos="fade-up-right">
        <p class="text-yellow-600 text-left ml-8">Earth Science Topics</p>


        <h2 class="text-5xl text-left ml-8 text-shadow-lg">Explore Topics</h2>

    </div>


    <!-- Topics Card <Box-->
<div class="flex flex-col md:flex-row w-full align-center mt-8 justify-center items-center" data-aos="fade-up-left" data-aos-duration="500">

            <div>
                <button  class="bg-white border-0 p-6" @click="topicLeft" aria-label="Move Items left"><font-awesome-icon icon="fas fa-chevron-left" class="text-black text-2xl" /></button>
        </div>


        <div class="topic-box w-5/6 flex flex-row w-full mx-2 md:my-16 md:py-8 overflow-x-auto self-center scroll-smooth" id="topics-box" >


<!--Topic Card-->

       <div class="flex flex-col md:flex-row " v-for="topic in topics" :key="topic.id">

           <TopicsCard  :topic="topic" data-aos="fade-up" data-aos-duration="2500"/>

       </div>



        </div>

        <div>
            <button class="bg-white border-0 p-6" aria-label="Move Items right" @click="topicRight"><font-awesome-icon icon="fas fa-chevron-right" class="text-black text-2xl" /></button>
        </div>




        </div>
</div>





</template>
