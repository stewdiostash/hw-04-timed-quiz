var correctClick = document.getElementById("correct");
var bg = document.querySelector("body");
var question = document.getElementById("question");



correctClick.addEventListener("click", function(){
    bg.style.background = "#24FF6F";
    question.style.color = "black";
    console.log(question);

});


// incrementButton.addEventListener("click", function(){
//     console.log(currentCount++);
//     countEl.textContent = currentCount;
// });

// decrementButton.addEventListener("click", function(){
//     if (currentCount > 0) {
//         console.log(currentCount--);
//         countEl.textContent = currentCount;
//     }
// });
