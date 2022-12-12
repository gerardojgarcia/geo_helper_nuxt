<script>
export default {
    name: 'NavSearch',


    methods: {
         searchBox(){
            
                    
                const searchBox = document.getElementById('search-box')
                 

                    searchBox.classList.toggle('-translate-y-52')
                    searchBox.classList.toggle('opacity-0')
                    
                    
                
        }
    }
    
}
</script>

<template>
    <div class="relative w-auto flex flex-col"  >

    <!--SearchButton-->
       
        <button @click="searchBox"  class="border-0 bg-white place-center pl-12">
        <i class="fas fa-search cursor-pointer " ></i>
        </button>
       
       <!--SearchBox--->

        <div id="search-box" class="search-box absolute w-auto flex flex-col mt-10 pb-4 shadow-lg p-4 -translate-x-16 -translate-y-52 opacity-0 bg-white">
        
        
            <div class="rounded bg-white w-52 shadow place-center flex ">

            <!--search input-->
            
                <input type="textbox" name="search" max-length=65 placeholder="Search..." class="bg-white rounded py-2" >

            
            </div>
            <div class="mt-4 mb-2">

            <!--search submit button-->
            
            <button class="w-auto py-1 px-4 bg-teal-500 border-0 text-white shadow-md hover:bg-teal-400 hover:shadow-lg">Submit</button>
            
            
            </div>
            
        
        </div>

    </div>
</template>


<style scoped>

.search-box {
    transition: transform 500ms, opacity 400ms;
}


</style>