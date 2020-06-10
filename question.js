//                Created a variable = Object array with 5 questions, choices and answers here
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
}
];



//                                     STARTINGQUIZ FUNCTION HERE
// This is where we are capturing the element (in HTML file) so we have refrence to this JS file
let startBtn = document.querySelector("#startButton");

// Adding event listener to have the 'somefunction' run when button is clicked
startBtn.addEventListener("click", startQuizFunction);

//When the start button is clicked this function is executed
function startQuizFunction(){
    console.log("I work!");
    startBtn.style.display= "none"; //Hide the start button
    startPTag.style.visibility="hidden"; //Hide the paragraph
    load();
    countdownTime();
}

 //                             CREATING QUIZ QUESTIONS & OPTIONS FUNCTION HERE
// This is where we are capturing the element (in HTML file) so we have refrence to it in this JS file
let questionText = document.querySelector("#question-text");
let optionBox =document.querySelector("#option-box");
let questionIndex=0;
                           
//questionText is linked to a div in HTML.
//questionIndex is equal to 0 to start from object array index 1
function load() {
  questionText.textContent=quizQuestions[questionIndex].question
  createOptions();
};


//Loop to go through each question option
function createOptions(){
  optionBox.innerHTML = "";
  for (let i=0 ; i<quizQuestions[questionIndex].option.length; i++){
    let option=document.createElement("button");
    option.textContent=quizQuestions[questionIndex].option[i];
    option.setAttribute("data-answer",quizQuestions[questionIndex].option[i])
    option.onclick = nextQuestion;
    optionBox.appendChild(option);
    console.log(option);
  } 
};



//                        EVALUTAE THE USER'S INPUT HERE THEN MOVE ON TO NEXT QUESTION
function nextQuestion() {
  let userAnswer = this.getAttribute("data-answer");
  let correctAnswer = quizQuestions[questionIndex].answer
  console.log(this.getAttribute("data-answer"),quizQuestions[questionIndex].answer) //need to get data attribute from what was clicked and evaluate if it was the right answer or not
  //questionIndex=1 to go to next index in the object array. 
  if (userAnswer == correctAnswer) {
    console.log("User got it right!");
    questionIndex++;
    correct();

  if (questionIndex === quizQuestions.length){
      clearPage();// RUN FINAL DISPLAY FUNCTION & function that clears out what I had. 
    } else {
      //"WRONG" show up on screen && Go to next question && take time off current time
      load();
    }
      
    }
  else {
    //need to figure out how to go to next question in object array;
  }
}

//                                          FUNCTION TO CLEAR PAGE
function clearPage (){
  optionBox.innerHTML=" ";
  questionText.innerHTML=" ";
}


//                                      DISPLAY "CORRECT!" FUNCTION HERE
//Display 'Correct!' if correct function
function correct() {
  let correctAlert = document.createElement("div");
  correctAlert.textContent = "Correct!";
  optionBox.appendChild(correctAlert);
  
};


//                                      SETTING UP TIME COUNTDOWN HERE
//Set - interval will be used in hw. I need to add a set interval function here
let timeOnScreen = document.querySelector("#time-on-screen")
let numberOfQuestions = quizQuestions.length;
let time= numberOfQuestions*15;

function countdownTime() {
  let timerInterval = setInterval(function() {
    timeOnScreen.textContent = "TIME: " + time;
    time--;

}, 1000)








// Remember JSON converts an Object into a string


//Example of how to call data from browser API
let name = "Yessy";

//store the item in local storage
localStorage.setItem("name", name);

//retrieve the value we just stored and save to a new variable
let gottenFromLocalStorage = localStorage.getItem("name");

//console.log to retrieve value
console.log(gottenFromLocalStorage);

//Open developer tools -> Click on "Application" tab
};