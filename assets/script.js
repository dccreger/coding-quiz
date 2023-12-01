var button = $(".button");
var text = $(".questions");
var questions = [
  "What planet do we live on?",
  "How many moons does Mars have?",
  "What planet is considered Earth's Sister?",
  "How many planets are in the solar system?",
  "What is the name of the sun?",
  "What is beyond Pluto?",
  "What is Pluto considered?",
];
var answers1 = ["Earth", "Mars", "Arrakis", "Endor"];
var answers2 = ["One", "Two", "Three", "Four"];
var answers3 = ["Jupiter", "Saturn", "Venus", "California"];
var answers4 = ["Four", "Five", "Nine", "Eight"];
var answers5 = ["Sol", "Alpha Centauri", "Sun", "Betelgeuse"];
var currentQuestionIndex = 0;
var buttonContainer = $(".buttonContainer");
//Begin Game and add buttons
function duplicatebuttons() {
  buttonContainer.empty();
  var originalButton = button.first();

  for (var i = 0; i < 4; i++) {
    var clonedButton = originalButton.clone();
    clonedButton.text(answers1[i]);
    buttonContainer.append(clonedButton);
  }
}

button.on("click", function () {
  //   if (currentQuestionIndex < questions.length) {
  text.text(questions[currentQuestionIndex]);
  currentQuestionIndex++;
  duplicatebuttons();
  //   }
});

console.log("Children of the button container", buttonContainer.children());
