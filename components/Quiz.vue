<script>
import AppQuizPopup from "./AppQuizPopup.vue";
export default {
    name: "Quiz",
    props: {
        quiz: Array,
    },
    methods: {
        checkAnswer(selectedAnswer, correctAnswer) {
            const answerEl = document.getElementById("quiz-answer");
            if (selectedAnswer === correctAnswer) {
                answerEl.classList.remove("red");
                answerEl.classList.add("green");
                answerEl.innerText = "That's Correct!";
            } else {
                answerEl.classList.remove("green");
                answerEl.classList.add("red");
                answerEl.innerText = "Sorry, try again.";
            }
        },
    },
    components: {
        AppQuizPopup,
    },
};
</script>

<template>
    <div class="m-auto md:w-4/5">
        <div>
            <strong class="text-6xl">Quiz</strong>
        </div>
        <div class="quiz w-full m-2">
            <div
                class="question flex flex-col rounded-xl shadow-lg p-4 mb-8"
                v-for="quizItem in quiz"
                :key="quizItem.id"
            >
                <strong class="mb-8 mt-4 text-xl">{{
                    quizItem.question
                }}</strong>
                <p id="quiz-answer" class="mb-4"></p>

                <div class="answers mb-2">
                    <button
                        v-for="(answer, index) in quizItem.answers"
                        :key="index"
                        @click="checkAnswer(answer, quizItem.correctAnswer)"
                        class="question-button"
                    >
                        {{ answer }}
                    </button>
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
