//Created a variable = Object array with 5 questions, choices and answers here
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

//                             CREATING QUIZ QUESTIONS & OPTIONS FUNCTION HERE
// This is where we are capturing the element (in HTML file) so we have refrence to it in this JS file
let questionText = document.querySelector("#question-text");
let optionBox = document.querySelector("#option-box");
let correctOrIncorrectDisplayed = document.querySelector("#correct-or-incorrect");
let questionIndex = 0;

//If you reach the end of the quiz | Clear the page | Go to score.html -- else 
function load() {
  if (questionIndex === quizQuestions.length) {
    clearPage();
    window.location.href = "score.html" // RUN FINAL DISPLAY FUNCTION & function that clears out what I had.
  }
  else {
    questionText.textContent = quizQuestions[questionIndex].question
    createOptions();
  }
};

//                                          FUNCTION TO CLEAR PAGE
function clearPage() {
  optionBox.innerHTML = " ";
  questionText.innerHTML = " ";
};

//Loop to go through each question and append to HTML to show up on screen
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

//                        EVALUTAE THE USER'S INPUT HERE THEN MOVE ON TO NEXT QUESTION
function nextQuestion() {
  let userAnswer = this.getAttribute("data-answer");
  let correctAnswer = quizQuestions[questionIndex].answer
  //console.log(this.getAttribute("data-answer"), quizQuestions[questionIndex].answer) //need to get data attribute from what was clicked and evaluate if it was the right answer or not
  //questionIndex=1 to go to next index in the object array. 
  correct(userAnswer == correctAnswer);
  questionIndex++;
  load();
};

//                       DISPLAY "CORRECT!" | And "Incorrect!" and removing time FUNCTION HERE 
//Display 'Correct!' if correct function
//Display 'Incorrect" if incorrect answer is chosen
function correct(isCorrect) {
  console.log(isCorrect)
  let correctAlert = document.createElement("div");
  if (isCorrect) {
    correctAlert.textContent = "Correct!";
    calcScore();
  }
  else {
    correctAlert.textContent = "Incorrect!";
    removeTime();

  }
  correctOrIncorrectDisplayed.appendChild(correctAlert)
};

//                             Function to calc score and save to local storage
let score = 0;
//let playerScore = document.querySelector("#players-score");

//Adding 20 points for each question answered right
function calcScore() {
  score += 20;
  console.log(score);
  localStorage.setItem("Your score", score);
};

//                                      SETTING UP TIMER COUNTDOWN HERE
let timeOnScreen = document.querySelector("#time-on-screen")
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

