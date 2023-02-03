<script>
import AppButton from './AppButton.vue';

export default {
    name: "TopicsCard",
    props: {
        name: String,
        topic: Object,
    },
    components: { AppButton }
}
</script>



<template>


    <div class="topic-card rounded-lg flex flex-col shadow-md hover:shadow-xl mx-4 text-left cursor-pointer ">

    
            <img :src="topic.image" alt="Image for Topic Content" class="topic-img rounded-lg mb-4 ">
        <strong class="mx-4 text-3xl">{{ topic.topic }}</strong>
        <p class="mx-8 my-8">{{ topic.description }}</p>


        <div class="mt-auto mb-8 self-center">


            <NuxtLink :to="topic.link"
                class="text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white ">
                Explore</NuxtLink>

        </div>


    </div>




</template>


<style scoped>
.topic-card {
    min-width: 300px;
    max-height: 550px;




}

.topic-card>p {
    border-bottom: 2px solid grey;
    padding-bottom: 50px;
}


.topic-img {
    object-fit: cover;
    width: 100%;
    height: 50%;
}
</style>