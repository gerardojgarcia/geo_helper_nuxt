<script>
import Quiz from "../components/Quiz.vue";

export default {
  name: "DesertGeology",

  components: {
    Quiz,
  },

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

    track() {
      this.$gtag.pageview(this.$route);
    },
  },

  data() {
    return {
      quiz: [],
    };
  },

  created() {
    this.quiz = [
      {
        id: 1,
        question: "desert Rocks _____",
        answerId: "quiz-answer",
        answer1: "Are formed through hte freezing of melt",
        answer2: " All are correct  ",
        answer3: "Are the most common type",
        answer4:
          "can be produced at the4 surface of the earth as well as deep below the surface ",
      },
      {
        id: 2,
        question:
          "Very early in Earth's history, it was so hot hat the surface was likely entirely molten",
        answerId: "quiz-answer2",
        answer1: "False",
        answer2: "True",
      },
      {
        id: 3,
        question: "Which type of magma has the greatest silica content",
        answerId: "quiz-answer3",
        answer1: "mafic",
        answer2: "Felsic",
        answer3: "intermediate",
        answer4: "ultramafic",
        method: "@click='correct(quiz.answerId)'",
      },
      {
        id: 4,
        question:
          "The formation of magma within the Earth is NOT caused by which of the following processes?",
        answerId: "quiz-answer4",
        answer1: "decompression (drop in pressure)",
        answer2: "Los off volatiles to the atmosphere",
        answer3: "transfer of heat form adjacent magma or very hot rocks",
        answer4: "Addition of volatiles",
      },
      {
        id: 5,
        question: "Compared to mafic desert rocks, all felsic desert rocks _____",
        answerId: "quiz-answer5",
        answer1: "cool and solidify more quickly",
        answer2: "Solidify at lower tempereatures",
        answer3: "cool and solidify more slowly",
        answer4: "solidify at higher temperatures",
      },
      {
        id: 6,
        question: "Viscosity depends on ______",
        answerId: "quiz-answer6",
        answer1: "temperature",
        answer2: "All are correct",
        answer3: "Volatile content",
        answer4: "silica content",
      },
      {
        id: 7,
        question: "In Bowen's Reaction Series, which mineral crystallizes first?",
        answerId: "quiz-answer7",
        answer1: "Plagioclase",
        answer2: "olivine",
        answer3: "Pyroxene",
        answer4: "quartz",
      },
    ];
  },
};
</script>

