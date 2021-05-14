class Character {
  constructor(name, homeWorld, birthYear, info, canon) {
    this.name = name;
    this.homeWorld = homeWorld;
    this.birthYear = birthYear;
    this.info = info;
    this.canon = canon;
  }
}

Character.prototype.newRow = function() {
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
        this.canon = "Canon"
    } else if (this.canon === "canonNo") {
        this.canon = "Disney says no"
    } else {
        console.error("Unknown value provided for canon question");
    }
    var row = "<tr><td>" + this.name + "</td><td>" + this.homeWorld + "</td><td>" + this.birthYear + "</td><td>" + this.canon + "</td><td>" + this.info + "</td></tr>";
    return row;
}

var addCharacterOnLoad = function() {
    var chewie = new Character("Chewbacca", "Kashyyyk", -200, "Chewbacca, known as Chewie, was a Wookiee warrior, smuggler, mechanic, pilot, and resistance fighter.", "canonYes");
    
    document.getElementById('tableBody').innerHTML += chewie.newRow();
}

var form = document.getElementById('starWarsCharacter');
var elements = form.elements;

var addNewCharacter = function(e) {
	/* 
		We don't actually want to submit the form, 
		so we prevent the default action for the 
		event.
	*/
    e.preventDefault();

    var newCharacter = new Character(elements.name.value,elements.homeWorld.value,elements.birthYear.value,elements.info.value,elements.canonQuestion.value);

    document.getElementById('tableBody').innerHTML += newCharacter.newRow();
}

addCharacterOnLoad();

form.addEventListener("submit", function(event) {
    addNewCharacter(event);
});

// export { name, draw, reportArea, reportPerimeter };