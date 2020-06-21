//Saving initials here | while also preventing the page from re-freshing when clicking submit
$("#submit-intials-btn").click(function () {
    event.preventDefault();
    console.log("button is clicked");
    let initialsInput = document.getElementById("initials-input")
    let initials = initialsInput.value;
    console.log(initials);
    localStorage.setItem("initals", initials);
});

//Grabbing the score from local storage and appending to screen
let playerScore = document.querySelector("#players-score");
let getScore = localStorage.getItem("Your score");
console.log("getScore: ", getScore);
playerScore.textContent = "Your score: " + getScore;