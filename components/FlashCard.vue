<script>
    export default {
        name: 'FlashCard',

        props: {
            definition: Object
        }
    }
</script>

<template>



    <div class="card shadow-lg w-96  rounded-lg p-2 mr-4 mb-16 flex flex-col justify-center items-center cursor-pointer relative" v-for="definition in definition" :key="definition.id">
                <div class="term w-full text-center absolute">
                <strong class="text-xl ">{{definition.term}}</strong>
                </div>
                <p class="definition text-lg w-3/4 p-1">{{definition.definition}}</p>
            </div>









</template>

<style scoped>


.term {
        opacity: 0;
        transition: all 200ms ease-in;
        z-index: 10;



    }

    .definition {
        transition: all 100ms ease-in;
        //position: absolute;
    }






        .card:hover .definition{
            opacity: 0;


        }

        .card:hover {

            transition: all 300ms ease-in;
        }
    .card:hover .term {
        opacity: 1;
        scale: 1.5;
        display: inline;
    }





</style>