<template>
  <div class="w-full flex flex-col text-left">
    <div class="desert-hero bg-fixed pb-52">
      <div class="w-1/2 ml-16 mt-32 text-white">
        <h1 class="text-7xl text-shadow-lg">desert Rocks</h1>
        <p class="w-1/2 pl-2 mt-8 text-lg">
          Everything you wanted to know about desert Rocks.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-4 isolate bg-fixed top-52">
      <div class="m-0 col-span-1 fixed top-1/2 left-0 h-full z-1">
        <AppSideNav />
      </div>

      <div class="flex flex-col col-span-3 bg-fixed sticky left-64 px-16 overflow-auto">
        <div id="summary" class="desert-summary w-3/4 m-auto mt-16 indent-2">
          <div class="mb-16">
            <strong class="text-5xl text-shadow-sm">Topic Summary</strong>
          </div>

          <audio src="/"></audio>

          <p>
            Magma is liquid rock (melt) under the Earth’s surface. Lava is melt that has
            erupted from a volcano at the Earth’s surface.
          </p>
          <p>
            Magma forms when hot rock in the earth partially melts. This process occurs
            only under three circumstances—when the pressure decreases, when volatiles are
            added to hot rock. And when heat is transferred into the cast by magma rising
            from the mantle into the crust. Magma occurs in a rang eof compositions:
            Felsic(silicic) intermediate, mafic and ultramafic. The composition of magma
            reflects the original composition of the rock from which the magma formed and
            the way the magma evolves.
          </p>
          <p>
            magma rises from depth because of its buoyancy and because of pressure caused
            by the magma. The rate at which intrusive magma cools depends on the depth at
            which it intrudes, the size and shape of the magma body, and whiter
            circulating groundwater s is present. The cooling time influences the texture
            of an desert rock. extrusive desert rocks form from lava that erupts out of a
            volcano. Intrusive desert rocks develop from magma the that freezes inside the
            Earth.
          </p>
          <p>
            ava may solidify to form flows. Or it may explode into the air to form ash.
            Intrusive desert rocks form when magma intrudes into preexisting rock below
            Earth’s surface. Blob-shaped intrusions are called futons. Tabular intrusions
            that cut across layering are dikes, and those that form parallel to layering
            are sills. Huge intrusions, made up of many platoons, are known as batholiths.
          </p>
          <p>desert rocks are classified according to texture and composition.</p>
          <p>
            The origin of desert rocks can readily be understood in the context of plate
            tectonics. Magma forms at continental or island volcanic arcs along convergent
            margins, mostly because of the additions of volatiles to the asthenosphere
            above the subjecting slab. desert rocks form at ho spots, owing to the
            decompression melting o f a rising maple plume. desert rocks form at rifts asa
            result of either decompression melting of the asthenosphere below the thinning
            lithosphere or heat transfer from mantle melts int crustal rocks. desert rocks
            form along mid-ocean ridges because of decompression melting of the rising
            asthenosphere.
          </p>
        </div>

        <div class="desert-banner1 w-full bg-fixed flex flex-col text-black">
          <div
            class="question-box w-96 m-auto backdrop-blur-sm rounded-lg flex flex-col shadow-lg justify-center items-center"
          >
            <strong class="text-4xl mt-8">Knowledge Check</strong>

            <div class="w-full flex flex-col text-center mb-16">
              <p class="mt-2 text-lg ml-8">
                Volcanoes that do not occur at a plate boundary are known as ___
              </p>
              <p id="answer2" class="text-xl"></p>
              <div class="w-1/2 flex flex-row justify-center items-center m-auto">
                <button
                  class="right text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white mr-4"
                  @click="answer2"
                >
                  Hot Spot
                </button>
                <button
                  class="wrong text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white"
                  @click="wrongAnswer2"
                >
                  Continental Rifts
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="key_points" class="desert_points w-3/4 m-auto mt-16">
          <div class="mb-16">
            <strong class="text-5xl text-shadow-sm">Key Points</strong>
          </div>

          <p>- the Majority of the crust and mantle is made up of desert rocks</p>
          <p>
            - desert rocks solidify from melt - either lava or magma; melts are derived
            from pressure release. The addition of volatiles, or heat transfer from rising
            magma.
          </p>
          <p>
            - desert rocks are classified on the basis of texture. Which may be
            interlocking. Fragmental, or glassy, and also on the basis of mineral
            composition (felsic, intermediate, magic, or ultramafic) interlocking textures
            include coarse-grained and fine-grained examples. Grain size and cmopotino
            should be known for he standard sis: granite. Diorite, gabbro, rhyolite,
            andesite, and basalt.
          </p>
          <p>- Three types of intrusions: dikes, sills, and plutons</p>
          <p>
            - Settings of volcanism: mid ocean ridges. Island and contingent volcanic arcs
            , hot spots. Large desert provinces, and continental rifts.
          </p>
        </div>

        <div class="desert-banner2 w-full bg-fixed flex flex-col text-white">
          <div
            class="question-box w-96 m-auto backdrop-blur-sm rounded-lg flex flex-col shadow-lg justify-center items-center"
          >
            <strong class="text-4xl mt-8">Knowledge Check</strong>

            <div class="w-full flex flex-col text-center mb-16">
              <p class="mt-2 text-xl">Bombs, ash and cinders are all examples of _____</p>
              <p id="answer" class="text-xl"></p>
              <div class="w-1/2 flex flex-row justify-center items-center m-auto">
                <button
                  class="right text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white mr-4"
                  @click="wrongAnswer"
                >
                  Volatiles
                </button>
                <button
                  class="wrong text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white"
                  @click="answer"
                >
                  Pyroclastic Debris
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="questions_answers" class="desert_questions w-3/4 m-auto mt-16">
          <div class="mb-16">
            <strong class="text-5xl text-shadow-sm">Questions & Answers</strong>
          </div>

          <p>
            <span>Q: </span> 1. How is the process of freezing magma similar to the tof
            freezing water? How is it different?
          </p>
          <p>
            <span>A: </span> crystallization from magma is similar to freezing water in
            that crystals form from the liquid state upon passage of the liquid through a
            critical temperature (or range of termpartures). The most striking difference
            is in the temperature of crystallization. Additionally, multiple minerals
            crystallize from magma; more mafic minerals crystallize first, and more
            silicic minerals crystallize later at cooler temperatures.
          </p>
          <p>
            <span>Q: </span>What is the source of heat in the Earth? How did the first
            desert rocks on the planet form?
          </p>
          <p>
            <span>A: </span> Earth has derived heat from collisions, gravitational
            compression, decay of radioactive isotopes. Meteoric bombardment, and
            differentiation. Eart was intintailly so hot that its surface was molten; the
            first desert rocks solidified from this melt.
          </p>
          <p>
            <span>Q: </span> Describe the three processes that are responsisible for the
            formation of magmas.
          </p>
          <p>
            <span>A: </span> Descresing pressure may cause the liquid state of a mineral
            assemblage to be thermodynamically favored over solid crystal. b. The addition
            of volatiles (such as water and carbon dioxide) to a system of crystals (rock)
            may cause the liquid state to be thermodynamically favored. C. If a system of
            crystals obtains heat from a nearby source (such asa neighboring body of
            magma), it may melt.
          </p>
          <p>
            <span>Q: </span> Why are there so many different types of magmas? Does partial
            melting produce magma with the same composition as the parent rock from which
            it was derived.
          </p>
          <p>
            <span>A: </span> Magmas differ primarily with resect to chemical composition.
            Numerous processes can alter magmatic chemsitry and, thus, the minerals and
            mineral abundance’s of the crystals that ultimately freeze out of the melt.
            Changes in chemistry can occur through factional crystallization of melt.
            Partial melting of rock, and contamination through the melting and
            assimilation of surround host rock. In addition to the precesses that produce
            a chemical change, original source rocks vary. Melts also vary wit hrespect to
            volatile content. Partial melting produces melts that are more felsic that the
            risk that they're partially melted. (Minerals found in more felsic rocks have
            lower melting points than those more mafic rocks.)
          </p>
          <p>
            <span>Q: </span> Why do magmas rise from depth to the surface of the Earth?
          </p>
          <p>
            <span>A: </span> Magmas rise because they are less dense that the rocks that
            surround them, and at depth, there is great pressure the squeezes magma
            upward, where the pressure is less.
          </p>
          <p><span>Q: </span> What factors control the viscosity of a melt?</p>
          <p>
            <span>A: </span> silicic melts are more viscous than mafic melts beaus silica
            tetrahedra mutually lit to form complex structures that cannot move as rapidly
            as the simple structure found in more mafic melts. High-volatile content (such
            as water content) lessens viscosity. Cooler magmas are more viscous that
            hotter magmas of the same composition.
          </p>
          <p>
            <span>Q: </span> What facts control the cooling time of magma within the
            crust?
          </p>
          <p>
            <span>A: </span> magmas that cool deep within earth cool more slowly than
            those that cool near the surface. Large. Globular bodies of magma cool more
            slowly than those that are smaller and sheet-like. Cool ground water can
            absorb heat from magma and transport the heat away from the source, greatly
            increasing the cooling rate. Hot circulating groundwater can have the opposite
            effect.
          </p>
          <p>
            <span>Q: </span> What is the difference between a sill and a dike. And how do
            both differ from a pluton?
          </p>
          <p>
            <span>A: </span>sills for parallel t the layered rocks into which they
            intrude; dikes cut across layered rocks. BOth are tabular (sheet-like)
            intrusions, whereas plutons are blob-shaped.
          </p>
          <p><span>Q: </span> How does grain size reflect the cooling time of magma?</p>
          <p>
            <span>A: </span>large, thermodynamically stable crystals from when a melt
            cools and crystallizes gradually. Rapidly cooling and crystallizing melts do
            not leave sufficient time for large crystals to become organized.
          </p>
          <p>
            <span>Q: </span> What does the picture of grain sizes in a porphyritic desert
            rock indicate about its cooling history?
          </p>
          <p>
            <span>A: </span>porphyritic desert rocks occur when an initial phase of
            gradual cooling with in the earth gives way to much more rapid cooling
            subsequent to eruption.
          </p>
          <p>
            <span>Q: </span> Describe the way magmas are produced in t subduction zones.
          </p>
          <p>
            <span>A: </span> Below 150km, heat causes volatiles within the subducting
            oceanic, lithospheric slab to be released into the ultramafic asthenosphere of
            the overriding plate. Partial melting of the asthenosphere produces basaltic
            magma, which migrates upward though the lithosphere of the overriding plate to
            erupt at the surface. Depending on the amount of fractional crystallization
            that occurs during transit, the originally basaltic mafic magma may extrude as
            a intermediate or a rhyolitic melt.
          </p>
          <p>
            <span>Q: </span> What processes in the mantle may be responsible for causing
            hot-spot volcanoes to form?
          </p>
          <p>
            <span>A: </span>these volcanoes may form when an isolated, cylindrical plume
            of hot material from the lower mantle rises upward. When it reaches the
            lithosphere ,pressure is low enough ti initiate partial melting, forming
            basaltic melt from the ultramafic rock. The melt rises further to reside in a
            magma chamber in the crust until it erupts, forming a volcano.
          </p>
          <p>
            <span>Q: </span> Describe how magmas are produces at continental rifts. Why
            can you find both basalt and rhyolite at such settings?
          </p>
          <p>
            <span>A: </span>rifting forces thin out the lithosphere local, decreasing the
            pressure on the underlying asthenposhere. This pressure release triggers
            partial melting of ultramafic mantle rock, which yields mafic magma. If the
            magma rises more slowly, it will undergo magmatic evolution involving
            fractional crystallization ant melting of surround ing host rock. These
            processes make the melt more felsic. So that it might exude with rhyolitic
            composition.
          </p>
          <p>
            <span>Q: </span> What is a large desert province LIP? How might the formation
            of LIPS have affected the Earth System?
          </p>
          <p>
            <span>A: </span>A large desert province is argon in the crust that contains an
            unusually large volume of desert rock. The formation of such province might
            have affected the earth system in a number of ways . For example, large
            quantities of submarine basalt might have led to the inundation of conintinest
            by shallow seas. These large submarine basalts might have also changed
            patterns of ocean circulation, which could have then altered the climate of
            Earth. The eruption of such large quantities of lava might hav exchanged the
            chemical composition of the atmosphere and subsequently incurred the supply of
            nutrients to the ocean, bringing the about the extinction of many organisms.
          </p>

          <p>
            <span>Q: </span> Why does melting take place beneath the axis of a mid-ocean
            ridge?
          </p>
          <p>
            <span>A: </span> Hot asthenosphere rises to take the place of material that
            has poured to either side the axis. Closer to the surface, pressure is less
            than at the depth from which the atmospheric material rose, so the
            asthenosphere partially melts.
          </p>
        </div>

        <Quiz :quiz="quiz" />
        <ToTop />
      </div>
    </div>
  </div>
</template>

<style scoped>
.desert-hero {
  background-image: url("/desert_geo_1.webp");
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

.desert-banner1 {
  background-image: url("/desert_geo_1.webp");
  min-height: 45vh;
  background-position: center;
  background-size: cover;
}

.desert-banner2 {
  background-image: url("/desert_geo_1.webp");
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
