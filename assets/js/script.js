// variables
var currentQuestion = 0;
var timeLeft = 30;  // initial time left in game
var bodyEl = document.querySelector("#page"); 
var startBtn = document.querySelector("#start-quiz");
var introEl = document.querySelector("#intro");
var quizEl = document.querySelector("#quiz");
var startBtnEl = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");
var finalScoreEl = document.querySelector("#final-score");



// load quiz questions
var myQuiz = [{
  question: "Commonly used data types DO NOT include:",
  answers: ["strings", "booleans", "alerts", "numbers"],
  correctAnswer: "3"},
{
  question: "The condition in an if / else statement is enclosed within _____.",
  answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
  correctAnswer: "3"},
{
  question: "Arrays in JavaScript can be used to store ____.",
  answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
  correctAnswer: "4"},
{
  question: "String values must be enclosed within ____ when being assigned to variables.",
  answers: ["commas", "curly brackets", "quotes", "parenthesis"],
  correctAnswer: "3"},
{
  question: "A very useful tool during development and debugging of printing content to the debugger is: ",
  answers: ["JavaScript", "terminal / bash", "for loops", "console.log"],
  correctAnswer: "4"}
];

// create correct answer element - shown when question answered correctly
var correctAnswerEl = document.createElement("h2")
  correctAnswerEl.className = "results";
  correctAnswerEl.innerHTML = "<h2>Correct!!</h2>";

// create wrong answer element - shown when question answered incorrectly
var wrongAnswerEl = document.createElement("h2")
  wrongAnswerEl.className = "results";
  wrongAnswerEl.innerHTML = "<h2>Wrong Answer!!</h2>";
//  end initial quiz element section


var gameTimer = function(){
  var timer = setInterval(function(){
    if(timeLeft <= 0){
      clearInterval(timer);
      timerEl.innerHTML = "0";
      endGame(timeLeft);
    } else if (timeLeft === "done"){
      clearInterval(timer);
      timerEl.innerHTML = "0";
    } else {
      timerEl.innerHTML = timeLeft + "s";
    }
    timeLeft -= 1;
  }, 1000);
}



// load intro page
var loadIntro = function(){
introEl.style.display = "";
};


// function to build html for next question
var nextQuestion = function(currentQuestion){
  var answerString="";
  quizEl.innerHTML = "<h1>" + myQuiz[currentQuestion].question + "</h1>" + answerString;

  // create ul of answers
  var answerListEl = document.createElement("ul");
    answerListEl.id = "answers";

  // add the answers as li
  for (var j=0; j <  myQuiz[currentQuestion].answers.length; j++) {
    var answerEl = document.createElement("li");
      answerEl.setAttribute("data-answer-num",j+1);
      answerEl.textContent = (j+1)+". "+myQuiz[currentQuestion].answers[j];
      answerEl.addEventListener("click", handleAnswer);
      answerListEl.appendChild(answerEl);
  };
  quizEl.appendChild(answerListEl);
};


var startQuiz = function() {
  introEl.style.display = "none";
  nextQuestion(currentQuestion);
  gameTimer();
};

// called when out of time or all questions answered
var endGame = function(score){
  timeLeft="done";
  quizEl.style.display = "none";

  var pageContent = document.createElement("div");
  pageContent.innerHTML ="<h1>All Done!</h1><br>"+
    "Your final score is:".concat(score);
  
  finalScoreEl.appendChild(pageContent);
  
  finalScoreEl.style.display = ""
};


// event handler for answer click
var handleAnswer = function(event){
  answerSelected = event.target.getAttribute("data-answer-num");
  if (answerSelected === myQuiz[currentQuestion].correctAnswer){
    quizEl.appendChild(correctAnswerEl);
    timeLeft += 10;
  } else {
    quizEl.appendChild(wrongAnswerEl);
    timeLeft -= 10;
  }

  // move to next question
  currentQuestion++;
  if (currentQuestion < myQuiz.length){
    nextQuestion(currentQuestion);
  } else {
    endGame(timeLeft);
  }

}





// Event listeners
startBtnEl.addEventListener("click", startQuiz);   // start button on intro page
