<script>
    import ToTop from "../components/ToTop.vue";
    import ToBottom from '../components/ToBottom.vue'
    export default {
        name: 'Volcanoes',
      components: {ToTop, ToBottom},
      methods: {
            answer(){
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
            answer2(){
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
    
            <div class="volcano-hero bg-fixed pb-52">
                <div class="w-1/2 ml-16 mt-32 text-white">
                    <h1 class="text-7xl text-shadow-lg">Volcanoes</h1>
                    <p class="w-1/2 pl-2 mt-8 text-lg">Everything you wanted to know about volcanoes.</p>
                </div>
    
    
            </div>
            <div class="earth-summary w-3/4 m-auto mt-16 indent-2">
    
    
    
                <div class="mb-16"><strong class="text-5xl text-shadow-sm ">Topic Summary</strong></div>
    
                <audio src="/"></audio>
    
<p>Volcanoes are vents at which molten rock, pyroclastic debris, gas and aerosols erupt at Earth’s surface.
 the characteristics of a lava flow depend on its viscosity, which in turn depends on its temperature and composition. 
</p>
<p>Basaltic lava can flow great distances. Pahoehoe flows have smooth, ropy surfaces, whereas a’a’ flows have rough rubbly surface. Andesitic and rhyolitic lava flows tend to pile into mounds at the vent. 
</p>
<p>pyroclastic debris includes powder-sized ash, marble-sized lapilli, and apple - t refrigerator -sized blocks and bombs. Some falls from the air, whereas some forms pyroclastic flows. 
 Eruptions may occur at a volcano’s summit or from fissures on its flanks. The. Summit of an erupting volcano may collapse to form a bowl-shaped depression called a caldera. 
</p>
<p>A volcano’s shape depends on the type of eruption. Shield volcanoes are broad, gentle domes. Cinder cones are steep-sided, symmetrical hills. Composite volcanoes (stratovolcanoes) can become quite large and consist of alternating layers of pyroclastic debris and lava.
</p>
<p>the type of eruption depends on the lava’s viscosity an gas content. Effusive eruptions produce pyroclastic debris. 
 Different kinds of volcanoes form in different geologic settings, asa defined by plate tectonic theory.
</p>
<p>Volcanic eruptions pose many hazards: lava flows. Overrun roads and towns, ash falls blanket the landscape, pyroclastic flows incinerate towns and field. Landslides and lahras bury the land surface. Earthquake topple structures and rupture dams. Tsunamis wash away coastal towns. And invisible gases suffocate people and animals. 
</p>
<p>eruptions can be credited by earthquake activity, changes in heat flow, changes in shape of volcano, and the emission of gas and steam. 
</p>
<p>We can minimize the consequences of an eruption by avoiding construction ni danger zones.
</p>
<p>Immense flood basalts cover portions of the moon. Th largest known volcano, Olympus Mons, towers over the surface of Mars, Satellites have documented evidence for eruptions on moons of Jupiter and Saturn.</p>



   



    
                
    
    
    
    
    
            </div>
    
    
            <div class="volcano-banner1 w-full bg-fixed flex flex-col text-black">
                   
                    
    
                    <div class="question-box  w-96 m-auto backdrop-blur-sm rounded-lg flex flex-col shadow-lg justify-center items-center ">
                        <strong class="text-4xl mt-8 ">Knowledge Check</strong>
    
                        <div class="w-full flex flex-col  text-center  mb-16 ">
                            <p class="mt-2 text-lg ml-8">What gas is the atmosphere primarily composed of?</p>
                            <p id="answer2" class="text-xl"></p>
                            <div class=" w-1/2 flex flex-row justify-center items-center m-auto">
                            <button class="right text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white mr-4" @click="answer2">Nitrogen</button> <button class="wrong text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white" @click="wrongAnswer2">Oxygen</button></div>
                        </div>
                    
                    
                    </div>
                
                
                
            
            
            
            </div>
    
    
    
            <div class="volcano_points w-3/4 m-auto mt-16">
    
                <div class="mb-16"><strong class="text-5xl text-shadow-sm ">Key Points</strong></div>

                    <p> - volcanos are identified as using physics properties. The most commonly used properties are streak, color, hardness, luster, specifics gravity, crystal habit, and cleavage.</p>
                    <p>- volcanos making up rock are formed in five ways: crystallization inform a melt,. Solid state diffusion through a preexisting crystal. Precipitation form a water solution, precipitation from a water solution. Precipitation forma gas, and biovolcanoization ( the activities of organisms)</p>
                    <p>- volcanos are classified based on the anions or anionic groups that they contain. volcanos lacking anions are termed native elements. Other important groups are oxides, sulfides, halides, sulfates, and carbonates. </p>
                    <p>- vast majority of earth’s volcanos are silicate</p>
                    <p>- the degree of oxygen sharing among the tetrahedra that for m the basis of these volcanos allows for the great diversity of crystalline forms in silicates.</p>







    
    
            </div>
    
            <div class="volcano-banner2 w-full bg-fixed flex flex-col text-white">
            
            
                <div class="question-box  w-96 m-auto backdrop-blur-sm rounded-lg flex flex-col shadow-lg justify-center items-center ">
                        <strong class="text-4xl mt-8 ">Knowledge Check</strong>
    
                        <div class="w-full flex flex-col text-center  mb-16 ">
                            <p class="mt-2 text-xl">Which is more dense?</p>
                          <p id="answer" class="text-xl"></p>
                            <div class=" w-1/2 flex flex-row justify-center items-center m-auto">
                            <button class="right text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white mr-4" @click="answer">Oceanic Crust</button> <button class="wrong text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white" @click="wrongAnswer">Continental Crust</button></div>
                        </div>
                    
                    
                    </div>
            
            
            </div>
    
    
            <div class="volcano_questions w-3/4 m-auto mt-16">
    
                <div class="mb-16"><strong class="text-5xl text-shadow-sm ">Questions & Answers</strong></div>
    
                
                    <p><span>Q: </span>1.	Describe the three different kinds of material that can erupt from a volcano.
</p>
                    <p><span>A: </span>Lava is molten rock. Flowing out of the volcano in liquid state and cooling and solidify on the ground. Pyroclastic debris forms when bodies of lava are shot in to the atmosphere and cool during flight to form volcanic glass; pyroclastic debris ranges in size from ash to lapilli to later pieces termed bombs. Blocks are fragments of preexisting volcanic rock from older eruptions tat are hurled by the force of eruption. Lastly, the primary gases that erupt from volcanoes are water vapor, carbon diocide. Sulfur dioxide, and hydrogen sulfide. 
</p>

                    <p><span>Q: </span>Contrast a pyroclastic flow with a layer.
</p>
                    <p><span>A: </span>pyroclastic flows are hot mixtures of suspended pyroclastic debris (ash and lapilli) and air that tumble down the sides of volcanoes at great speed. A layer is a fast, liquid flow arising when a pyroclastic flow mixes with water from snowfields or nearby streams.
</p>

                    <p><span>Q: </span>Describe the differences among shield volcanoes, stratovolcanoes, and cinder cones. How are these differences explained by the composition of their lavas and other factors?

</p>
                    <p><span>A: </span>Shield volcanoes are gently sloped domes typically composed of basaltic volcano rock. The basaltic lava that forms this rock is of low viscosity, so it flows readily in response to gravity and attains a low profile on solidification. Cinder cones are radially symmetric tether, with steeper slopes on the sides. Cinder cones form from fountains of lava, which suit up and freeze in midair close to the volcanic vent. Pyroclastic tephra solidifies before reaching the ground and consequently cannot flow as basaltic lava will. Stratovolcanoes are large, conic volcanoes

</p>

                    <p><span>Q: </span>Why do some volcanic eruptions consist moistest los lava flows, while others are explosive and do not produce flows?
</p>
                    <p><span>A: </span>explosive eruptions are the result of a sudden release of accumulated gas pressure within a volcano. Lavas with high proportion of volatiles, such as water vapor,  produce explosive eruptions in which the lava is blasted upward by explosively expanding gas, forming pyroclastic debris out of the lava that would otherwise have flowed down the slope of the volcano. 
</p>

                    <p><span>Q: </span>What processes may lead to hot-spot eruptions?
</p>
                    <p><span>A: </span>there are divergent opinions among geologist concerning the genes of hot spots. One school of though presses that the y arise as clues of very hot mantle rock from the base of the mantle (core mantle boundary) generating massive amounts of volcanism due to the transfer of heat with surround rock. Another school argue sthat he other circumstances are responsible for he copious melting seen at hotspots 
</p>

                    <p><span>Q: </span>How do continental-rift eruptions form flood basalts?

</p>
                    <p><span>A: </span>hot mantle rock rising in areas of rioting meets an environment conducive to volcanic (decompression and fractured overlying crust). Abundant partial melting produces massive quantities of basaltic magma, which rise though fissures and, due to low viscosity, spread outward to form uniform sheets (in the manner of aqueous floods)
</p>

                    <p><span>Q: </span>Contrast an island arc with a continental arc.

</p>
                    <p><span>A: </span>in an island arc, the overriding plate at the subduction zone is composed of oceanic lithosphere. Resultant volcanism produces an island chain, such as  the Aleutians, dominated by basalt. In contrast, when the overriding plate is continental listhopshere , a chain dominated by basalt. In contrast, when the overriding plate is continental lithosphere, a chain of terrestrial volcanoes termed a continental arc extruding intermediate, andesitic lava ins produced, such as the Andes. 
</p>

                    <p><span>Q: </span> Identify some of the major volcanic hazards, and explain how they develop.
</p>
                    <p><span>A: </span>lava flows,  poisonous volcanic gasses, and pyroclastic ash and lapilli are the immediate products of eruption. Ash fall occurs due to the settling of fine pyroclastics out of the atmosphere. Pyroclastic  flow occurs  when pyroclastics are turbulently fixed with air and swirl down the slopes of a volcano due to gravity. Lahars occur when a pyroclastic flow obtains moisture from snow near the summit or stream water. Movement of magma generates earthquakes, which may trigger landslides; in which coastal settings, a landslide or earthquake might generate a tsunami. 
</p>

                    <p><span>Q: </span>How do geologist predict volcanic eruptions?
</p>
                    <p><span>A: </span>measure increases in heat flow, changes in the shape of volcanoes, and increasing incidence of earthquakes and gaseous emissions may signal that an eruption is imminent. 
</p>


                    <p><span>Q: </span>Explain how steps can be taken to protect people from the effects of eruptions.
</p>
                    <p><span>A: </span>maps assessing volcanic hazards can be compiled and publicized. Plans for emergency evacuation can be developed. The direction of flowing lava can sometimes be diverted. Citizens can be educated concerning the hazards of living near volcanic summits and can receive incentives for relocating if practical.
</p>

                    

    
    
    
            </div>
    
    
    
    
    <ToTop/>
    <ToBottom/>
    
    
    
    
    
        </div>
    
    
    </template>
    
    <style scoped>
    .volcano-hero {
        background-image: url('/pexels-pixabay-87651.jpg');
        height: 75vh;
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
    
    .volcano-banner1 {
        background-image: url('/pexels-dominika-roseclay-1172842.jpg');
        min-height: 45vh;
        background-position: center;
        background-size: cover
    }
    
    .volcano-banner2 {
        background-image: url('/public/pexels-arthur-brognoli-2342505.jpg');
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