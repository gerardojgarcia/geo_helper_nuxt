<script>
export default {
    name: 'Community',


}





</script>


<template>
    <div class=" community-container flex flex-col md:flex-row w-full justify-center pb-16">
        <div class="flex flex-col w-full md:w-1/2">
            <div class="community-text text-left ml-4 md:ml-16 mt-24">

                <h4 class="text-6xl mb-4 text-shadow-lg">Earth Science Deep Dives</h4>
                <p class="mb-16 text-gray-500 text-xl w-4/5 md:w-2/5">Different topics of interest that go beyond general geology. Satisfy your curiosity and get answers to questions you can't find anywhere else. </p>


            </div>

            <div class=" flex flex-col text-left ml-4 md:ml-16 ">
                <div class="flex-start flex flex-row mb-8 rounded shadow w-96 p-4 hover:shadow-lg cursor-pointer">
                    <div class="icon-div w-10 h-10 bg-green-200  flex"><i class="fa-solid fa-user place-center self-center ml-3"></i></div>
                    <div class="flex-col ml-4">
                        <strong class="text-lg text-black">Trusted by Thousands</strong>
                        <p class="text-gray-500 text-sm">There are many variations of passages</p>
                    </div>
                </div>
                <div class="flex-start flex flex-row mb-8 rounded shadow w-96 p-4 hover:shadow-lg cursor-pointer">
                    <div class="icon-div w-10 h-10 bg-green-200  flex"><i class="fa-solid fa-user place-center self-center ml-3"></i></div>
                    <div class="flex-col ml-4">
                        <strong class="text-lg text-black">Trusted by Thousands</strong>
                        <p class="text-gray-500 text-sm">There are many variations of passages</p>
                    </div>
                </div>
                
                
            </div>
        </div>
        <div class="community-cards max-w-lg flex flex-wrap justify-center ml-2 mt-4 md:mt-24">

            <div class="community-card w-52 h-52 flex shadow-md flex-col items-center mr-4 cursor-pointer hover:shadow-xl">
            
                <div class=" icon-div w-10 h-10 bg-green-200 mt-4 flex"><i class="fa-solid fa-user place-center self-center ml-3"></i></div>
                <div class="data font-bold py-4 mt-4">Geology of Los Angeles</div>
                <div class="title text-gray-400 text-sm">The ground that shakes a metropolis</div>
            
            
            </div>
            <div class="community-card w-52 h-52 flex shadow-md flex-col items-center mr-4 cursor-pointer hover:shadow-xl">
            
            <div class=" icon-div w-10 h-10 bg-green-200 mt-4 flex"><i class="fa-solid fa-user place-center self-center ml-3"></i></div>
            <div class="data font-bold py-4 mt-4">The San Andreas Fault</div>
            <div class="title text-gray-400 text-sm">The ground that shakes a metropolis</div>
        
        
        </div>
        <div class="community-card w-52 h-52 flex shadow-md flex-col items-center mr-4 cursor-pointer hover:shadow-xl">
            
            <div class=" icon-div w-10 h-10 bg-green-200 mt-4 flex"><i class="fa-solid fa-user place-center self-center ml-3"></i></div>
            <div class="data font-bold py-4 mt-4">San Gabriel Mountains</div>
            <div class="title text-gray-400 text-sm">The ground that shakes a metropolis</div>
        
        
        </div>
        <div class="community-card w-52 h-52 flex shadow-md flex-col items-center mr-4 cursor-pointer hover:shadow-xl">
            
            <div class=" icon-div w-10 h-10 bg-green-200 mt-4 flex"><i class="fa-solid fa-user place-center self-center ml-3"></i></div>
            <div class="data font-bold py-4 mt-4">Geology of Los Angeles</div>
            <div class="title text-gray-400 text-sm">The ground that shakes a metropolis</div>
        
        
        </div>
            

        </div>
    </div>
</template>

<style scoped>
    .community-card {
        transition: all 500ms;
        margin-bottom: 25px;
    }
    .icon-div {
        border-radius: 50rem;
    }


</style>