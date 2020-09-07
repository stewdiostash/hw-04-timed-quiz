var bg = document.querySelector("body");
var questionSpace = document.getElementById("question-space");
var answerSpace = document.getElementById("answer-space");
var quizIndex = 0;

var qaSetOne = [
    "Arrays in JavaScript can be used to store ________",
    "Strings",
    "Arrays",
    "Objects",
    "Other arrays",
    "All of the above",
];

populateQA(qaSetOne);

setCorrectAnswer(5);

function populateQA(qaSet) {
    questionSpace.innerHTML = "";
    var question = document.createElement('h3');
    question.textContent = qaSet[0];
    questionSpace.append(question);
    for (var i = 1; i < qaSet.length; i++) {
        var answer = document.createElement('li');
        answer.textContent = qaSet[i];
        answer.setAttribute("data-index", i)
        console.log(answer);
        answerSpace.append(answer);
    }
}

function setCorrectAnswer(correctIndex) {
    var correct = document.getElementsByTagName("li")[correctIndex];
    correct.setAttribute("data-is-correct", "yes");
    console.log(correct);
};

answerSpace.addEventListener("click", function(event){
    if  (event.target.matches('li')) {
        bg.style.background = "#24FF6F";
        questionSpace.style.color = "black";
        console.log(question);
    }
});

var answerSetOne = [
    { 
        question: "Arrays in JavaScript can be used to store ________",
        choices: [
            "Strings",
            "Arrays",
            "Objects",
            "Other arrays",
            "All of the above",
        ],
        answer: "All of the above",
    },
];