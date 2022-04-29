// variables
var currentQuestion = 0;
var bodyEl = document.querySelector("#page"); 


var startBtn = document.querySelector("#start-quiz");

// create main container
var mainEl = document.createElement("div");
mainEl.className = "main";

// create header element
var headerEl = document.createElement("div");
headerEl.className = "header";
headerEl.innerHTML = "<h4>View Highscores</h4>" +
  "<h4>Time: 0</h4>" +
  "</header>";

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

  // 
  // 



// load quiz questions
var LoadQuiz = function(){
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
}


var startQuiz = function() {
  // window.alert("quiz started");
  var answerString="";
  while (currentQuestion < 1){


  quizEl.innerHTML = "<h1>" + myQuiz[currentQuestion].question + "</h1>" + answerString;
  // quizEl.appendChild("<h1>" + myQuiz[currentQuestion].question + "</h1>");

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

  mainEl.innerHTML ="";
  mainEl.appendChild(quizEl);
}

var handleAnswer = function(event){
  // var target = event.target;
  answerSelected = event.target.getAttribute("data-answer-num");
alert(answerSelected)
}


// code executing here
var myQuiz = LoadQuiz();
bodyEl.appendChild(headerEl);
bodyEl.appendChild(mainEl)
mainEl.appendChild(introEl);





// Add event listener to generate button
startBtnEl.addEventListener("click", startQuiz);
quizEl.querySelector("h4").addEventListener("click", handleAnswer);