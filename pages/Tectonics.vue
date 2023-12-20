<script>
    import JumpToSection from "../components/JumpToSection.vue";
    import ToTop from "../components/ToTop.vue";
    import ToBottom from "../components/ToBottom.vue";
    export default {
        name: 'Tectonics',
      components: {ToBottom, ToTop, JumpToSection},
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

            <div class="tectonic-hero bg-fixed pb-52 flex-col">
                <div class="w-1/2 ml-16 mt-32 text-white">
                    <h1 class="text-7xl text-shadow-lg">Plate Tectonics</h1>
                    <p class="w-1/2 pl-2 mt-8 text-lg">Everything you wanted to know about tectonics.</p>

                </div>



            </div>

          <div class="grid grid-cols-4 isolate bg-fixed top-52">

            <div class="m-0 col-span-1 fixed top-1/2 left-0 h-full z-1 ">
              <AppSideNav/>

            </div>




            <div class="flex flex-col col-span-3  bg-fixed sticky left-64 px-16 overflow-auto">




            <div id="summary" class="tectonic-summary w-3/4 m-auto mt-16 indent-2">



                <div class="mb-16"><strong class="text-5xl text-shadow-sm ">Topic Summary</strong></div>

                <audio src="/"></audio>

    <p>Alfred Wegener proposed that continents had once been joined together to form a single huge supercontinent and had subsequently drifted apart. This idea is the continental drift hypothesis.
 Wegener drew from several  different sources of data to support his hypotheses: the correlation of coastlines; the distribution of late paleozic glaciers; the distribution of late paleozoic climatic belts; the disruption of fossil species; and correlation of distinctive rock assemblages now on opposite sides of the ocean.
</p>
    <p>Rocks retain a record of the Earth’s magnetic field that existed at the time the rocks formed/ this record is called paleomagnetism. Nu measuring paleomagnetism in successively older rocks, geologist discovered apparent polar-wander paths.
</p>
    <p>Apparent polar-wander paths are different for different continents. Continents move with respect to one another, while the earth's magnetic poles remain roughly fixed. </p>
    <p>Around 1960, harry hess proposed the hypotheses of se-floor spreading. According to this hypotheses, new sea floor forms at mid-ocean ridges, above a band of upwelling mantle, then spreads symmetrically away from the ridge axis. Eventually, the ocean floor sinks back in the mantle at deep-ocean trenches.
</p>
    <p>Magnetometer surveys of the sea floor revealed marine magnetic anomalies. Positive anomalies, where the magnetic field strength is greater than expected, and negative anomalies, where the magnetic field strength is less than expected, are arranged in alternating stripes.
</p>
    <p>Geologist  documented that the earths’ antigenic field reverses polarity every now and then. The record of reversals, dated  by isotopic techniques, is called the magnetic-reversal chronology.
 A proof of sea-floor spreading came form the association of marine magnetic anomalies  with the reversal chronology and from drilling studies proving hat the sea floor gets progressively older away from a mid-ocean ridge.
</p>
    <p>The lithosphere, the rigid outer layer of earth, is broken  into discrete plates that move relative to each other. Plates consist of the crust and the uppermost mantle.
Lithosphere plates effectively float on the underlying soft asthenoshpere. Continental drift and sea-floor spreading are manifestation of plate movement.
 Most earthquakes and volcanoes occur along plate boundaries; the interiors of plates remain relatively rigid and intact. </p>

 <img src="public/imgs/chapter2/FIG02.21b_ESSGEO4_CH02.webp" alt="">
    <p>There are three types of plate boundaries – divergent, convergent, and transform-- distinguished from one another by the movement the plate on one side of the boundary makes relative to the plate on the other side.
 Divergent boundaries are marked y mid0ocean ridges. At divergent boundaries, sea-floor spreading produces new oceanic lithosphere.
</p>
    <p>Convergent boundaries are marked by deep-ocean trenches and volcanic arcs, at convergent boundaries, oceanic lithosphere of the down going plate subducts beneath an overriding plate.
 Transform boundaries are marked by large faults at which one plate slides sideways past another. No new plate forms and no old plate is consumed at a transform boundary.
 Triple junctions are points where three plate boundaries intersect.
</p>
    <p>Hot spots are places where volcanism occurs at an isolated volcano. Asa plate move over the hot spot, the volcano moves of f and dies, and a new volcano forms  over the hot spot. Hot spots may be caused by mantle plumes.
 A large continent can split into two smaller ones through the process of righting. During rifting, continental lithosphere stretches and thins. If it finally breaks apart, a new mid-ocean ridge forms, and sea-floor spreading begins.
</p>
<p>Convergent plate boundaries cease to exist when a buoyant piece of crust a continent or an island arc moves into the subduction zone. When tis happens, collision occurs.
 Ridge-push force and slab -pull force contributor to driving plate motions
 Plates move at rates of about 1 to 15cm pre year. Modern satellite measurements can detect
 these motions.
</p>








            </div>


            <div class="tectonic-banner1 w-full bg-fixed flex flex-col text-black">



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



            <div id="key_points" class="tectonic_points w-3/4 m-auto mt-16">

                <div class="mb-16"><strong class="text-5xl text-shadow-sm ">Key Points</strong></div>

<p>- continental drift. The fit of coastal outlines and the distribution of rocks, fossils and ancient climatic belts al l strongly suggest that the continent were once aligned to form a supercontinent named Pangaea. His idea had few supporters during his lifetime in part becasue he could not provide a workable mechanism through which continents could move with respect to one another.
</p>
<p>- during the twentieth century, paleomagnetic data showed that continents must have drifted, because of the rocks of isolated continents produce unequal apparent polar-wanter paths for the north magnetic pole.
</p>
<p>- continents are passively pushed by the activity of sea-floor spreading, in which molten rock rises at mid-ocean ridges, cools to form new oceanic crust, and spread laterally. Simultaneously, crust (and mantle lithosphere) is pulled downward and engulfed at deep ocean trenches.
</p>
<p>- sea-floor spreading was proven in the late 1960s by examination of amine magnetic anomalies, which are symmetric about the mid-ocean ridges. Combined with age dating, these patterns clearly show that oceanic crust is created at the ridges and spreads outward, with crustal age increasing away from the ridge axis in either direction. Areas of positive anomaly( including the ridges themselves arise from rocks that crystallized and cooled during times when earth’s magnetic polarity was normal ( the same as it is today); rocks producing negative anomalies cooled during times oof reversed polarity.
</p>
<p>- together, the evidence for sea-floor spreading and continental drift have been combined with geophysical observations to form the basis of our modern understanding of plate tectonics—the unifying theory of geology that explains the distribution of earthquakes, volcanism, and mountain building, and the links among these phenomena.
</p>

<img src="public/imgs/chapter2/FIG02.21e_ESSGEO4_CH02.webp" alt="">
<p>- the plates of plate tectonics are discrete slabs of lithosphere (curst and rigid portion of the mantle) that move  with respect to each other. They glide over a ductile layer of the mantel termed the asthenosphere. Boundaries between plates are convergent (where plates move towards each other) , divergent (where plates are pushed apart at mid0ocean ridge) or transform (where plates slide past each other). Relative plate motions are on the order of a few centimeters a year (a common analogy is that these rates approximate the rate of human fingernail growth.)
</p>
<p>- plate motions at all the tree boundary types triggers earthquakes. Plate boundareis are delineated by belts of high historical earthquake frequency.
</p>
<p>- volcanism is associated with both convergent (volcanic arcs) and divergent (mid-ocean ridges) boundaries but not transform boundaries.
</p>
<p>- only oceanic lithosphere is dense enough to be subjected  at convergent boundaries. When continental lithosphere is pushed (by a ridge) and pulled (by leading edge of subducting oceanic lithosphere) into another continent, a mountainous collision zone is formed , and the two plates involved become sutured together. Conversely, a single large plate can come rifted apart when its lithosphere is stretched, thinned, and broken apart by a developing ridge.
</p>










            </div>

            <div class="tectonic-banner2 w-full bg-fixed flex flex-col text-white">


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


            <div id="questions_answers" class="tectonic_questions w-3/4 m-auto mt-16">

                <div class="mb-16"><strong class="text-5xl text-shadow-sm ">Questions & Answers</strong></div>


    <p><span>Q: </span> what was weneger’s continental drift hypotheses? What was his evidence? Why doesnt  other geologist all agree?
</p>
    <p><span>A: </span>Wegener stated that the continents had once been contiguous, forming a supercontintne which he termed Pangaea which later broke apart to form the modern continents and the n drifted to their present configuration. Wegener’s evidence included the fit of continents coastlines and the distributions  of late Paleozoic fossils, rocks, and climatic belts, all of which were explained by fixed continents. Most geologist did not accept the continental drift hypotheses primarily because wegner had no working mechanism to explain what would cause continents to move.
</p>
    <p><span>Q: </span>how do apparent polar-wander paths show that the continents, rather than the poles, have moved?</p>
    <p><span>A: </span>Apparent polar-wander paths for different continents do not agree with one another concerning the position of the ancient magnetic north pole. Magnetic poles can potentially wander, but as earth's magnetic field is largely a dipole field, there is only one possible position at any one time for an ancient north pole.</p>
    <p><span>Q: </span>describe  sea-floor spreading.
</p>
    <p><span>A: </span>Sea-floor spreading is the idea the new oceanic basalt is produced at mid-ocean ridges and spread laterally to either side. It is in part the push of oceanic basalt that causes the continents to drift over the surface of the earth.
</p>
    <p><span>Q: </span>Describe the pattern of marine magnetic anomalies  across a mid-ocean ridge. How is this pattern explained?</p>
    <p><span>A: </span>Over the ridge crest, earth’s magnetic field is anomalously strong a positive anomaly. This elongate belt of positive anomaly is flanked on either side by belts of anomalously weak magnetic field strength negative anomaly. The alternating sequence of positive and negative anomalies continues in either direction outward from the ridge, forming a pattern that possesses mirror0image symmetry about the ridge axis. The explanation of the pattern is that magnetic fields of crystals formed in the most recent past have remnant magnetism in concert with today’s global magnetic field and are said to hav normal polarity. Extra field strength derives from the alignment of all these mini magnets reinforce the modern dipole. The same is true for all positive anomalies, repressing crystallization and cooling that took place during the times when earth's magnetic polarity was the same as it is today.  Negative anomalies are derived from bodies of rock that crystallized and cooled during times when earths magnetic field had a polarity opposite to that of today. The magnetic fields of these rocks destructively interfere with the modern dipole, weakening the observe magnetic strength.

</p>
    <p><span>Q: </span>how did drilling into the sea floor contribute further proof of sea-floor spreading? How did the seafloor-spreading hypothesis explain variations in ocean floor heat flow?
</p>
    <p><span>A: </span>Sediments atop oceanic basalts become thicker away form mid-ocean ridges, and the lowermost layers become progressively older with increasing distance from the ridge. Heat flow is greatest near the mid-ocean ridges, where hot mantle rock is rising partially melting to yield new basalts. With increasing distance away from the ridges, rates of heat flow decrease.
</p>
    <p><span>Q: </span>what are the characteristics of the lithosphere plate? Can a single plate include both continental and oceanic lithosphere?
</p>
    <p><span>A: </span>The lithosphere is the rocky portion of the earth, relatively cool and rigid as compared to underlying mantle material the hotter, weaker stenographer. The lithosphere is composed of the crust and the uppermost portion to the mantle. A plate may be topped by a combination of continental and oceanic crust.
</p>
    <p><span>Q: </span>how does oceanic lithosphere differ from continental lithosphere in thickness. Composition, and density?
</p>
    <p><span>A: </span>Oceanic lithosphere is thinner and denser, with a more mafic crust largely basaltic whereas continents crust is granitic

</p>
    <p><span>Q: </span>how do we identify a plate boundary?
</p>
    <p><span>A: </span>Plate boundaries are marked by linear or arc-like segments of relatively high earthquake frequency earthquake belt.

</p>
    <p><span>Q: </span>describe the three types of plate boundaries.</p>
    <p><span>A: </span>Divergent plate boundaries exist where lithosphere on either side moves away from the boundary. At convergent plate boundaries, lithosphere on either side comes together, bringing either subduction of oceanic lithosphere ,  or collision of two continental plates. At transform plate boundaries, plates slide past each other</p>
    <p><span>Q: </span>how does crust form along a mid-ocean ridge? What is a black smoker in a ridge?</p>
    <p><span>A: </span>The high-heat flux at the ridge melts mantle materiel to form magma, which is relatively light and rises to the surface. Some  of the magma crystallizes beneath the surface as gabbro or in thin basatlic dikes, and some erupts to form volcanic lava, which flows and ultimately solidifies to form pillow basalt; the water issued from the chimney is black due to minerals that come out of solutions s the superheated water cools on contact with surrounding  colder water.</p>
    <p><span>Q: </span>why is the oldest oceanic lithosphere found on the earth today less than 200 million years old?</p>
    <p><span>A: </span>Oceanic lithosphere greater than 200 million years old has been subjected down trenches.</p>
    <p><span>Q: </span>describe the major features of a convergent boundary.</p>
    <p><span>A: </span>If the convergent boundary is a subduction  zone, it is marked by a deep trench where the subducting oceanic plate bends downward in opposition to the horizontal overriding plate. Sediments scrape off the subducting plate to form an accretionary prism at the edge of the overriding plate. Behind the prism, the melting associated with the subducting plate produces either a volcanic continental arc or a volcanic island arc. If a collisional boundary is present instead of a subduction zone, then a broad, thick, non volcanic mountain range will be present</p>
    <p><span>Q: </span>why are transform plate boundaries required on an earth with spreading and subducting plate boundaries?</p>
    <p><span>A: </span>Transform plate motion is a necessary transition between convergence and divergence.
</p>
    <p><span>Q: </span>what is a triple junction?
</p>
    <p><span>A: </span>A triple junction is a point at which three plate boundaries meet.</p>
    <p><span>Q: </span> how is a hot-spot track produced, and how can hot-spot tracks be used to track the past motions of a plate. why is only the volcano at the end of a hot-spot track active?</p>
    <p><span>A: </span>A large column of very hot rock from within the mantle rises at the tho spot and produces abundant magma, yielding copious volcanism to form the hot spot. Hot spots are relatively stable points, where as the plates that overlie them, and which bear the associated volcanoes, are moving. Over periods of millions of years, as a plate slides over the hot spot, extinct volcanoes are ferried in the direction of plate  motion, while new volcanoes are formed at the hot spot. Only the volcano directly over a hot spot will be active; all those dragged off a host spot lose their source of magma.</p>
    <p><span>Q: </span>Describe the characteristics of a continental rift, and give examples of where this process is occurring today.</p>
    <p><span>A: </span> Continental rifts appear as elongate valleys bounded on either side by faults. Volcanism occurs along the rift as asthenosphere rises to accommodate the thinning lithosphere and melts. Rifts can be found in east Africa and in the great basin of the western united states</p>





            </div>


              <FlashCards :definition="definition"/>


              <Quiz :quiz="quiz"/>


    <ToTop/>

              </div>
            </div>




        </div>


    </template>

    <style scoped>
    .tectonic-hero {
        background-image: url('/tectonics_1.png');
        height: 75vh;
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

    .tectonic-banner1 {
        background-image: url('/imgs/pexels-dominika-roseclay-1172842.webp');
        min-height: 45vh;
        background-position: center;
        background-size: cover
    }

    .tectonic-banner2 {
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
