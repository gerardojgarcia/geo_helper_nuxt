<script>
import FlashCards from "../components/FlashCards.vue";
import FlashCard from "../components/FlashCard.vue";
import Quiz from "../components/Quiz.vue";
import ToTop from "../components/ToTop.vue";
import ToBottom from "../components/ToBottom.vue";
import JumpToSection from "../components/JumpToSection.vue";
import AppQuizPopup from "~~/components/AppQuizPopup.vue";

export default {
  name: "Earth",

  data() {
    return {
      quiz: [],
      definition: [],
    };
  },

  created() {
    (this.quiz = [
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
      {
        id: 6,
        question:
          "Why do stars and constellations change location over the course of one night?",
        answerId: "quiz-answer6",
        answer1: "The stars themselves are moving",
        answer2: "Our Planet rotates on its axis",
        answer3: "Our planet rotates around tour Sun",
        answer4: "None are correct",
      },
      {
        id: 7,
        question:
          "Why do stars and constellations change location over the course of one night?",
        answerId: "quiz-answer7",
        answer1: "The stars themselves are moving",
        answer2: "Our Planet rotates on its axis",
        answer3: "Our planet rotates around tour Sun",
        answer4: "None are correct",
      },
    ]),
      (this.definition = [
        {
          id: 1,
          term: "Asthenosphere",
          definition: "the upper layer of the earth's mantle, below the lithosphere, in which there is relatively low resistance to plastic flow and convection is thought to occur.",
        },
        {
          id: 2,
          term: "atmosphere",
          definition: "the envelope of gases surrounding the earth or another planet.",
        },
        {
          id: 3,
          term: "Big Bang Theory",
          definition: "The big bang is how astronomers explain the way the universe began. It is the idea that the universe began as just a single point, then expanded and stretched to grow as large as it is right now—and it is still stretching!",
        },
        {
          id: 4,
          term: "Doppler Effect",
          definition: "an increase (or decrease) in the frequency of sound, light, or other waves as the source and observer move toward (or away from) each other. The effect causes the sudden change in pitch noticeable in a passing siren, as well as the redshift seen by astronomers.",
        },
        {
          id: 5,
          term: "lithosphere",
          definition: "the rigid outer part of the earth, consisting of the crust and upper mantle.",
        },
        {
          id: 6,
          term: "mantle",
          definition: "the region of the earth's interior between the crust and the core, believed to consist of hot, dense silicate rocks (mainly peridotite).",
        },
        {
          id: 7,
          term: "Moho",
          definition: "he boundary surface between the earth's crust and the mantle, lying at a depth of about 6–7 miles (10–12 km) under the ocean bed and about 24–30 miles (40–50 km) under the continents.",
        },
        {
          id: 8,
          term: "planetesimal",
          definition: "a minute planet; a body that could or did come together with many others under gravitation to form a planet.",
        },
        {
          id: 9,
          term: "red shift",
          definition: "the displacement of spectral lines toward longer wavelengths (the red end of the spectrum) in radiation from distant galaxies and celestial objects. This is interpreted as a Doppler shift that is proportional to the velocity of recession and thus to distance.",
        },
        {
          id: 10,
          term: "nebular theory",
          definition: "the theory that the solar and stellar systems were developed from a primeval nebula.",
        },
      ]);
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
      this.$gtag.pageview("/earth");
    },
  },





  components: {
    JumpToSection,
    FlashCards,
    FlashCard,
    Quiz,
    ToTop,
    ToBottom,
    AppQuizPopup,
  },
};
</script>

