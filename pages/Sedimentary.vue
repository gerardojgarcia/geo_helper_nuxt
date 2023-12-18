<script>
export default {
    name: 'Sedimentary',


    methods: {
        answer() {
            const answerEl = document.getElementById('answer')

            answerEl.innerText = "That's correct!"

            answerEl.classList.remove('red')
            answerEl.classList.add('green')

        },

        wrongAnswer() {
            const answerEl = document.getElementById('answer')

            answerEl.classList.remove('green')
            answerEl.classList.add('red')

            answerEl.innerText = "Sorry, keep on studying!"

            //answerEl.classList.add('red')
        },
        answer2() {
            const answerEl = document.getElementById('answer2')

            answerEl.innerText = "That's correct!"

            answerEl.classList.remove('red')
            answerEl.classList.add('green')

        },

        wrongAnswer2() {
            const answerEl = document.getElementById('answer2')

            answerEl.classList.remove('green')
            answerEl.classList.add('red')

            answerEl.innerText = "Sorry, keep on studying!"

            //answerEl.classList.add('red')
        }
    }
}



</script>
    
    
<template>
    <div class="w-full flex flex-col text-left  ">

        <div class="sedimentary-hero bg-fixed pb-52">
            <div class="w-1/2 ml-16 mt-32 text-white">
                <h1 class="text-7xl text-shadow-lg text-black">Sedimentary Rocks</h1>
                <p class="w-1/2 pl-2 mt-8 text-lg text-black">Everything you wanted to know about Sedimentary Rocks.</p>
            </div>


        </div>
        <div class="grid grid-cols-4 isolate bg-fixed top-52">

            <div class="m-0 col-span-1 fixed top-1/2 left-0 h-full z-1 ">
                <AppSideNav />

            </div>




            <div class="flex flex-col col-span-3  bg-fixed sticky left-64 px-16 overflow-auto">




                <div class="sedimentary-summary w-3/4 m-auto mt-16 indent-2">



                    <div class="mb-16"><strong class="text-5xl text-shadow-sm ">Topic Summary</strong></div>

                    <audio src="/"></audio>



                    <p>geologists recognize four major classes of sedimentary rocks. Clastic rocks form from
                        cemented-together grains the there first produced by weathering, then transported, deposited and
                        lithified. Biochemical rocks develop from the shells of organisms, organic rocks consist of pant
                        debris or od altered pklanton remains. Chemical rocks precipitate directly from water.
                    </p>
                    <p>sedimentary structures include bedding, cross bedding, graded bedding, ripple marks, dunes, and mud
                        cracks. These structures serve as clues to depositional settings.
                    </p>
                    <p>biochemical and organic rocks form from materials produced by living organisms.
                        limestone economists dominantly of calcite, chert forms from silica, coal from carbon, shale from
                        clay, and sandstone from quartz grains.
                    </p>
                    <p>evaporites consist of minerals precipitated from water.
                        glaciers, streams alluvial fans, deserts, rivers, lakes, deltas, beaches, shallow seas, and deep
                        seas each accumulate a distinctive assemblage of sedimentary strata.
                    </p>
                    <p>Thick piles of sedimentary rocks accumulate in sedientary bsins, regions where the </p>
                    <p></p>











                </div>


                <div class="sedimentary-banner1 w-full bg-fixed flex flex-col text-black">



                    <div
                        class="question-box  w-96 m-auto backdrop-blur-sm rounded-lg flex flex-col shadow-lg justify-center items-center ">
                        <strong class="text-4xl mt-8 ">Knowledge Check</strong>

                        <div class="w-full flex flex-col  text-center  mb-16 ">
                            <p class="mt-2 text-lg ml-8">What gas is the atmosphere primarily composed of?</p>
                            <p id="answer2" class="text-xl"></p>
                            <div class=" w-1/2 flex flex-row justify-center items-center m-auto">
                                <button
                                    class="right text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white mr-4"
                                    @click="answer2">Nitrogen</button> <button
                                    class="wrong text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white"
                                    @click="wrongAnswer2">Oxygen</button>
                            </div>
                        </div>


                    </div>






                </div>



                <div class="sedimentary_points w-3/4 m-auto mt-16">

                    <div class="mb-16"><strong class="text-5xl text-shadow-sm ">Key Points</strong></div>

                    <p>- sediments and sedimentary rocks are rare in the crust as a whole, but they are abundant at the
                        surface.
                    </p>
                    <p>Clastic sedimentary rocks are primarily classified on the basis of calls size and shape. Students
                        shoe be able to recognize and characterize conglomerate, breccia, sandstone, siltstone, mudstone,
                        and shale.
                    </p>
                    <p>Biologically mediated precipitation produces mineralized skeletons; these condense and lithify to
                        form biochemical sedimentary rock. Important examples are most types of limestone and bedded,
                        biogenic chert.</p>
                    <p>Organize sedimentary rocks include coal-the altered remains of trees and other plants that lived in
                        swampy environments (which allow organic matter to accumulate without too much decay)
                    </p>
                    <p>Chemical sedimentary rocks arise from precipitation . As with biochemical rocks classification is
                        primarily based on mineral content. An important subset of the are the evaporites, including rock
                        salt (halite) and gypsum (small amounts of carbonate sediment can also form through evaporation).
                        Chemical rocks can also from through the replacement of minerals during diagenesis.
                    </p>
                    <p>The layering of rock is termed stratification, or bedding; cross beds signify deposition along a
                        slope and can also from through the replacement of minerals
                    </p>
                    <p>The character of sedimentary rocks reflects their environments of deposition; students should be
                        familiar with a few sedimentary environments for example alluvial fan, stream, shallow marine, deep
                        marine, and glacial) as well as the characteristics of the sediments deposited in those realms.
                        Locally, environments change over time; one source of these scavenges is the sequence of
                        transgressions (rising local relative sea level) and regressions (falling local relate sea level)

                    </p>
                    <p></p>







                </div>

                <div class="sedimentary-banner2 w-full bg-fixed flex flex-col text-white">


                    <div
                        class="question-box  w-96 m-auto backdrop-blur-sm rounded-lg flex flex-col shadow-lg justify-center items-center ">
                        <strong class="text-4xl mt-8 ">Knowledge Check</strong>

                        <div class="w-full flex flex-col text-center  mb-16 ">
                            <p class="mt-2 text-xl">Which is more dense?</p>
                            <p id="answer" class="text-xl"></p>
                            <div class=" w-1/2 flex flex-row justify-center items-center m-auto">
                                <button
                                    class="right text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white mr-4"
                                    @click="answer">Oceanic Crust</button> <button
                                    class="wrong text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white"
                                    @click="wrongAnswer">Continental Crust</button>
                            </div>
                        </div>


                    </div>


                </div>


                <div class="sedimentary_questions w-3/4 m-auto mt-16">

                    <div class="mb-16"><strong class="text-5xl text-shadow-sm ">Questions & Answers</strong></div>






                </div>



                <ToTop />
            </div>
        </div>






    </div>
</template>
    
<style scoped>
.sedimentary-hero {
    background-image: url('/sedimentary_globe_2.png');
    height: 50vh;
    background-repeat: no-repeat;
    background-size: cover;
}

p {
    padding-bottom: 2rem;

}

strong {
    margin-bottom: 3rem;
}

span {
    font-weight: bold;
}

.sedimentary-banner1 {
    background-image: url('/imgs/pexels-dominika-roseclay-1172842.webp');
    min-height: 45vh;
    background-position: center;
    background-size: cover
}

.sedimentary-banner2 {
    background-image: url('/imgs/pexels-arthur-brognoli-2342505.webp');
    min-height: 45vh;
    background-position: center;
    background-size: cover
}

.question-box {
    min-width: 500px;
}

.green {
    color: green;
}

.red {
    color: red;
}
</style>