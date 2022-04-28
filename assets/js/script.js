// variables
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


  // 
  // 

  // create quiz element
  // var quizEl = document.createElement("div");
  //   quizEl.className = "quiz";
  //   quizEl.innerHTML = "<h1> blah blah blah</h1>" +
  //     for (var i=0; i < 4, i++){
  //       (i+1)+". Answer" +
  //     }.



// load quiz questions
var myQuiz = function(){
  var myQuiz = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: {
      1: "strings",
      2: "booleans",
      3: "alerts",
      4: "numbers"
    },
    correctAnswer: "3"
  },
  {
    question: "The condition in an if / else statement is enclosed withing _____.",
    answers: {
      1: "quotes",
      2: "curly brackets",
      3: "parenthesis",
      4: "square brackets"
    },
    correctAnswer: "3"
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: {
      1: "numbers and strings",
      2: "other arrays",
      3: "booleans",
      4: "all of the above"
    },
    correctAnswer: "4"
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: {
      1: "commas",
      2: "curly brackets",
      3: "quotes",
      4: "parenthesis"
    },
    correctAnswer: "3"
  },
  {
    question: "A very useful tool during development and debugging of printing content to the debugger is: ",
    answers: {
      1: "JavaScript",
      2: "terminal / bash",
      3: "for loops",
      4: "console.log"
    },
    correctAnswer: "4"
  }
  ];
  return myQuiz;
}

function startQuiz () {
  window.alert("quiz started");
}



var startQuiz = function(){

};


// code executing here
bodyEl.appendChild(headerEl);
bodyEl.appendChild(mainEl)
mainEl.appendChild(introEl);

mainEl.innerHTML ="";
mainEl.innerHTML = "<h1>hello world!";
// mainEl.appendChild(quizEl);


// Add event listener to generate button
startBtnEl.addEventListener("click", startQuiz);