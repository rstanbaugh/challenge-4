// variables
var currentQuestion = 0;
var bodyEl = document.querySelector("#page"); 
var startBtn = document.querySelector("#start-quiz");

// create header element
var headerEl = document.createElement("div");
headerEl.className = "header";
headerEl.innerHTML = "<h4>View Highscores</h4>" +
  "<h4>Time: 0</h4>" +
  "</header>";
// load header
bodyEl.appendChild(headerEl);

// create main container
var mainEl = document.createElement("div");
  mainEl.className = "main";
// load main
bodyEl.appendChild(mainEl)


// create intro element in a div
var introEl = document.createElement("div");
  introEl.className = "intro";
  introEl.innerHTML = " <h1>Coding Quiz Challenge</h1>" +
  "<p>Try to answer the following code-related questions within the time limit. " +
  "Keep in mind that incorrect answers will penaliez your score/time by ten seconds.</p>";

// create start button element
var startBtnEl = document.createElement("button");
  startBtnEl.className = "btn";
  startBtnEl.id = "start-quiz";
  startBtnEl.textContent = "Start Quiz";
  introEl.appendChild(startBtnEl);

// create quiz element
var quizEl = document.createElement("div");
  quizEl.className = "quiz";

// create correct answer element
var correctAnswerEl = document.createElement("h2")
  correctAnswerEl.className = "results";
  correctAnswerEl.innerHTML = "<h2>Correct!!</h2>";

// create wrong answer element
var wrongAnswerEl = document.createElement("h2")
  wrongAnswerEl.className = "results";
  wrongAnswerEl.innerHTML = "<h2>Wrong Answer!!</h2>";

// present intro page
var loadIntro = function(){
    // clear main element of the intro html
    mainEl.innerHTML ="";
    
    // build intro page
    mainEl.appendChild(introEl);
};


// load quiz questions
var fetchQuizData = function(){
  var myQuiz = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "3"
  },
  {
    question: "The condition in an if / else statement is enclosed within _____.",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "3"
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "4"
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "3"
  },
  {
    question: "A very useful tool during development and debugging of printing content to the debugger is: ",
    answers: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    correctAnswer: "4"
  }
  ];
  return myQuiz;
};

// function to build html for current question
var getQuestion = function(currentQuestion){
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
    answerListEl.appendChild(answerEl);
};
quizEl.appendChild(answerListEl);
currentQuestion++;
};

var quiz = function() {
  // clear main element of the intro html
  mainEl.innerHTML ="";
  // push question to the DOM
  mainEl.appendChild(quizEl);
};

var handleAnswer = function(event){
  alert("answer handler")
  answerSelected = event.target.getAttribute("data-answer-num");
  if (answerSelected === myQuiz[currentQuestion].correctAnswer){
    quizEl.appendChild(correctAnswerEl);
  } else {
    quizEl.appendChild(wrongAnswerEl);
  }

  // move to next question
  currentQuestion++;
  if (currentQuestion <= parseInt(myQuiz.length,10)){
    getQuestion(currentQuestion);
    quiz();
  } else {
    endgame();
  }

}


// code executing here
// -------------------

// fetch the data for quiz questions and answers
var myQuiz = fetchQuizData();
// preload the first question
getQuestion(currentQuestion);

// load the intro
loadIntro();






// Add event listener to generate button
startBtnEl.addEventListener("click", quiz);
quizEl.querySelector("#answers").addEventListener("click", handleAnswer)
