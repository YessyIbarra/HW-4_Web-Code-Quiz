// This is where we are capturing the element (in HTML file) so we have refrence to it in this JS file
let questionText = document.querySelector("#question-text");
let optionBox =document.querySelector("#option-box");
let questionIndex=0;


//Created a variable = Object array with 5 questions, choices and answers
let quizQuestions = [
  {
    question: "Inside which HTML do we put the JavaScript?",
    option: ["<script>", "<javascript>", "<scripting>", "<js>"],
    answer: "<script>"
},
  {
    question: "Where is the correct place to insert a JavaScript?",
    option: ["The <body> section", "Both the <head> section and the <body> section are correct", "the <head> section"],
    answer: "Both the <head> section and the <body> section are correct",
},
  {
    question: "How do you create a function in JavaScript?",
    option: ["function:myFunction()", "function myFunction()", "function=myFunction()"],
    answer: "function myFunction()",
},
{
    question: "How do you call a function named 'myFunction'?",
    option: ["call function myFunction()", "myFunction()", "call myFunction()"],
    answer: "myFunction()",
},

{
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5",
    option: ["if i=! 5 then", "if i <> 5", "if (i !=5)"],
    answer: "if (i !=5)"
},
]
console.log(quizQuestions)
//questionText is linked to a div in HTML.
//questionIndex is equal to 0
function load() {
  questionText.textContent=quizQuestions[questionIndex].question
  createOptions();
};


//Loop to go through each option
function createOptions(){
  for (let i=0 ; i<quizQuestions[questionIndex].option.length; i++){
    let option=document.createElement("div");
    option.textContent=quizQuestions[questionIndex].option[i];
    optionBox.appendChild(option);
    console.log(option);
  }
  
};
