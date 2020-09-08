var bg = document.querySelector("body");
var questionSpace = document.getElementById("question-space");
var answerSpace = document.getElementById("answer-space");
var quizIndex = 0;
var timer = document.getElementById("timer");
var secondsLeft = 61;
var startButton = document.querySelector("button");

var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var finalScoreScreen = document.getElementById("final-score-screen");
var highScoreScreen = document.getElementById("high-score-screen");

var questionContent = [
    { 
        question: "Arrays in JavaScript can be used to store:",
        choices: [
            "strings",
            "srrays",
            "objects",
            "other arrays",
            "all of the above",
        ],
        answer: "all of the above",
    },
    { 
        question: "A useful tool for printing content to the debugger is:",
        choices: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log",
        ],
        answer: "console.log",
    },
    { 
        question: "Which of the following is not a commonly-used data type:",
        choices: [
            "strings",
            "booleans",
            "alerts",
            "numbers",
        ],
        answer: "alerts",
    },
    { 
        question: "The condition in an if/else statement is enclosed within:",
        choices: [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets",
        ],
        answer: "parentheses",
    },
];

quizScreen.style.display = "none";
finalScoreScreen.style.display = "none";
highScoreScreen.style.display = "none";

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        // sendMessage();
      } 
    }, 1000);
  }

startButton.addEventListener("click", function(){
    startScreen.style.display = "none";
    quizScreen.style.display = "flex";
    newQuestion();
    setTime(); 
})


// Call questions

function newQuestion() {
    var currentQuestion = questionContent[quizIndex];
    var questionTitle = document.getElementById('question-title');
    questionTitle.textContent = currentQuestion.question;
    answerSpace.innerHTML = "";
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var answer = document.createElement('li');
        answer.setAttribute("value", currentQuestion.choices[i]);
        answer.textContent = currentQuestion.choices[i];
        // answer.onclick = answerClick;
        answerSpace.append(answer);
    }
}

function finalScore() {
    
}





// Check answerClick
    // Compare with correct answer in array
    // Add 1 to quiz index
    // Subtract time from clock if incorrect
    // If quizIndex < 3, newQuestion();
    // If quizIndex > 3, show score



answerSpace.addEventListener("click", function(event){
    if  (event.target.matches('li')) {
        if  (event.target.textContent === questionContent[quizIndex].answer) {
            bg.style.background = "#12e095";
        }
        if (event.target.textContent !== questionContent[quizIndex].answer) {
            bg.style.background = "#ff564a";
            // TODO: subtract 15s from timer
        }
        quizIndex++;
        newQuestion();
    };
});

