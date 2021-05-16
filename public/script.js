// REFACTOR PART 1
var defaultCharacter = {
    name: "Chewbacca",
    homeWorld: "Kashyyyk",
    birthYear: -200,
    info: "Chewbacca, known as Chewie, was a Wookiee warrior, smuggler, mechanic, pilot, and resistance fighter.",
    canon: "canonYes",
    formatCharacteristics: function() {
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
};
// END REFACTOR PART 1

// Turns character properties into a formatted table row
var addCharacter = function(character) {
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

// Get the form
var form = document.getElementById("starWarsCharacter");
// Get the form inputs
var elements = form.elements;

// Add chewie on page load
addCharacter(defaultCharacter.formatCharacteristics());

// When the form is submitted, add the new character
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // REFACTOR PART 2
    var newCharacter = {
        // Get the values of the form inputs
        name: elements.name.value,
        homeWorld: elements.homeWorld.value,
        birthYear: elements.birthYear.value,
        info: elements.info.value,
        canon: elements.canonQuestion.value,
        formatCharacteristics: function() {
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
    };
    // END REFACTOR PART 2
    addCharacter(newCharacter.formatCharacteristics());
});

