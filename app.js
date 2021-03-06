



var app = new Vue({
    el: "#app",
    data:{
        // to attach your global quiz variable to a data variable:
        // myQuiz: QUIZ,
        page: "titlePage",
        quiz: [
            {title: "Question 1",
            questionText: "What is your favorite color?",
            answers: [
                {text: "red", correct: false},
                {text: "blue", correct: false},
                {text: "cyan", correct: true},
                {text: "dark green", correct: false}
            ],
            userAnswer: ""},
            {title: "Question 2",
            questionText: "What is the 7th letter in the alphabet?",
            answers: [
                {text: "a", correct: false},
                {text: "b", correct: false},
                {text: "c", correct: true},
                {text: "d", correct: false}
            ],
            userAnswer: ""},
            {title: "Question 3",
            questionText: "Which is the Animal?",
            answers: [
                {text: "cat", correct: false},
                {text: "rigby", correct: false},
                {text: "dog", correct: true},
                {text: "bird", correct: false}
            ],
            userAnswer: ""},
            {title: "Question 4",
            questionText: "????",
            answers: [
                {text: "?", correct: false},
                {text: "?", correct: false},
                {text: "?", correct: true},
                {text: "?", correct: false}
            ],
            userAnswer: ""},
            {title: "Question 5",
            questionText: "hello?",
            answers: [
                {text: "hi", correct: false},
                {text: "hello", correct: false},
                {text: "no", correct: true},
                {text: "wazzup", correct: false}
            ],
            userAnswer: ""}
        ]
    },
    methods:{
        // used for showing questions individually
        nextQuestion : function () {},

        // used for showing questions individually
        previousQuestion : function () {},

        setPage: function (page) {},

        calculateScore: function () {},
        areAllQuestionsAnswered: function () {
            var count = 0
            for(i = 0; i < this.quiz.length; i++){
                if (this.quiz[i].userAnswer == "") {
                    count -= 1;
                }else{
                    count += 1;
                }
            }
            if (count == 5){
                    console.log("Finished");
                    this.page = "scorePage";
                    console.log(count);
                    console.log(this.page);
            } else{
                console.log("Not Finished");
                console.log(count);
            }
        },
        checkCorrectAnswers: function () {
            var score = 0
            for (i = 0; i > this.quiz.length; i++){
                if (this.quiz[i].userAnswer.correct == true) {
                    score += 1;
                }
            }
        }
    },
    computed: {
        // a function that returns true if 0 userAnswer fields are blank ("")
        // IF there is still 1 or more blank ("") userAnswer field, return false
        
    }
});