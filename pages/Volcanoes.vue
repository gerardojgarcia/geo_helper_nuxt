<script>
import ToTop from "../components/ToTop.vue";
import ToBottom from "../components/ToBottom.vue";
export default {
  name: "Volcanoes",
  components: { ToTop, ToBottom },
  methods: {
    answer() {
      const answerEl = document.getElementById("answer");

      answerEl.innerText = "That's correct!";

      answerEl.classList.remove("red");
      answerEl.classList.add("green");
    },

    wrongAnswer() {
      const answerEl = document.getElementById("answer");

      answerEl.classList.remove("green");
      answerEl.classList.add("red");

      answerEl.innerText = "Sorry, keep on studying!";

      //answerEl.classList.add('red')
    },
    answer2() {
      const answerEl = document.getElementById("answer2");

      answerEl.innerText = "That's correct!";

      answerEl.classList.remove("red");
      answerEl.classList.add("green");
    },

    wrongAnswer2() {
      const answerEl = document.getElementById("answer2");

      answerEl.classList.remove("green");
      answerEl.classList.add("red");

      answerEl.innerText = "Sorry, keep on studying!";

      //answerEl.classList.add('red')
    },
  },

  data() {
    return {
      quiz: [
        {
          id: 1,
          question:
            "Why do stars and constellations change location over the course of one night?",
          answerId: "quiz-answer",
          answer1: "The stars themselves are moving",
          answer2: "Our Planet rotates on its axis",
          answer3: "Our planet rotates around tour Sun",
          answer4: "None are correct",
        },
        {
          id: 2,
          question: "According to the Big Bang Theory, our Universe is _____",
          answerId: "quiz-answer2",
          answer1: "Contracting",
          answer2: "Expanding",
          answer3: "static (unchanging)",
          answer4: "None are correct",
        },
        {
          id: 3,
          question: "The estimated age of the Earth is _____",
          answerId: "quiz-answer3",
          answer1: "5 million years",
          answer2: "6 billion years",
          answer3: "14 billion years",
          answer4: "100 billion years",
          method: "@click='correct(quiz.answerId)'",
        },
        {
          id: 4,
          question:
            "Why do stars and constellations change location over the course of one night?",
          answerId: "quiz-answer4",
          answer1: "The stars themselves are movign",
          answer2: "Our Planet rotates on its axis",
          answer3: "Our planet rotates around tour Sun",
          answer4: "None are correct",
        },
        {
          id: 5,
          question:
            "Why do stars and constellations change location over the course of one night?",
          answerId: "quiz-answer5",
          answer1: "The stars themselves are movign",
          answer2: "Our Planet rotates on its axis",
          answer3: "Our planet rotates around tour Sun",
          answer4: "None are correct",
        },
      ],
      definition: [
        {
          id: 1,
          term: "Asthenosphere",
          definition: "The rock we're spinning on",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="w-full flex flex-col text-left">
    <div class="volcano-hero bg-fixed pb-52 flex-col">
      <div class="w-1/2 ml-16 mt-32 text-white">
        <h1 class="text-7xl text-shadow-lg">Volcanoes</h1>
        <p class="w-1/2 pl-2 mt-8 text-lg">
          Everything you wanted to know about Volcano.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-4 isolate bg-fixed top-52">
      <div class="m-0 col-span-1 fixed top-1/2 left-0 h-full z-1">
        <AppSideNav />
      </div>

      <div class="flex flex-col col-span-3 bg-fixed sticky left-64 px-16 overflow-auto">
        <div id="summary" class="volcano-summary w-3/4 m-auto md:ml-72 mt-16 indent-2">
          <div class="mb-16">
            <strong class="text-5xl text-shadow-sm">Topic Summary</strong>
          </div>

          <audio src="/"></audio>

          <p>
            Volcano are naturally occurring, solid substances. Formed by geologic
            processes. With a definable chemical composition and an internal structure
            characterized by an orderly arrangement of atoms, ions or molecules in a
            crystalline lattice. Most Volcano are inorganic.
          </p>
          <p>
            Biogenic Volcano are produced by organisms. The Volcano in shells are an
            example of biovolcanoization. in the crystalline lattice of Volcano, atoms
            occur in a specific pattern-one of nature’s first expels of ordering.
          </p>
          <p>
            Volcano can form by solidification of a melt, precipitation from a water
            solution, diffusion through a solid, the metabolism of organisms, and
            precipitation from a gas. About 4,000 different types of Volcano are known,
            each with a name and distinctive physical properties ( cleavage, magnetism and
            reactivity with acid. )
          </p>
          <p>
            the unique physical properties of a volcano reflect its chemical composition
            and crystal structure . By observing these physical properties, you can
            identify Volcano. the most convenient way for classifying Volcano is to group
            them according to their carbonates, and native metals.
          </p>

          <img src="public/imgs/chapter2/FIG02.21d_ESSGEO4_CH02.webp" alt="" />

          <p>
            silicate Volcano are the most common Volcano on Earth, the silicon-oxygen
            building block of silicate Volcano.
          </p>
          <p>
            groups of silicate Volcano are distinguished from each another by the ways in
            which the silicon-oxygen tetrahedra that constitute them are linked.
          </p>
          <p>
            gemstones are Volcano known for their beauty and rarity. The facets on cut
            gems used in jewelry are made by grind nada polishing the stones with a
            faceting machine. review question
          </p>
        </div>

        <div class="volcano-banner1 w-full bg-fixed flex flex-col text-black">
          <div
            class="question-box w-96 m-auto backdrop-blur-sm rounded-lg flex flex-col shadow-lg justify-center items-center"
          >
            <strong class="text-4xl mt-8">Knowledge Check</strong>

            <div class="w-full flex flex-col text-center mb-16">
              <p class="mt-2 text-lg ml-8">
                Which of the following is considered a volcano?
              </p>
              <p id="answer2" class="text-xl"></p>
              <div class="w-1/2 flex flex-row justify-center items-center m-auto">
                <button
                  class="right text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white mr-4"
                  @click="answer2"
                >
                  Salt
                </button>
                <button
                  class="wrong text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white"
                  @click="wrongAnswer2"
                >
                  Plastic
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="key_points" class="volcano_points w-3/4 m-auto mt-16">
          <div class="mb-16">
            <strong class="text-5xl text-shadow-sm">Key Points</strong>
          </div>

          <p>
            - Volcano are identified as using physics properties. The most commonly used
            properties are streak, color, hardness, luster, specifics gravity, crystal
            habit, and cleavage.
          </p>
          <p>
            - Volcano making up rock are formed in five ways: crystallization inform a
            melt,. Solid state diffusion through a preexisting crystal. Precipitation form
            a water solution, precipitation from a water solution. Precipitation forma
            gas, and biovolcanoization ( the activities of organisms)
          </p>
          <p>
            - Volcano are classified based on the anions or anionic groups that they
            contain. Volcano lacking anions are termed native elements. Other important
            groups are oxides, sulfides, halides, sulfates, and carbonates.
          </p>
          <p>- vast majority of earth’s Volcano are silicate</p>
          <p>
            - the degree of oxygen sharing among the tetrahedra that for m the basis of
            these Volcano allows for the great diversity of crystalline forms in
            silicates.
          </p>
        </div>

        <div class="volcano-banner2 w-full bg-fixed flex flex-col text-white">
          <div
            class="question-box w-96 m-auto backdrop-blur-sm rounded-lg flex flex-col shadow-lg justify-center items-center"
          >
            <strong class="text-4xl mt-8">Knowledge Check</strong>

            <div class="w-full flex flex-col text-center mb-16">
              <p class="mt-2 text-xl">What are biogenic Volcano made of?</p>
              <p id="answer" class="text-xl"></p>
              <div class="w-1/2 flex flex-row justify-center items-center m-auto">
                <button
                  class="right text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white mr-4"
                  @click="answer"
                >
                  Living Organisms
                </button>
                <button
                  class="wrong text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white"
                  @click="wrongAnswer"
                >
                  Biotite
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Questions & Answers-->

        <div id="questions_answers" class="volcano_questions w-3/4 m-auto mt-16">
          <div class="mb-16">
            <strong class="text-5xl text-shadow-sm">Questions & Answers</strong>
          </div>

          <p>
            <span>Q: </span>1. What is a volcano, as geologist understand the term? How is
            this definition different from the everyday usage of the word?
          </p>
          <p>
            <span>A: </span>a volcano is a naturally occurring solid, formed by geologic
            processes, that has a crystalline structure and a definable chemical
            composition.
          </p>
          <p><span>Q: </span>Why is glass not a volcano?</p>
          <p>
            <span>A: </span>glass is atomically disordered, having no fixed crystalline
            arrangement. Because there is no feed spatial arrangement for th atoms within
            glass glass fails the crystalline structure requirement in the definition of a
            volcano.
          </p>
          <p>
            <span>Q: </span>Salt is a volcano, but the plastic of an inexpensive pen is
            not. Why not?
          </p>
          <p>
            <span>A: </span>the plastic is not a volcano because it lacks crystal
            structure and does not occur naturally.
          </p>
          <p><span>Q: </span>Describe several ways in which volcano crystal can form.</p>
          <p>
            <span>A: </span>crystal can solidify from a melt, freezing from hot liquid
            rock the formation of igneous rock. Crystals can also form through solid-state
            diffusion, in which new crystal are formed from the atoms that were present in
            a preexisting volcano. Movement of atoms or iOS to form the new structure can
            be driven by heat and pressure; thus, solid-state diffusion is associated with
            metamorphic rock formation. volcano crystals can form through precipitation
            out of water or out of a gas. Precipitation of crystals might be due to
            inorganic physical processes, but might also result from the metabolic
            activities of organisms.
          </p>
          <p>
            <span>Q: </span>Why do some Volcano occur as euhedral crystals, whereas other
            occur as anhedral grains?
          </p>
          <p>
            <span>A: </span>euhedral crystals (those with clearly defined faces and edges)
            develop when crystal growth occurs in unoccupied space; crystal geometry is
            determined by the internal lattice structure of the elements make up the
            volcano. More commonly in igneous rocks, numerous crystal form more or less
            simultaneously in a tightly packed space . In this case, the competing
            crystals intertwine as they crystallize, forming irregular boundaries. Such
            crystals lack the clearly defined faces of exemplary euhedral crystals and are
            termed anhedral grains (their irregular shapes are reminiscent of those of
            weather grains of sediment)
          </p>
          <p>
            <span>Q: </span>List and define the principal physical properties used to
            identify a volcano. Which Volcano react with acid to produce CO2
          </p>
          <p>
            <span>A: </span>hardness (resistance to catching), cleavage (tendency of
            crystals to break along planes of weakness), color, luster (qualitative
            assessment of the way in the which volcano reflects light), crystal form or
            habit, speak, and specific gravity( mass per unit volume of the volcano).
            Carbonates react with weak acids and liberate carbon dioxide gas.
          </p>

          <p>
            <span>Q: </span>How can you determine the hardness of a volcano? What is the
            Mohs hardness scale?
          </p>
          <p>
            <span>A: </span>volcano hardness is determined through scratch tests. A
            relatively hard volcano is ale to scratch a softer volcano, but the converse
            statement is not true. The moms scale for hardness is an ordinal scale of
            scratch resistance, with rankings from 1 (talc) at the soft end of the scale
            to 10 (diamond) at the hard end.
          </p>
          <p>
            <span>Q: </span>How do you distinguish cleavage surface from crystal faces on
            a volcano? How does each type of surface form?
          </p>
          <p>
            <span>A: </span>cleavage planes occur in parallel sets; crystal faces are
            solitary, occurring only at the surface of the crystal. Cleavage surfaces
            arise due to planes of weak bonding within the crystal and can be seen because
            of crystal breakage ( or near breakage).
          </p>
          <p>
            <span>Q: </span>What is the prime characteristic the geologist. Use to
            separate separate Volcano into classes?
          </p>
          <p>
            <span>A: </span>Volcano are divided on the basis of chemical composition (more
            precisely the anions present in the volcano)
          </p>
          <p>
            <span>Q: </span>What is a silicon-oxygen tetrahedron? What is the anionic
            group that occurs in carbonate Volcano?
          </p>
          <p>
            <span>A: </span>a silicon-oxygen tetrahedron is an arrangement of four oxygens
            around a silicon atom with a regular tetrahedral shape; it is the anionic
            group food in all silicate Volcano.
          </p>
          <p>
            <span>Q: </span>On what basis do volcanoogists organize silicate Volcano into
            distinct groups?
          </p>
          <p>
            <span>A: </span>silicates are subdivided into distinct groups on the basis of
            the amount of oxygen sharing between neighboring silica tetrahedra.
          </p>
          <p>
            <span>Q: </span>What is relationship between the way in which silicon-oxygen
            tetrahedra bond in micas and the characteristic cleavage of micas?
          </p>
          <p>
            <span>A: </span>in micas, each silicon-oxygen bonds within these planes are
            very strong, but bonds perpendicular to sheets are much weaker. Cleavage in
            micas thus occur along planes with a single orientation, parallel to the
            sheets.
          </p>
          <p>
            <span>Q: </span> Why are some Volcano considered gemstones? How do you make
            the facets on a gem?
          </p>
          <p>
            <span>A: </span>gemstones are Volcano that tare valued for their aesthetic
            beauty. Facets on gems are cut by a faceting machine and do not usually
            represent original crystal faces or cleavage planes.
          </p>
          <p>
            <span>Q: </span>Compare the chemical formula of magnetite with that of
            biotite. Considering that iron is a relatively heavy element, which volcano
            has the greater specific gravity?
          </p>
          <p>
            <span>A: </span>both contain iron and oxygen, but biotite also contains a
            variety of other elements, including silicon , magnesium and hydrogen. Iron is
            a far more abundant component of magnetite that it is of biotite and has
            greater specific gravity.
          </p>
          <p>
            <span>Q: </span>Imagine that you two milky white crystals, each about 2cm
            across. You are told that one of the crystals is composed of plagioclase and
            the other of quartz. How can you determine which is which?
          </p>
          <p>
            <span>A: </span>the quickest and easiest way is a hardness test; quartz will
            scratch plagioclase, but the converse is not true. Quarts also lacks cleavage,
            whereas feldspars like plagioclase possess two cleavage directions.
            Plagioclase typically exhibits striations that be seen when the specimen is
            rotated in light.
          </p>
          <p>
            <span>Q: </span>Could you use crushed calcite to grind facets on a diamond?
            Why or why not?
          </p>
          <p>
            <span>A: </span>you could not; diamond is much harder than calcite, and the
            result of such efforts would be to powder the calcite.
          </p>
        </div>

        <FlashCards :definition="definition" />
        <Quiz :quiz="quiz" />

        <ToTop />
      </div>
    </div>
  </div>
</template>

<style scoped>
.volcano-hero {
  background-image: url("/imgs/pexels-pixabay-87651.webp");
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
  background-image: url("/imgs/pexels-dominika-roseclay-1172842.webp");
  min-height: 45vh;
  background-position: center;
  background-size: cover;
}

.volcano-banner2 {
  background-image: url("/imgs/pexels-arthur-brognoli-2342505.webp");
  min-height: 45vh;
  background-position: center;
  background-size: cover;
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
