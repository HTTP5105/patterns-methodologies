var addCharacterOnLoad = function() {

	// REFACTOR
	var newCharacter = {
    	name: "Chewbacca",
    	homeWorld: "Kashyyyk",
    	birthYear: -200,
    	info: "Chewbacca, known as Chewie, was a Wookiee warrior, smuggler, mechanic, pilot, and resistance fighter.",
    	canon: "canonYes",
    	newRow: function() {
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
    }
    // END REFACTOR
    
    document.getElementById('tableBody').innerHTML += newCharacter.newRow();
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

    // REFACTOR
    var newCharacter = {
    	name: elements.name.value,
    	homeWorld: elements.homeWorld.value,
    	birthYear: elements.birthYear.value,
    	info: elements.info.value,
    	canon: elements.canonQuestion.value,
    	newRow: function() {
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
    		var row = "<tr><td>" + this.name + "</td><td>" + this.homeWorld + "</td><td>" + this.birthYear + "</td><td>" + this.canon + "</td><td>" + this.info + "</td>";
    		return row;
    	}
    }
    // END REFACTOR

    document.getElementById('tableBody').innerHTML += newCharacter.newRow();
}

addCharacterOnLoad();

form.addEventListener("submit", function(event) {
    addNewCharacter(event);
});