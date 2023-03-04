<script>
import AppQuizPopup from "./AppQuizPopup.vue";
export default {
  name: "Quiz",
  props: {
    quiz: Array,
  },
  data() {
    return {
      blank: true,
      right: true,
    };
  },

  methods: {
    answer() {
      const answers = document.querySelector(".answers");
      const children = answers.children;
    },

    correct() {
      const answerEl = document.getElementById("quiz-answer");
      const quizPopup = document.querySelector("#quiz-popup");
      answerEl.innerText = "";
      //  answerEl.innerText = "That's Correct!";
      answerEl.classList.remove("red");
      answerEl.classList.add("green");

      //quizPopup.classList.add("active");

      alert("That's Correct!");
    },
    wrong() {
      const answerEl = document.getElementById("quiz-answer");
      console.log("This uis false");
      answerEl.classList.remove("green");
      answerEl.classList.add("red");
      //answerEl.innerText = "Sorry, keep on studying!";

      alert("Sorry, try again.");
    },
  },
  components: {
    AppQuizPopup,
  },
};
</script>

<template>
  <div class="m-auto w-4/5">
    <div>
      <strong class="text-6xl">Quiz</strong>
    </div>
    <div class="quiz w-full m-2">
      <div
        class="question flex flex-col rounded-xl shadow-lg p-2 mb-8"
        v-for="quiz in quiz"
        :key="quiz.id"
      >
        <strong class="mb-8 mt-4 text-xl">{{ quiz.question }}</strong>
        <p :id="quiz.answerId" class="mb-4"></p>

        <div class="answers mb-2">
          <button @click="wrong()" class="question-wrong">{{ quiz.answer1 }}</button
          ><button @click="correct()" class="question-right">{{ quiz.answer2 }}</button>
          <button @click="wrong()" class="question-wrong">{{ quiz.answer3 }}</button
          ><button @click="wrong()" class="question-wrong">{{ quiz.answer4 }}</button>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
button {
  padding: 1rem;
  background-color: #14b8a6;
  margin-right: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.289);
  border: none;
  color: white;
  transition: all 300ms;
}

button:hover {
  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.38);
}

.green {
  color: green;
}

.red {
  color: red;
}

.active {
  opacity: 1;
}
</style>
