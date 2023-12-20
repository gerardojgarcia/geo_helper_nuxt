<script>
export default {
  name: "TopicPageLayout",
};
</script>

<template>
  <div class="w-full flex flex-col text-left">
    <div class="earth-hero bg-fixed pb-52 flex flex-col">
      <div class="md:w-1/2 md:ml-16 mt-32 text-white">
        <h1 class="text-7xl text-shadow-lg"></h1>
        <p class="md:w-1/2 pl-2 mt-8 text-lg"></p>
      </div>
    </div>
    <div class="flex flex-col md:grid grid-cols-4 isolate md:bg-fixed md:top-40">
      <div class="m-0 col-span-1 fixed top-1/3 left-0 z-1">
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

          <p>.</p>
          <p>
            <nuxt-img src="/" alt="Red Shift" />
          </p>
          <p></p>
          <p></p>

          <p>
            <nuxt-img src="/" alt="Image of the layers of the earth" />
          </p>

          <p></p>
        </div>

        <div class="earth-banner1 w-full bg-fixed flex flex-col text-black">
          <div
            class="question-box m-auto backdrop-blur-sm rounded-lg flex flex-col shadow-lg justify-center items-center flex-wrap"
          >
            <strong class="text-4xl mt-8"></strong>

            <div class="w-full flex flex-col text-center mb-16">
              <p class="mt-2 text-lg md:ml-8 break-normal"></p>
              <p id="answer2" class="text-xl"></p>
              <div class="w-1/2 flex flex-row justify-center items-center m-auto">
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
            <strong class="text-5xl text-shadow-sm"></strong>
          </div>

          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>

          <nuxt-img src="/" alt="Image of the layers of the earth" />
          <p></p>
          <p></p>
          <p></p>
        </div>

        <div class="earth-banner2 w-full bg-fixed flex flex-col text-white">
          <div
            class="question-box m-auto backdrop-blur-sm rounded-lg flex flex-col shadow-lg justify-center items-center"
          >
            <strong class="text-4xl mt-8"></strong>

            <div class="w-full flex flex-col text-center mb-16">
              <p class="mt-2 text-xl"></p>
              <p id="answer" class="text-xl"></p>
              <div class="w-1/2 flex flex-row justify-center items-center m-auto">
                <button
                  class="right text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white mr-4"
                  @click="answer"
                >
                  Oceanic Crust
                </button>
                <button
                  class="wrong text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white"
                  @click="wrongAnswer"
                ></button>
              </div>
            </div>
          </div>
        </div>

        <div id="questions_answers" class="earth_questions md:w-3/4 m-auto mt-16">
          <div class="mb-16">
            <strong class="text-5xl text-shadow-sm"></strong>
          </div>

          <p>
            <span>Q: </span>
          </p>
          <p>
            <span>A: </span>
          </p>
          <p><span>Q: </span></p>
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
          <nuxt-img src="/" alt="Image of the layers of the earth" width="500px" />
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

<style scoped></style>
