//Created object with 5 questions, choices and answers here
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
startBtn.addEventListener("click", startQuizFunction); // Adding event listener to have the 'somefunction' run when button is clicked

//When the start button is clicked this function is executed
function startQuizFunction() {
  startBtn.style.display = "none"; //Hide the start button
  startPTag.style.visibility = "hidden"; //Hide the paragraph
  load();
  countdownTime();
}

//                           CREATING QUIZ QUESTIONS & OPTIONS FUNCTION HERE
// This is where we are capturing the element (in HTML file) so we have refrence to it in this JS file
let questionText = document.querySelector("#question-text");
let optionBox = document.querySelector("#option-box");
let correctOrIncorrectDisplayed = document.querySelector("#correct-or-incorrect");
let questionIndex = 0;

//If you reach the end of the quiz | Clear the page | Go to score.html -- else load nex question & options
function load() {
  if (questionIndex === quizQuestions.length) {
    clearPage(); //this function clears the html I had in the beginning
    window.location.href = "score.html" // this takes you to the page to insert your initals and see final score
  }
  else {
    questionText.textContent = quizQuestions[questionIndex].question
    createOptions(); //this function loops through the question and options of the given object
  }
};

//                                          FUNCTION TO CLEAR PAGE
function clearPage() {
  optionBox.innerHTML = " ";
  questionText.innerHTML = " ";
};

//Loops through all of the options in the array and appends to HTML
function createOptions() {
  optionBox.innerHTML = "";
  for (let i = 0; i < quizQuestions[questionIndex].option.length; i++) {
    let option = document.createElement("button");
    option.textContent = quizQuestions[questionIndex].option[i];
    option.setAttribute("data-answer", quizQuestions[questionIndex].option[i])
    option.onclick = nextQuestion;
    optionBox.appendChild(option);
    console.log(option);
  }
};

//                    FUNCTION TO EVALUTAE THE USER'S INPUT THEN LOADS NEXT QUESTION & ANSWER
function nextQuestion() {
  let userAnswer = this.getAttribute("data-answer");
  let correctAnswer = quizQuestions[questionIndex].answer
  //console.log(this.getAttribute("data-answer"), quizQuestions[questionIndex].answer) //need to get data attribute from what was clicked and evaluate if it was the right answer or not
  correct(userAnswer == correctAnswer);
  questionIndex++;
  load();
};

//                       DISPLAY "CORRECT!" | And "Incorrect!" and removing time FUNCTION HERE 
function correct(isCorrect) {
  console.log(isCorrect)
  let correctAlert = document.createElement("div");
  if (isCorrect) {
    correctAlert.textContent = "Correct!"; //Display 'Correct!' if correct
    calcScore(); //Adds 20 points for each correct answer chosen
  }
  else {
    correctAlert.textContent = "Incorrect!"; //Display 'Incorrect" if incorrect
    removeTime(); //removes 15 seconds for each incorrect answer

  }
  correctOrIncorrectDisplayed.appendChild(correctAlert);
};

//                            FUNCTION TO CALCULATE SCORE AND SAVE TO LOCAL STORAGE
let score = 0;
//Adding 20 points for each question answered right
function calcScore() {
  score += 20;
  console.log(score);
  localStorage.setItem("Your score", score);
};

//                                      SETTING UP TIMER COUNTDOWN HERE
let timeOnScreen = document.querySelector("#time-on-screen");
let numberOfQuestions = quizQuestions.length;
let time = numberOfQuestions * 15;

function countdownTime() {
  let timerInterval = setInterval(function () {
    timeOnScreen.textContent = "TIME: " + time;
    time--;

  }, 1000)
};

//                                    SETTING UP REMOVE TIME FUNCTION
function removeTime() {
  timeOnScreen.textContent = "TIME: " + time;
  time -= 15;
};

