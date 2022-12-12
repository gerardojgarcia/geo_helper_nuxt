<script>
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
    export default {
        name: "FeaturesCard",
      components: {FontAwesomeIcon},
      props: {
            icon: String,
            data: String,
            title: String
        }




    }
</script>

<template>
    <div class="feature-card bg-white shadow-lg my-4 md:mx-4 rounded-lg w-60 h-64  flex flex-col ">
            
            <div class=" icon-box self-center grid place-items-center bg-yellow-200"><font-awesome-icon :icon="icon" class="text-2xl text-white"/></div>
            <p class="data mt-8 text-3xl text-teal-400 self-center text-center">{{data}}+</p>
            <p class="text-gray-500 m-2 text-center" >{{title}}</p>
        
        
        
        </div>
</template>

<style scoped>

    .icon-box {
        margin-top: 25px;
        width: 50px;
        height: 50px;
        border-radius: 50rem;
    }


    i {
        justify-self: center;
        margin-top: 15px;
     

       

    }



</style>