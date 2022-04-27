// variables
var introEl = document.querySelector(".intro"); 
var pageContentEl = document.querySelector("#main");
var quizEl = document.querySelector("#quiz");

var startBtn = document.querySelector("#start-quiz");



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

function startQuiz () {
  window.alert("quiz started");
}

var readFile = function(){
  // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
    alert("success");
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }
};

var readFile = function(){
  File.FileReader
};

var startQuiz = function(){

};

// Add event listener to generate button
startBtn.addEventListener("click", startQuiz);