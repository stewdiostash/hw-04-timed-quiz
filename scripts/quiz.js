// variables
var bg = document.querySelector("body");
var questionSpace = document.getElementById("question-space");
var answerSpace = document.getElementById("answer-space");
var timer = document.getElementById("timer");
var startButton = document.querySelector("button");
var submitButton = document.querySelector("submit-button");
var restartButton = document.getElementById("restart-button");
var clearButton = document.getElementById("clear-button");
var finalScoreForm = document.getElementById("final-score-form");
var initialsInput = document.getElementById("initials-input");
var secondsLeft;
var timerStop;
var quizIndex;

var badgeCorrect = document.getElementById("correct-badge");
var badgeIncorrect = document.getElementById("incorrect-badge");

var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var finalScoreScreen = document.getElementById("final-score-screen");
var highScoreScreen = document.getElementById("high-score-screen");
var highScoreList = document.getElementById('high-score-list');
var finalScoreSpan = document.getElementById("final-score-span")

var initials;
var score;
var highScoresArray = [];
// var highScoresArray = JSON.parse(localStorage.getItem("highScoresArray"));
var viewHighScores = document.getElementById("view-high-scores");

// Question array of objects
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

// Start 
start();

// Click to view High Scores table
viewHighScores.onclick = function(){
    startScreen.style.display = "none";
    highScores();
}

// Set DOM for start
function start(){
    quizIndex = 0;
    secondsLeft = 61; 
    timerStop = false;
    startScreen.style.display = "flex";
    quizScreen.style.display = "none";
    finalScoreScreen.style.display = "none";
    highScoreScreen.style.display = "none";
    viewHighScores.style.display = "flex";
    timer.style.display = "none";
    badgeCorrect.style.display = "none";
    badgeIncorrect.style.display = "none";
}


// Start button starts timer and questions
startButton.addEventListener("click", function(){
    startScreen.style.display = "none";
    quizScreen.style.display = "flex";
    timer.style.display = "flex";
    newQuestion();
    gameTimer(); 
}); 

// Main 60 second timer
function gameTimer() {
    var timerInterval = setInterval(function() { 
      secondsLeft--;
      timer.textContent = secondsLeft;

      if(timerStop || secondsLeft === 0){
        clearInterval(timerInterval);
        score = secondsLeft;
        console.log(score);
        finalScore();
        }  
    }, 1000);
  }

// Secondary timer restores black BG after red/green flashes
function backToBlack() {
    var timerInterval = setInterval(function() {
        var secondsTilBlack = 1;
        secondsTilBlack--;

        if(secondsTilBlack === 0) {
            clearInterval(timerInterval);
            badgeCorrect.style.display = "none";
            badgeIncorrect.style.display = "none";
            bg.style.backgroundColor = "black";
          }     
        }, 1000);
      }

// Pulls questions for array of objects
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

// Responses for right and wrong answers
answerSpace.addEventListener("click", function(event){
    if  (event.target.matches('li')) {
        if  (event.target.textContent === questionContent[quizIndex].answer) {
            badgeCorrect.style.display = "flex";
            bg.style.background = "#12e095";  
            backToBlack();
        }
        if (event.target.textContent !== questionContent[quizIndex].answer) {
            badgeIncorrect.style.display = "flex";
            bg.style.background = "#ff564a";
            backToBlack();
            secondsLeft = secondsLeft - 10;
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

// Set DOM to record final score
function finalScore() {
    quizScreen.style.display = "none";
    finalScoreScreen.style.display = "flex";

    finalScoreSpan.textContent = score;
    
    finalScoreForm.addEventListener("submit", function(event){
        event.preventDefault();
        initials = initialsInput.value;
        highScores();
    });
};

// Set DOM to show highscore table
function highScores() {
    finalScoreScreen.style.display = "none";
    highScoreScreen.style.display = "flex";
    timer.style.display = "none";
    viewHighScores.style.display = "none";

    // highScoresArray = JSON.parse(localStorage.getItem("highScoresArray"));

    highScoreList.innerHTML = "";

    highScoresArray.unshift(initials + " - " + score);
    localStorage.setItem("highScoresArray", JSON.stringify(highScoresArray));

    for (var i = 0; i < highScoresArray.length; i++) {
        var scoreRecord = highScoresArray[i];
        var li = document.createElement('li');
        li.textContent = scoreRecord;
        highScoreList.append(li);
    }
};

// Restart
restartButton.onclick = function(){
    var initials;
    var score;
    start();
}

// // Clear Scores
// clearButton.onclick = function(){
//     highScoresArray = [];
//     localStorage.setItem("highScoresArray", JSON.stringify(highScoresArray));
//     highScores();
// }



