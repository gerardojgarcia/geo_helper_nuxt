<script>
    export default {
        name: 'Footer',


    }
    




</script>

<template>


    <div class="footer-container w-full  flex flex-col md:flex-row pb-16 justify-center align-center">
        <div class="footer-media flex flex-col md:w-1/2  items-center pt-16 ">
            <img src="/geohandlogo.png" alt="Logo image for geo hand" class="logo w-32 mb-16">
            <div class="social-media">
            
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            
            
            </div>
        </div>
    

        <div class="contact flex flex-col md:w-1/2 justify-start ">
        
            <div class="mt-16 self-start mb-8"><strong class=" footer-strong text-5xl text-white">Get in Touch</strong></div>

            <div class="flex md:flex-row flex-col items-center">
                <form action="submit ">
                
                    <div>
                        <input class="shadow-md rounded-xl bg-white p-1  mb-4 md:mr-4" type="text" name="name" placeholder="Name" required>
                        <input class="shadow-md rounded-xl bg-white p-1" type="text" name="email" placeholder="Email" required>
                    </div>
                
                
                    <button class=" self-center text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white w-32  ml-4 my-8">Submit</button>
                
                </form>
            </div>
        
        
        </div>
    
    
    
    </div>



</template>


<style scoped>

    .footer-container {
        background-color: var(--secondary-clr);
    }

    .footer-strong {
        text-shadow: 2px 2px 5px black;
    }

    .social-media>i {
        font-size: 1.7rem;
       color: var(--accent-clr);
       margin-right: 1rem;
    }



</style>