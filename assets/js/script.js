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

// Main container has been constructed
//  Body
//    -> header   
//    -> main


// create intro element in a div 
// to hold all html for main section of intro page)
var introEl = document.createElement("div");
  introEl.className = "intro";
  introEl.innerHTML = " <h1>Coding Quiz Challenge</h1>" +
  "<p>Try to answer the following code-related questions within the time limit. " +
  "Keep in mind that incorrect answers will penaliez your score/time by ten seconds.</p>";

// create start button element and append to introEl
var startBtnEl = document.createElement("button");
  startBtnEl.className = "btn";
  startBtnEl.id = "start-quiz";
  startBtnEl.textContent = "Start Quiz";
  introEl.appendChild(startBtnEl);
//  end intro


// create quiz element to hold all html for main section of quiz page
var quizEl = document.createElement("div");
  quizEl.className = "quiz";

// create correct answer element - shown when question answered correctly
var correctAnswerEl = document.createElement("h2")
  correctAnswerEl.className = "results";
  correctAnswerEl.innerHTML = "<h2>Correct!!</h2>";

// create wrong answer element - shown when question answered incorrectly
var wrongAnswerEl = document.createElement("h2")
  wrongAnswerEl.className = "results";
  wrongAnswerEl.innerHTML = "<h2>Wrong Answer!!</h2>";
//  end initial quiz element section


// load intro page
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
    answerListEl.appendChild(answerEl);
};
quizEl.appendChild(answerListEl);
};

var quiz = function() {
  mainEl.innerHTML ="";         // clear main element of the intro html
  mainEl.appendChild(quizEl);   // push question to the DOM

  while (currentQuestion < myQuiz.length && timeLeft()) {
    // alert(currentQuestion);
    nextQuestion(currentQuestion);  // load question
    currentQuestion++;
  }
};

// event handler for answer click
var handleAnswer = function(event){
  // alert("answer handler")
  answerSelected = event.target.getAttribute("data-answer-num");
  if (answerSelected === myQuiz[currentQuestion].correctAnswer){
    quizEl.appendChild(correctAnswerEl);
  } else {
    quizEl.appendChild(wrongAnswerEl);
  }

  // move to next question
  currentQuestion++;
  if (currentQuestion <= parseInt(myQuiz.length,10)){
    nextQuestion(currentQuestion);
    quiz();
  } else {
    endgame();
  }

}

// to be develeped later - game timer
var timeLeft = function(){
  return true;
}


// quiz execution begins here
var myQuiz = fetchQuizData();   // fetch the data for quiz questions and answers
nextQuestion(currentQuestion);  // preload the first question
loadIntro();                    // load the intro page




// Event listeners
startBtnEl.addEventListener("click", quiz);   // start button on intro page
quizEl.querySelector("#answers").addEventListener("click", handleAnswer)  // quizEl has to be set before calling
