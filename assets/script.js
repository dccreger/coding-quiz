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
  ["Earth", "Venus", "Mars", "Jupiter"],
  ["One", "Two", "Three", "Four"],
  ["Mercury", "Venus", "Uranus", "Neptune"],
  ["Nine", "Eight", "Ten", "Four"],
  ["Sol", "Beteleguese", "Alpha Centauri", "Sun"],
  ["Astroid Belt", "Gas Giants", "Kuiper Belt", "The Cloud"],
  ["A Dwarf Planet", "A Planet", "An Asteroid", "A Disney Character"],
];
var questionElement = document.querySelector(".questions");
var questionIndex = 0;
var answerIndex = 0;
var button = document.querySelector(".button");
var buttons = document.querySelectorAll(".button");

for (var i = 1; i < buttons.length; i++) {
  buttons[i].style.display = "none";
}

buttons[0].addEventListener("click", function () {
  buttons[0].style.display = "none";

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "block";
  }
  questionElement.textContent = questions[questionIndex];

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].querySelector("p").textContent = answers[questionIndex][i];
  }
  questionIndex++;
});