<template>
  <div class="w-full flex flex-col text-left">
    <div class="earth-hero bg-fixed pb-52 flex flex-col">
      <div class="md:w-1/2 md:ml-16 mt-32 text-white">
        <h1 class="text-7xl text-shadow-lg">The Earth</h1>
        <p class="md:w-1/2 pl-2 mt-8 text-lg">
          Everything you wanted to know about the planet we live on.
        </p>
      </div>
    </div>
    <div class="flex flex-col md:grid grid-cols-4 isolate md:bg-fixed md:top-52">
      <div class="m-0 col-span-1 fixed top-1/2 left-0 h-full z-1">
        <AppSideNav />
      </div>

      <div
        class="flex flex-col md:col-span-3 bg-fixed sticky md:left-64 px-16 overflow-auto"
      >
        <div id="summary" class="earth-summary m-auto mt-16 indent-2">
          <div class="mb-16">
            <strong class="text-5xl text-shadow-sm">Topic Summary</strong>
          </div>

          <audio src="/"></audio>

          <p>
            The geocentric model placed Earth at the center of the Universe, with the
            planets and sun orbiting around it within a celestial sphere speckled with
            starts. The heliocentric model, which gained acceptance during the
            Renaissance, placed the sun at the center. Earth is one of eight planets
            orbiting the sun. this solar system lies on the outer edge of a slowly
            revolving galaxy, the milky way, which is composed of about 300 billion stars.
            The universe contains at least hundred of billions of galaxies.
          </p>
          <p>
            The red shift of light from distant galaxies led to discovery of expanding
            universe theory. Most astronomers agree that this expansion began after the
            big bang, a cataclysmic explosion about 13.7 billion years ago. The first
            atoms (hydrogen and helium) of the universe developed within minutes of the
            big bang. These atoms formed vast gas clouds, called nebulae.

            <img src="/imgs/chapter1/FIG01.04d_ESSGEO4_CH01.webp" alt="Red Shift" />
          </p>
          <p>
            Gravity caused clumps of gas in the nebulae that coalesce into flattened disks
            with bulbous centers. The protostars at the center of these disks eventually
            became so dense and hot that fusion reactions began within them. When this
            happened, they because true stars, emitting heat and light. Earth, and the
            life forms on it contains elements that could have been produced only during
            the life cycle of stars. Thus, we are all made of stardust. Planets developed
            from the rings of gas and dust surrounding protostars. The gas and dust
            condensed into planetesimals. Which then clumped together to form
            protoplanets. And finally true planets. Inner rings became the terrestrial
            planets; outer rings grew into giant planets. The moon formed from debris
            ejected when a protoplanet collided with earth in the young solar system.
          </p>
          <p>
            A planet assumes a near spherical shape when it becomes os soft that gravity
            smooth out irregularities. The earth has a magnetic field that shield it from
            solar wind and cosmic rays. The earth has a magnetic field that shield it from
            solar wind and cosmic rays. A layer of gas surround the earth. This atmosphere
            (78% nitrogen, 21% oxygen. 1% other gasses) can be subdivided into distinct
            layers. Air pressure decrease with increasing elevation. The surface of the
            earth ca be divided into land 30% and ocean 70%. the consist of organic
            chemicals, minerals, glasses, rocks metals melts, and volatiles. Most rocks o
            earth contain silicate. We distinguish among various major rock types based on
            the proportion of silica.
          </p>

          <p>
            The earth’s interior can be divided into three compositionally distinct
            layers: the very thick crust, the rocky mantle, and the metallic core. The
            crust is a thin skin that varies in thickness from 7-10km (beneath the oceans)
            to 25-70km beneath continents. Oceanic crust is magic in compositions, whereas
            average upper continental crust is felicity to intermediate. The mantel is
            composed of ultramafic rock. The core is made of iron alloy.
            <img
              src="/imgs/chapter1/FIG01.13b_ESSGEO4_CH01.webp"
              alt="Image of the layers of the earth"
            />

            Studies of seismic waves have revealed that the mantle cab be subdivided into
            an upper mantle including a transition zone and a lower mantle. The core cab
            be subdivided into the outer core liquid and an inner core solid. Circulation
            of the outer core produces the earths magnetic field.
          </p>

          <p>
            The crust plus the uppermost part of the mantle constitute the lithosphere. A
            relatively rigid sphere. The lithosphere overlies the asthenosphere, mantle
            that is capable of flowing by convection.
          </p>
        </div>

        <div class="earth-banner1 w-full bg-fixed flex flex-col text-black">
          <div
            class="question-box m-auto backdrop-blur-sm rounded-lg flex flex-col shadow-lg justify-center items-center flex-wrap"
          >
            <strong class="text-4xl ml-6 mt-8">Knowledge Check</strong>

            <div class="w-full flex flex-col text-center mb-16">
              <p class="mt-2 text-lg md:ml-8 break-normal">
                What gas is the atmosphere primarily composed of?
              </p>
              <p id="answer2" class="text-xl"></p>
              <div class="md:w-1/2 flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-center md:items-center m-auto">
                <button
                  class="right text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white mr-4"
                  @click="answer2"
                >
                  Nitrogen
                </button>
                <button
                  class="wrong text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white"
                  @click="wrongAnswer2"
                >
                  Oxygen
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="key_points" class="earth_points md:w-3/4 m-auto mt-16">
          <div class="mb-16">
            <strong class="text-5xl text-shadow-sm">Key Points</strong>
          </div>

          <p>
            - Big Bang Theory: Distant galaxies are uniformly red-shifted rather than
            blue-shifted; this implies that they are all moving away from us. The farthest
            galaxies are those that are most strongly red-shifted. Meaning that they are
            receding the fastest. Extrapolation of velocities and trajectories into the
            past suggest that all matter in the Universe was contained in a single point,
            approximately 13.7 billion years ago. At that time, the Universe explosively
            came into existence.
          </p>
          <p>
            - Stars, including our sun, are nuclear fusion reactors. For most of their
            life histories (on the order of billions of years), hydrogen atoms are fused
            together to form helium. Later stages in stellar evolution include fusion of
            helium atoms and other, heavier elements; ultimately, iron is the heaviest
            element that can be produced through fusion reactions within stars.
          </p>
          <p>
            -after their cycles of fusion are complete, nebular stars violently explode
            (forming supernovae), producing elements heavier than iron and leaving behind
            a residue of diffuse nebulae, which may be recycled to form a new star at some
            point in the future.
          </p>
          <p>
            - Our sun is approximately 5 billion years old and is expected to continue
            fusing helium as it does today for about another 5 billion years. All eight
            planetary orbits are coplanar, and all the planets orbit in the same direction
            (counterclockwise as viewed from above Earth’s North Poole). These facts imply
            simultaneous planetary formation from a swirling conservation of angular
            momentum) the planets accreted from this nebular through gravitational
            attraction and haphazard collision. Pluto, long considered the “ninth planet”
            has seen ts status demoted; astronomers now recognize eight major planets.
          </p>
          <p>
            - the terrestrial planets are relatively small, dense, and rocky worlds; they
            were depleted of the cosmically superabundant (but very light) elements
            hydrogen and helium. The giant planets (Jupiter, Saturn, Uranus, and Neptune)
            retained these elements and are thus much larger and much less dense. (Saturn
            is less dense than water)
          </p>
          <p>
            - our moon, responsible for the earth’s tides, has a chemistry similar to that
            of earths’ mantle; the moon is thought to have originated from debris
            accumulated when a mars-sized protoplast collided with Earth very early in its
            history.
          </p>

          <img
            src="/imgs/chapter1/FIG01.17_ESSGEO4_CH01.webp"
            alt="Image of the layers of the earth"
          />
          <p>
            - earth is chemically divided into a thin, rocky crust dominated by silicate
            minerals; a thick mantle composed mostly of iron- and magnesium-rich silicates
            (subject locally to partial melting); and a thick metallic core made primarily
            of iron, the outer portion is liquid. YOU should know that seismic waves tell
            us that the outer core must be liquid and that this liquid metallic layer
            generates earth's magnetic field
          </p>
          <p>
            - physically, the uppermost layers of Earth are the rigid lithosphere (crust
            and uppermost mantle) and the asthenosphere, which is softer and flows. The
            “plates” of plates tectonic theory are discrete slabs of lithosphere, which
            move with respect to one another atop the weaker asthenosphere
          </p>
          <p>
            - earth is composed of a variety of materials with disparate physical
            properties (minerals, organics, metals, volatiles, and melts)
          </p>
        </div>

        <div class="earth-banner2 w-full bg-fixed flex flex-col text-white">
          <div
            class="question-box m-auto backdrop-blur-sm rounded-lg flex flex-col shadow-lg justify-center items-center "
          >
            <strong class=" text-4xl mt-8">Knowledge Check</strong>

            <div class="w-full flex flex-col text-center mb-16">
              <p class="mt-2 text-xl">Which is more dense?</p>
              <p id="answer" class="text-xl"></p>
              <div class="md:w-1/2 space-y-4 md:space-y-0 flex flex-col md:flex-row justify-center items-center m-auto">
                <button
                  class="right text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white mr-4"
                  @click="answer"
                >
                  Oceanic Crust
                </button>
                <button
                  class="wrong text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white"
                  @click="wrongAnswer"
                >
                  Continental Crust
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="questions_answers" class="earth_questions w-full md:w-3/4 m-auto mt-16">
          <div class="mb-16">
            <strong class="text-5xl text-shadow-sm">Questions & Answers</strong>
          </div>

          <p>
            <span>Q: </span>Contrast the geocentric and heliocentric universe concepts.
          </p>
          <p>
            <span>A: </span>the geocentric concept placed Earth at the center of the
            Universe, with the Sun and the other planets revolving around it. The
            heliocentric concept placed the Sun at the center, with Earth and the other
            planets revolving around it
          </p>
          <p><span>Q: </span>Describe how the Doppler effect works.</p>
          <p>
            <span>A: </span>Sound waves (and light waves) emanating from an approaching
            source arrive at a higher frequency than they would if the object were
            stationary. This frequency shift arises because each successive sound wave is
            emanated from a closer distance than was the previous wave. Our brains
            interpret these high frequencies (after transmission through our ears as a
            higher pitch. Once a wave source passes an observer, its sound waves have a
            reduced frequency, as each wave is emitted from a slightly more distant point.
          </p>
          <p>
            <span>Q: </span>What does the red shift of the galaxies tell us about their
            motion with respect to earth?
          </p>
          <p>
            <span>A: </span>all distant galaxies are moving away from our own, with the
            farthest galaxies moving the fastest
          </p>
          <p><span>Q: </span>what is the Big Bang, and when did it occur?</p>
          <p>
            <span>A: </span> The big Bang is an explosive phase of expansion of matter and
            space that occurred at the beginning of our Universe, 13.7 billion years ago
          </p>
          <p>
            <span>Q: </span>Describe the steps in the formation of our Solar System
            according to the nebular theory.
          </p>
          <p>
            <span>A: </span>The mass in our sun and the surround Solar system condensed
            from a swirling nebular *(cloud of gas and dust_. At the center of the
            nebular, most of the mass condensed to form the Sun, which graduate from
            protostar status when it becomes sufficiently massive – and thus hot enough –
            to fuse hydrogen. Within a flat protoplanetary disk surround the Sun, planets
            arose from gravity-driven accretion and the collision of smaller bodies termed
            planetesimals and protoplanets. Light gasses and other volatiles were ejected
            from the inner portion n of the disk as the Sun's heat intensified, so the
            terrestrial planets ended up as smaller spheres of relatively high density h
            refractory substances (rock and metal). Farther out, the giant planets
            incorporated an abundance volatiles such as hydrogen and helium to become much
            more massive but less dense
          </p>
          <p><span>Q: </span>why isn't the earth homogeneous?</p>
          <p>
            <span>A: </span>Early in its history, the Earth was hot enough to be entirely
            molten. Within the melt, the denser iron alloy sank to the center of the
            sphere due to gravity, leaving the less dense rocky material to predominate
            the outer portion of the Earth.
          </p>
          <p><span>Q: </span>Describe how the Moon was formed.</p>
          <p>
            <span>A: </span>The Moon Formed when a Mars -sized body collided with Earth
            early in the history of the Solar System. The force of the impact ejected
            materiel similar in composition to Earth’s mantle. This mantle like mass
            cooled and solidify, resulting in our Moon.
          </p>
          <p><span>Q: </span>Why is Earth round?</p>
          <p>
            <span>A: </span>Gravity forces objects the size of Earth to be nearly
            spherical (the most compact shape, minimize the distance of points form the
            center
          </p>

          <p>
            <span>Q: </span> what is the Earth’s Magnetic Field? What Causes the Aurora?
          </p>
          <p>
            <span>A: </span> The magnetic field of Earth is a region of space affected by
            the magnetic for of Earth Charged particles comprising solar wind are pulled
            toward the poles by the magnetic field. There they interact with gas molecules
            high in the atmosphere to produce the aurora.
          </p>

          <p>
            <span>Q: </span>What is Earth’s atmosphere composed of? Why would you die of
            suffocation if you were to eject from a fighter plane at an elevation of 12km
            without takin an oxygen tank with you?
          </p>
          <p>
            <span>A: </span>Earth’s atmosphere is mostly nitrogen (78%) and oxygen (21%),
            with minor amount of argon, carbon dioxide and other gases. The atmosphere
            becomes less and less dense with altitude; at 12 km, oxygen molecules are too
            sparse to support human life.
          </p>

          <p>
            <span>Q: </span>what is the proportion of land area to sear area on Earth?
          </p>
          <p>
            <span>A: </span>the proportion of land area to sear area is three to seven;
            earth consists of 30% land area and 70% sea area.
          </p>

          <p><span>Q: </span>What are the principal layers of earth?</p>
          <p>
            <span>A: </span>The principles composition layers of Earth are the crust,
            mantel and core
          </p>

          <p>
            <span>Q: </span>How do temperature and pressure change with increasing depth
            in the earth?
          </p>
          <p>
            <span>A: </span>both temperature and pressure increase with increasing depth
          </p>

          <p>
            <span>Q: </span>what is the Moho? How was it fires recognized? Describe the
            difference between continental crust and oceanic crust.
          </p>
          <p>
            <span>A: </span>The Moho is the crust-mantle boundary, first recognized by and
            abrupt changed in seismic-wave velocities. Continental crust is thicker, less
            magic, and more available in continental than oceanic crust.
          </p>

          <p>
            <span>Q: </span>what is the mantle composed of? Is there any melt within the
            mantle?
          </p>
          <p>
            <span>A: </span>The mantle is mostly made of an ultramafic silicate rock
            termed peridotite. There is a small amount of melt in the upper mantle.
          </p>

          <p>
            <span>Q: </span>What is the core composed of? How do the inner core and outer
            core differ from each other? Which layer produces the magnetic field?
          </p>
          <p>
            <span>A: </span>The core is mostly iron; the inner part is solid, whereas the
            outer part is liquid. Circulation of iron atoms in the liquid outer core
            generates the magnetic filed of the Earth.
          </p>
          <nuxt-img
            src="/public/imgs/chapter1/FIG01.15ab_ESSGEO4_CH01.webp"
            alt="Image of the layers of the earth"
            width="500px"
          />
          <p>
            <span>Q: </span>What is the difference between the lithosphere and the
            asthenosphere? Which layer is softer and flows more easily? At what depth does
            the lithosphere-asthenosphere boundary occur? Is this above or below the Moho?
            Is the asthenosphere entirely liquid?
          </p>
          <p>
            <span>A: </span>The lithosphere is relatively cool and rigid compared to the
            hot, soft asthenosphere, which flows more readily. The lithosphere consists of
            the crust 9oceanic basalt and gab bro, or continental granite) plus the
            uppermost mantle (peridotite) down to a depth of about 100 to 150lkm. This
            boundary lies below the Moho. The asthenosphere is only the molten (liquid) in
            places.
          </p>

          <p>
            <span>Q: </span>the farther a galaxy lies from Earth, the greater its red
            shift. Why?
          </p>
          <p>
            <span>A: </span>The galaxies that are farthest from earth will necessarily be
            those that have been traveling away from us most rapidly ever since the Big
            Bang.
          </p>

          <p>
            <span>Q: </span>Did all first-generation stars form at the same time? Why or
            why not?
          </p>
          <p>
            <span>A: </span>Not all first-generation stars would been born at exactly the
            same time. Star formation results from gravity pulling matter together out of
            more diffuse regular. Variation in nebular mass and density would assure that
            not all first generation stars were born at the same time, though all formed
            early in the history of the universe.
          </p>

          <p>
            <span>Q: </span>Why are the giant planets, which contain abundant gas and ice,
            farther from the Sun?
          </p>
          <p>
            <span>A: </span>At great distance from the sun. these volatile materials were
            protected from solar wind.
          </p>

          <p>
            <span>Q: </span>Recent observations suggest that the moon has a very small,
            solid core that is less than 3% of its mass. In comparison, earth’s core is
            about 33 of its mass. Explain why this difference might exist.
          </p>
          <p>
            <span>A: </span>The moon is thought to have formed when a Mars -sized body
            collided with earth early in its history. The impact hurled a portion of
            earth. Mostly mantle materiel with no contribution form the core, into orbit
            about our earth, where it solidified to form our Moon. The moon differentiated
            but with a minute amount of iron compare to the Earth.
          </p>

          <p><span>Q: </span>the moon has virtually no magnetosphere. Why?</p>
          <p>
            <span>A: </span>The moon has no liquid metallic layer inside the comparable to
            the earths outer core
          </p>

          <p>
            <span>Q: </span>popular media sometimes imply that the crust floats on a sea
            of magma. Is this a correct image the mantle just below the Moho? Explain your
            answer.
          </p>
          <p>
            <span>A: </span>No, the mantel just beneath the crust is not only solid but
            rigid. Together with the crust, it forms the lithosphere, Below the
            lithosphere, even the asthenosphere is mostly solid, though and ductile.
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
.earth-hero {
  background-image: url("/imgs/pexels-pixabay-87651.webp");
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

.earth-banner1 {
  background-image: url("/imgs/pexels-dominika-roseclay-1172842.webp");
  min-height: 45vh;
  background-position: center;
  background-size: cover;
}

.earth-banner2 {
  background-image: url("/imgs/pexels-arthur-brognoli-2342505.webp");
  min-height: 45vh;
  background-position: center;
  background-size: cover;
}

.question-box {
  min-width: 300px;
}

@media (max-width: 800px) {
  .question-box {
    max-width: 350px;
  }
}


</style>
