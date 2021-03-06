// var elements = $import("./elements.js");

$(document).ready(function(){
//Index of atomic number = atomic number - 1
// elements[99].atomicNumber = 100
var elements = 
	[	
		{
			mass: 1.0079,
			elementName: "Hydrogen",
			elementAcronym: "H",
			atomicNumber: 1
		},
		{
			mass: 4.0026,
			elementName: "Helium",
			elementAcronym: "He",
			atomicNumber: 2
		},
		{
			mass: 6.941,
			elementName: "Lithium",
			elementAcronym: "Li",
			atomicNumber: 3
		},
		{
			mass: 9.0122,
			elementName: "Beryllium",
			elementAcronym: "Be",
			atomicNumber: 4
		},
		{
			mass: 10.811,
			elementName: "Boron",
			elementAcronym: "B",
			atomicNumber: 5
		},
		{
			mass: 12.0107,
			elementName: "Carbon",
			elementAcronym: "C",
			atomicNumber: 6
		},
		{
			mass: 14.0067,
			elementName: "Nitrogen",
			elementAcronym: "N",
			atomicNumber: 7
		},
		{
			mass: 15.9994,
			elementName: "Oxygen",
			elementAcronym: "O",
			atomicNumber: 8
		},
		{
			mass: 18.9984,
			elementName: "Fluorine",
			elementAcronym: "F",
			atomicNumber: 9
		},
		{
			mass: 20.1797,
			elementName: "Neon",
			elementAcronym: "Ne",
			atomicNumber: 10
		},
		{
			mass: 22.9897,
			elementName: "Sodium",
			elementAcronym: "Na",
			atomicNumber: 11
		},
		{
			mass: 24.305,
			elementName: "Magnesium",
			elementAcronym: "Mg",
			atomicNumber: 12
		},
		{
			mass: 26.9815,
			elementName: "Aluminum",
			elementAcronym: "Al",
			atomicNumber: 13
		},
		{
			mass: 28.0855,
			elementName: "Silicon",
			elementAcronym: "Si",
			atomicNumber: 14
		},
		{
			mass: 30.9738,
			elementName: "Phosphorus",
			elementAcronym: "P",
			atomicNumber: 15
		},
		{
			mass: 32.065,
			elementName: "Sulfur",
			elementAcronym: "S",
			atomicNumber: 16
		},
		{
			mass: 35.453,
			elementName: "Chlorine",
			elementAcronym: "Cl",
			atomicNumber: 17
		},
		{
			mass: 39.948,
			elementName: "Argon",
			elementAcronym: "Ar",
			atomicNumber: 18
		},
		{
			mass: 39.0983,
			elementName: "Potassium",
			elementAcronym: "K",
			atomicNumber: 19
		},
		{
			mass: 40.078,
			elementName: "Calcium",
			elementAcronym: "Ca",
			atomicNumber: 20
		},
		{
			mass: 44.9559,
			elementName: "Scandium",
			elementAcronym: "Sc",
			atomicNumber: 21
		},
		{
			mass: 47.867,
			elementName: "Titanium",
			elementAcronym: "Ti",
			atomicNumber: 22
		},
		{
			mass: 50.9415,
			elementName: "Vanadium",
			elementAcronym: "V",
			atomicNumber: 23
		},
		{
			mass: 51.9961,
			elementName: "Chromium",
			elementAcronym: "Cr",
			atomicNumber: 24
		},
		{
			mass: 54.938,
			elementName: "Manganese",
			elementAcronym: "Mn",
			atomicNumber: 25
		},
		{
			mass: 55.845,
			elementName: "Iron",
			elementAcronym: "Fe",
			atomicNumber: 26
		},
		{
			mass: 58.9332,
			elementName: "Cobalt",
			elementAcronym: "Co",
			atomicNumber: 27
		},	
		{
			mass: 58.6934,
			elementName: "Nickel",
			elementAcronym: "Ni",
			atomicNumber: 28
		},
		{
			mass: 63.546,
			elementName: "Copper",
			elementAcronym: "Cu",
			atomicNumber: 29
		},
		{
			mass: 65.39,
			elementName: "Zinc",
			elementAcronym: "Zn",
			atomicNumber: 30
		},
		{
			mass: 69.723,
			elementName: "Gallium",
			elementAcronym: "Ga",
			atomicNumber: 31
		},
		{
			mass: 72.64,
			elementName: "Germanium",
			elementAcronym: "Ge",
			atomicNumber: 32
		},
		{
			mass: 74.9216,
			elementName: "Arsenic",
			elementAcronym: "As",
			atomicNumber: 33
		},
		{
			mass: 78.96,
			elementName: "Selenium",
			elementAcronym: "Se",
			atomicNumber: 34
		},
		{
			mass: 79.904,
			elementName: "Bromine",
			elementAcronym: "Br",
			atomicNumber: 35
		},
		{
			mass: 83.8,
			elementName: "Krypton",
			elementAcronym: "Kr",
			atomicNumber: 36
		},
		{
			mass: 85.4678,
			elementName: "Rubidium",
			elementAcronym: "Rb",
			atomicNumber: 37
		},
		{
			mass: 87.62,
			elementName: "Strontium",
			elementAcronym: "Sr",
			atomicNumber: 38
		},
		{
			mass: 88.9059,
			elementName: "Yttrium",
			elementAcronym: "Y",
			atomicNumber: 39
		},
		{
			mass: 91.224,
			elementName: "Zirconium",
			elementAcronym: "Zr",
			atomicNumber: 40
		},
		{
			mass: 92.9064,
			elementName: "Niobium",
			elementAcronym: "Nb",
			atomicNumber: 41
		},
		{
			mass: 95.94,
			elementName: "Molybdenum",
			elementAcronym: "Mo",
			atomicNumber: 42
		},
		{
			mass: 98,
			elementName: "Technetium",
			elementAcronym: "Tc",
			atomicNumber: 43
		},
		{
			mass: 101.07,
			elementName: "Ruthenium",
			elementAcronym: "Ru",
			atomicNumber: 44
		},
		{
			mass: 102.9055,
			elementName: "Rhodium",
			elementAcronym: "Rh",
			atomicNumber: 45
		},
		{
			mass: 106.42,
			elementName: "Palladium",
			elementAcronym: "Pd",
			atomicNumber: 46
		},
		{
			mass: 107.8682,
			elementName: "Silver",
			elementAcronym: "Ag",
			atomicNumber: 47
		},
		{
			mass: 112.411,
			elementName: "Cadmium",
			elementAcronym: "Cd",
			atomicNumber: 48
		},
		{
			mass: 114.818,
			elementName: "Indium",
			elementAcronym: "In",
			atomicNumber: 49
		},
		{
			mass: 118.71,
			elementName: "Tin",
			elementAcronym: "Sn",
			atomicNumber: 50
		},
		{
			mass: 121.76,
			elementName: "Antimony",
			elementAcronym: "Sb",
			atomicNumber: 51
		},
		{
			mass: 127.6,
			elementName: "Tellurium",
			elementAcronym: "Te",
			atomicNumber: 52
		},
		{
			mass: 126.9045,
			elementName: "Iodine",
			elementAcronym: "I",
			atomicNumber: 53
		},
		{
			mass: 131.293,
			elementName: "Xenon",
			elementAcronym: "Xe",
			atomicNumber: 54
		},
		{
			mass: 132.9055,
			elementName: "Cesium",
			elementAcronym: "Cs",
			atomicNumber: 55
		},
		{
			mass: 137.327,
			elementName: "Barium",
			elementAcronym: "Ba",
			atomicNumber: 56
		},
		{
			mass: 138.9055,
			elementName: "Lanthanum",
			elementAcronym: "La",
			atomicNumber: 57
		},
		{
			mass: 140.116,
			elementName: "Cerium",
			elementAcronym: "Ce",
			atomicNumber: 58
		},
		{
			mass: 140.9077,
			elementName: "Praseodymium",
			elementAcronym: "Pr",
			atomicNumber: 59
		},
		{
			mass: 144.24,
			elementName: "Neodymium",
			elementAcronym: "Nd",
			atomicNumber: 60
		},
		{
			mass: 145,
			elementName: "Promethium",
			elementAcronym: "Pm",
			atomicNumber: 61
		},
		{
			mass: 150.36,
			elementName: "Samarium",
			elementAcronym: "Sm",
			atomicNumber: 62
		},
		{
			mass: 151.964,
			elementName: "Europium",
			elementAcronym: "Eu",
			atomicNumber: 63
		},
		{
			mass: 157.25,
			elementName: "Gadolinium",
			elementAcronym: "Gd",
			atomicNumber: 64
		},
		{
			mass: 158.9253,
			elementName: "Terbium",
			elementAcronym: "Tb",
			atomicNumber: 65
		},
		{
			mass: 162.5,
			elementName: "Dysprosium",
			elementAcronym: "Dy",
			atomicNumber: 66
		},
		{
			mass: 164.9303,
			elementName: "Holmium",
			elementAcronym: "Ho",
			atomicNumber: 67
		},
		{
			mass: 167.259,
			elementName: "Erbium",
			elementAcronym: "Er",
			atomicNumber: 68
		},
		{
			mass: 168.9342,
			elementName: "Thulium",
			elementAcronym: "Tm",
			atomicNumber: 69
		},
		{
			mass: 173.04,
			elementName: "Ytterbium",
			elementAcronym: "Yb",
			atomicNumber: 70
		},
		{
			mass: 174.967,
			elementName: "Lutetium",
			elementAcronym: "Lu",
			atomicNumber: 71
		},
		{
			mass: 178.49,
			elementName: "Hafnium",
			elementAcronym: "Hf",
			atomicNumber: 72
		},
		{
			mass: 180.9479,
			elementName: "Tantalum",
			elementAcronym: "Ta",
			atomicNumber: 73
		},
		{
			mass: "183.84",
			elementName: "Tungsten",
			elementAcronym: "W",
			atomicNumber: 74
		},
		{
			mass: 186.207,
			elementName: "Rhenium",
			elementAcronym: "Re",
			atomicNumber: 75
		},
		{
			mass: 190.23,
			elementName: "Osmium",
			elementAcronym: "Os",
			atomicNumber: 76
		},
		{
			mass: 192.217,
			elementName: "Iridium",
			elementAcronym: "Ir",
			atomicNumber: 77
		},
		{
			mass: 195.078,
			elementName: "Platinum",
			elementAcronym: "Pt",
			atomicNumber: 78
		},
		{
			mass: 196.9665,
			elementName: "Gold",
			elementAcronym: "Au",
			atomicNumber: 79
		},
		{
			mass: 200.59,
			elementName: "Mercury",
			elementAcronym: "Hg",
			atomicNumber: 80
		},
		{
			mass: 204.3833,
			elementName: "Thallium",
			elementAcronym: "Tl",
			atomicNumber: 81
		},
		{
			mass: 207.2,
			elementName: "Lead",
			elementAcronym: "Pb",
			atomicNumber: 82
		},
		{
			mass: 208.9804,
			elementName: "Bismuth",
			elementAcronym: "Bi",
			atomicNumber: 83
		},
		{
			mass: 209,
			elementName: "Polonium",
			elementAcronym: "Po",
			atomicNumber: 84
		},
		{
			mass: 210,
			elementName: "Astatine",
			elementAcronym: "At",
			atomicNumber: 85
		},
		{
			mass: 222,
			elementName: "Radon",
			elementAcronym: "Rn",
			atomicNumber: 86
		},
		{
			mass: 223,
			elementName: "Francium",
			elementAcronym: "Fr",
			atomicNumber: 87
		},
		{
			mass: 226,
			elementName: "Radium",
			elementAcronym: "Ra",
			atomicNumber: 88
		},
		{
			mass: 227,
			elementName: "Actinium",
			elementAcronym: "Ac",
			atomicNumber: 89
		},
		{
			mass: 232.0381,
			elementName: "Thorium",
			elementAcronym: "Th",
			atomicNumber: 90
		},
		{
			mass: 231.0359,
			elementName: "Protactinium",
			elementAcronym: "Pa",
			atomicNumber: 91
		},
		{
			mass: 238.0289,
			elementName: "Uranium",
			elementAcronym: "U",
			atomicNumber: 92
		},
		{
			mass: 237,
			elementName: "Neptunium",
			elementAcronym: "Np",
			atomicNumber: 93
		},
		{
			mass: 244,
			elementName: "Plutonium",
			elementAcronym: "Pu",
			atomicNumber: 94
		},
		{
			mass: 243,
			elementName: "Americium",
			elementAcronym: "Am",
			atomicNumber: 95
		},
		{
			mass: 247,
			elementName: "Curium",
			elementAcronym: "Cm",
			atomicNumber: 96
		},
		{
			mass: 247,
			elementName: "Berkelium",
			elementAcronym: "Bk",
			atomicNumber: 97
		},
		{
			mass: 251,
			elementName: "Californium",
			elementAcronym: "Cf",
			atomicNumber: 98
		},
		{
			mass: 252,
			elementName: "Einsteinium",
			elementAcronym: "Es",
			atomicNumber: 99
		},
		{
			mass: 257,
			elementName: "Fermium",
			elementAcronym: "Fm",
			atomicNumber: 100
		}
	];



$(document.body).on('click', '.clickableElement', function(){
	//atomData is the atomic number.
	var atomData = $(this).data("atom");
	var currentElement = elements[atomData-1];

	calculationPanel.selectedAtoms.push(currentElement);
	calculationPanel.atomMultiplier.push(1);

	calculationPanel.adjustAtom();

})

$(document.body).on('click', '.plusButton', function(){
	var atomPos = $(this).data("position");
	var atomData = $(this).data("atom");
	var currentElement = elements[atomData-1];

	calculationPanel.atomMultiplier[atomPos]++;

	var atomP = $("#data-position-p-" + atomPos);
	atomP.html(currentElement.elementAcronym + "<sub>" + calculationPanel.atomMultiplier[atomPos] + "</sub>");

	calculationPanel.calculate();

})
$(document.body).on('click', '.minusButton', function(){

	var atomPos = $(this).data("position");
	var atomData = $(this).data("atom");
	var currentElement = elements[atomData-1];

	calculationPanel.atomMultiplier[atomPos]--;

	var atomP = $("#data-position-p-" + atomPos);
	atomP.html(currentElement.elementAcronym + "<sub>" + calculationPanel.atomMultiplier[atomPos] + "</sub>");

	calculationPanel.calculate();

	var atomDiv = $("#data-position-d-" + atomPos);

	if(calculationPanel.atomMultiplier[atomPos] == 0){
		atomDiv.remove();
		calculationPanel.selectedAtoms.splice(atomPos, 1);
		calculationPanel.atomMultiplier.splice(atomPos, 1);

		calculationPanel.adjustAtom();
		console.log(calculationPanel.selectedAtoms);
	}

})

document.onkeyup = function(keyPress) {
	//keyCode 8 for backspace
	if (keyPress.keyCode == 8){
		elementsPanel.backSpace();
	}
	else if (keyPress.keyCode >= 65 && keyPress.keyCode <= 90){
		var inputLetter = String.fromCharCode(keyPress.keyCode).toLowerCase();
		elementsPanel.lettersPressed.push(inputLetter);

		console.log("User pressed: " + inputLetter);
		console.log(elementsPanel.lettersPressed);

		$("#current-letters").text(elementsPanel.lettersPressed.join(" "));

		elementsPanel.findElement();
	}
}

var calculationPanel = {
	selectedAtoms:[],
	atomMultiplier:[],
	total:0,

	adjustAtom: function(){
		$("#elements-chosen").empty();
		for(var i=0; i<this.selectedAtoms.length; i++){

			var currentAtom = calculationPanel.selectedAtoms[i];

			var atomDiv = $("<div>");
			atomDiv.attr("data-atom", currentAtom.atomicNumber);	
			atomDiv.addClass("calculatableElement");
			atomDiv.attr("id", "data-position-d-" + i);

			var plusButton = $("<button>");
			plusButton.html("+");
			plusButton.addClass("plusButton btn btn-xs");
			plusButton.attr("data-atom", currentAtom.atomicNumber);
			plusButton.attr("data-position", i);

			var atomP = $("<p>");
			atomP.text(currentAtom.elementAcronym);
			atomP.addClass("calculatableAcronym");
			atomP.attr("id", "data-position-p-" + i);

			var minusButton = $("<button>");
			minusButton.html("-");
			minusButton.addClass("minusButton btn btn-xs");
			minusButton.attr("data-atom", currentAtom.atomicNumber);
			minusButton.attr("data-position", i);

			atomDiv.append(plusButton);
			atomDiv.append(atomP);
			atomDiv.append(minusButton);

			$("#elements-chosen").append(atomDiv);

			var atomP = $("#data-position-p-" + i);
			atomP.html(currentAtom.elementAcronym + "<sub>" + calculationPanel.atomMultiplier[i] + "</sub>");
			
			this.calculate();	
		}
	},
	calculate: function(){
		this.total = 0;

		for (var i=0; i<this.selectedAtoms.length; i++){
			this.total += (this.selectedAtoms[i].mass)*(this.atomMultiplier[i]);
		}

		$("#molecular-weight").text(this.total.toFixed(2) + " grams per mole");
	},

}


var elementsPanel = {

	lettersPressed: [],
	listElements: [],
	listElements2: [],
	listElements3: [],

	findElement: function(){
		if (this.lettersPressed.length == 1){
			this.listElements = [];
			for (i=0; i<elements.length;i++){
				if (this.lettersPressed[0] == elements[i].elementName.charAt(0).toLowerCase() || this.lettersPressed[0] == elements[i].elementAcronym.charAt(0).toLowerCase()){
					this.listElements.push(elements[i]);
				}
			}
			console.log(this.listElements);
			this.displayElements(this.listElements);
		}
		else if (this.lettersPressed.length == 2){
			this.listElements2 = [];
			for (i=0;i<this.listElements.length;i++){
				if (this.lettersPressed[1] == this.listElements[i].elementName.charAt(1) || this.lettersPressed[1] == this.listElements[i].elementAcronym.charAt(1)){
					this.listElements2.push(this.listElements[i]);
				}
			}
			console.log(this.listElements2);
			this.displayElements(this.listElements2);
		}
		else if (this.lettersPressed.length == 3){
			this.listElements3 = [];
			for (i=0;i<this.listElements2.length;i++){
				if (this.lettersPressed[2] == this.listElements2[i].elementName.charAt(2)){
					this.listElements3.push(this.listElements2[i]);
				}
			}
			console.log(this.listElements3);
			this.displayElements(this.listElements3);
		}
	},
	backSpace: function(){
		$("#elements-found").empty();

		if (this.lettersPressed.length > 0){
			this.lettersPressed.pop();

			console.log("After deleting: " + this.lettersPressed);
			console.log(this.lettersPressed);

			$("#current-letters").text(this.lettersPressed.join(" "));

			this.findElement();
		}
		if (this.lettersPressed.length == 0){
			$("#current-letters").text("Search");
		}
	},
	displayElements: function(elementsArray){
		$("#elements-found").empty();

		for(var i=0; i<elementsArray.length; i++){

			var elementP = 
			$(
				"<p id='atomic-number-p'>" + elementsArray[i].atomicNumber + "</p>" +
				"<h2 id='acronym-h2'>" + elementsArray[i].elementAcronym + "</h2>" +
				"<p id='name-p'>" + elementsArray[i].elementName + "</p>" +
				"<p id='mass-p'>" + elementsArray[i].mass + "</p>"
			);


			var elementDiv = $("<div>");
			elementDiv.addClass("col-sm-4 clickableElement box");
			elementDiv.attr("data-atom", elementsArray[i].atomicNumber);
			elementDiv.append(elementP);


			$("#elements-found").append(elementDiv);
		}
	},
}








})






