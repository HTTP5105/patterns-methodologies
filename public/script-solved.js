class Character {
  constructor(name, homeWorld, birthYear, info, canon) {
    this.name = name;
    this.homeWorld = homeWorld;
    this.birthYear = birthYear;
    this.info = info;
    this.canon = canon;
  }
}

Character.prototype.formatCharacteristics = function() {
    if (!this.birthYear) {
      this.birthYear = "Unknown";
    } else if (this.birthYear <= 0) {
      this.birthYear = Math.abs(this.birthYear) + " BBY";
    } else {
      this.birthYear = this.birthYear + " ABY";
    }

    if (!this.canon) {
      this.canon = "Unspecified";
    } else if (this.canon === "canonYes") {
      this.canon = "Canon";
    } else if (this.canon === "canonNo") {
      this.canon = "Disney says no";
    } else {
      console.error("Unknown value provided for canon question");
    }

    var formattedCharacter = {
      name: this.name,
      homeWorld: this.homeWorld,
      birthYear: this.birthYear,
      canon: this.canon,
      info: this.info
    };

    return formattedCharacter;
}

var defaultCharacter = new Character("Chewbacca", "Kashyyyk", -200, "Chewbacca, known as Chewie, was a Wookiee warrior, smuggler, mechanic, pilot, and resistance fighter.", "canonYes");

// Turns character properties into a formatted table row
var addCharacter = function (character) {
  var rowStart = "<tr>";
  var rowEnd = "</tr>";
  // Initialize an arry for the table cells
  var cells = [];
  // For each value in the character object,
  // create an HTML table cell and push it
  // into the `cells` array
  Object.values(character).forEach((aspect) => {
    cells.push("<td>" + aspect + "</td>");
  });
  // Insert the row into the table body
  document.getElementById("tableBody").innerHTML +=
    rowStart + cells.join("") + rowEnd;
};

// Add chewie on page load
addCharacter(defaultCharacter.formatCharacteristics());

// Get the form
var form = document.getElementById("starWarsCharacter");
// Get the form inputs
var elements = form.elements;

// When the form is submitted, add the new character
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var newCharacter = new Character(elements.name.value,elements.homeWorld.value,elements.birthYear.value,elements.info.value,elements.canonQuestion.value);
  addCharacter(newCharacter.formatCharacteristics());
});