<script>
import FeaturesCard from "./FeaturesCard.vue";
    export default {
    name: "Features",
    props: {
        icon: String,
        data: String,
        title: String
    },
    components: { FeaturesCard }
}
    </script>

    <template>

        <div class="w-full bg-teal-600 pb-16" data-aos="fade-up" data-aos-duration="250">


    <h2 class="text-4xl text-white font-bold py-16 md:pl-24">What you'll find inside</h2>


            <!--Partners icon box-->


            <div class="flex flex-col md:flex-row md:space-x-16 justify-center items-center w-full md:px-8">



            <FeaturesCard icon="fa-solid fa-book" data="10" title="Geology topics covered" data-aos="flip-up" data-aos-duration="1500" />
            <FeaturesCard icon="fa-solid fa-note-sticky" data="1K" title="Students accessed information" data-aos="flip-up" data-aos-duration="2000"/>
            <FeaturesCard icon="fa-solid fa-earth-americas" data="100" title="Reference images, geologic maps & more" data-aos="flip-up" data-aos-duration="2500" />



            </div>



        </div>







    </template>
