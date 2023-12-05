var questions = [
  "What planet do we live on?",
  "How many moons does Mars have?",
  "What planet is considered Earth's Sister?",
  "How many planets are in the solar system?",
  "What is the name of the sun?",
  "What is beyond Pluto?",
  "What is Pluto considered?",
];

var answers = [
  ["Jupiter", "Venus", "Mars", "Earth"],
  ["One", "Two", "Three", "Four"],
  ["Mercury", "Venus", "Uranus", "Neptune"],
  ["Nine", "Eight", "Ten", "Four"],
  ["Sol", "Beteleguese", "Alpha Centauri", "Sun"],
  ["Astroid Belt", "Gas Giants", "Kuiper Belt", "The Cloud"],
  ["A Dwarf Planet", "A Planet", "An Asteroid", "A Disney Character"],
];
var correctAns = [3, 1, 1, 1, 3, 2, 0];
var questionElement = document.querySelector(".questions");
var questionIndex = 0;
var button = document.querySelector(".button");
var buttons = document.querySelectorAll(".button");
var timer = 60;
var score = 0;

for (var i = 1; i < buttons.length; i++) {
  buttons[i].style.display = "none";
}

buttons[0].addEventListener("click", function () {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "block";
  }
  questionElement.textContent = questions[questionIndex];
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].querySelector("p").textContent = answers[questionIndex][i];
    buttons[i].addEventListener("click", handleAnswer);
  }
});

function handleAnswer(event) {
  var selectedAnswerIndex = Array.from(buttons).indexOf(event.target);
  if (selectedAnswerIndex === correctAns[questionIndex]) {
    score++;
    console.log(selectedAnswerIndex);
    console.log(correctAns[questionIndex]);
    console.log(correctAns);
    console.log("Correct answer selected. Score: " + score);
  } else {
    timer -= 10;
    console.log(selectedAnswerIndex);
    console.log(correctAns[questionIndex]);
    console.log(correctAns);
    console.log("incorrect answer selected. Timer " + timer);
  }
  questionIndex++;
  if (questionIndex < questions.length) {
    questionElement.textContent = questions[questionIndex];
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].querySelector("p").textContent = answers[questionIndex][i];
    }
  }
}
