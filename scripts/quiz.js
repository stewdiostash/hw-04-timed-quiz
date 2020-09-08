var bg = document.querySelector("body");
var questionSpace = document.getElementById("question-space");
var answerSpace = document.getElementById("answer-space");
var quizIndex = 0;
var timer = document.getElementById("timer");
var secondsLeft = 61;
var timerStop = false;
var startButton = document.querySelector("button");
var finalScoreForm = document.getElementById("final-score-form");
var initialsInput = document.getElementById("initials-input");

var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var finalScoreScreen = document.getElementById("final-score-screen");
var highScoreScreen = document.getElementById("high-score-screen");
var finalScoreSpan = document.getElementById("final-score-span")

var initials;
var score;
var highScoresList = [];

var questionContent = [
    { 
        question: "Arrays in JavaScript can be used to store:",
        choices: [
            "strings",
            "arrays",
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

start();

function start(){
    startScreen.style.display = "flex";
    quizScreen.style.display = "none";
    finalScoreScreen.style.display = "none";
    highScoreScreen.style.display = "none";
}

startButton.addEventListener("click", function(){
    startScreen.style.display = "none";
    quizScreen.style.display = "flex";
    finalScoreScreen.style.display = "none";
    highScoreScreen.style.display = "none";
    newQuestion();
    setTime(); 
});

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;

      if(timerStop){
        clearInterval(timerInterval);
        console.log(secondsLeft);
        score = secondsLeft;
        } else if (secondsLeft === 0) {
        clearInterval(timerInterval);
        score = secondsLeft;
        // sendMessage();
        } 
    }, 1000);
  }


// Call questions

function newQuestion() {
    var currentQuestion = questionContent[quizIndex];
    var questionTitle = document.getElementById('question-title');
    questionTitle.textContent = currentQuestion.question;
    answerSpace.innerHTML = "";
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var answer = document.createElement('li');
        // answer.setAttribute("value", currentQuestion.choices[i]);
        answer.textContent = currentQuestion.choices[i];
        // answer.onclick = answerClick;
        answerSpace.append(answer);
    }
}

answerSpace.addEventListener("click", function(event){
    if  (event.target.matches('li')) {
        if  (event.target.textContent === questionContent[quizIndex].answer) {
            bg.style.background = "#12e095";
            
        }
        if (event.target.textContent !== questionContent[quizIndex].answer) {
            bg.style.background = "#ff564a";
            // TODO: subtract 15s from timer
            // timer.textContent = secondsLeft - 10;
        }
    }
    if  (quizIndex < questionContent.length - 1) {
        quizIndex++;
        newQuestion();
    } else {
        timerStop = true;
        finalScore();
    } 
});


function finalScore() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    finalScoreScreen.style.display = "flex";
    highScoreScreen.style.display = "none";
    bg.style.background = "black";

    finalScoreSpan.textContent = score;
    
    finalScoreForm.addEventListener("submit", function(event){
        event.preventDefault();
        initials = initialsInput.value;
        highScoresList.push(initials + "-" + score);
        highScores();
    });
};


function highScores() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    finalScoreScreen.style.display = "none";
    highScoreScreen.style.display = "flex";

    

    console.log(highScoresList);
 
};

