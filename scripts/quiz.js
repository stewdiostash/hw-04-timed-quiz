var bg = document.querySelector("body");
var questionSpace = document.getElementById("question-space");
var answerSpace = document.getElementById("answer-space");

var quizIndex = 0;

var questionContent = [
    { 
        question: "Arrays in JavaScript can be used to store:",
        choices: [
            "Strings",
            "Arrays",
            "Objects",
            "Other arrays",
            "All of the above",
        ],
        answer: "All of the above",
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
];

// Start function


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

newQuestion();



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

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

//  wait(7000)

console.log(questionContent[0].answer)

// "#24FF6F"