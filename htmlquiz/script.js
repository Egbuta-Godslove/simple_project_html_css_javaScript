const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questioncontainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,currentQuestionIndex
let quizScore =0;



const questions=[
    {
        question: 'Which one of these is a javaScript Framework?',
        answers: [
            { text: 'Python', correct: false},
            { text: 'Django', correct: false},
            { text: 'React', correct: true},
            { text: 'C#', correct: false}
        ],
    },

    {
        question: 'Which one is a fruit?',
        answers: [
            { text: 'Beans', correct: false},
            { text: 'Rice', correct: false},
            { text: 'Yam', correct: false},
            { text: 'Orange', correct: true}
        ],
    },

    {
        question: 'What is the capital of Nigeria?',
        answers: [
            { text: 'FCT(Abuja)', correct: true},
            { text: 'Calabar', correct: false},
            { text: 'Lagos', correct: false},
            { text: 'Enugu', correct: false}
        ],
    },

    {
        question: 'How many States and Capital do we have in Nigeria?',
        answers: [
            { text: '22', correct: false},
            { text: '36', correct: true},
            { text: '10', correct: false},
            { text: '18', correct: false}
        ],
    },

    {
        question: 'Who is the Head of the Family?',
        answers: [
            { text: 'Mother', correct: false},
            { text: 'Uncle', correct: false},
            { text: 'Brother', correct: false},
            { text: 'Father', correct: true}
        ],
    },
]