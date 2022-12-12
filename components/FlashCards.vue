<script>
import FlashCard from "./FlashCard.vue";
export default {
    name: "FlashCards",
    
    components: { FlashCard }, 
    props: {
        definition: Array


    }

}
</script>
<template>


    <div>
        <div class="ml-16 mt-16 mb-16"><strong class="text-7xl">FlashCards</strong></div>
    
        <div class="card-box flex flex-row flex-wrap w-full lg:w-3/4 m-auto justify-center" >

      
        
        
            <FlashCard :definition="definition" />
            
        
        </div>
    
    
    </div>


</template>

<style scoped>

    



</style>