// Assignment Code
var startBtn = document.querySelector("#start-quiz");

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