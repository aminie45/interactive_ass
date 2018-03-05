//arrays and random buttons
const rMovieTitle = [
	"\"Star Wars\"",
	"\"Wizard of Oz\"",
	"\"The Matrix\"",
	"\"The Lord of the Rings\"",
	"\"The Shining\"",
	"\"The Lion King\"",
	"\"Avatar\""
];
const randomButtonMovie = document.getElementById("randomMovieT");
randomButtonMovie.onclick = function() {
const randMovieTitle = rMovieTitle[Math.floor(Math.random() * rMovieTitle.length)];
		MovieTitleInput.value = randMovieTitle;
}
const rCarBrand = [
	"Toyota",
	"Mazda",
	"BMW",
	"Infiniti",
	"Lexus",
	"Bentley",
	"Acura"
];
const randomButtonCar = document.getElementById("randomCar");
randomButtonCar.onclick = function() {
const randCar = rCarBrand[Math.floor(Math.random() * rCarBrand.length)];
		carbrandInput.value = randCar;
}
const rPlanet = [
	"Mercury",
	"Venus",
	"Mars",
	"Jupiter",
	"Saturn",
	"Uranus",
	"Neptune"
];
const randomButtonPlanet = document.getElementById("randomPlanet");
randomButtonPlanet.onclick = function() {
const randPlanet = rPlanet[Math.floor(Math.random() * rPlanet.length)];
		planetInput.value = randPlanet;
}
const rHero = [
	"Captain America",
	"Batman",
	"Superman",
	"Spider-man",
	"Catwoman",
	"Hulk",
	"Supergirl"
];
const randomButtonHero = document.getElementById("randomHero");
randomButtonHero.onclick = function() {
const randHero = rHero[Math.floor(Math.random() * rHero.length)];
		superheroInput.value = randHero;
}
const rBulding= [
	"Flatiron Bulding",
	"Colosseum",
	"Eiffel Tower",
	"Empire State Building",
	"White House",
	"The Louvre",
	"Trump Tower"
];
const randomButtonBulding = document.getElementById("randomBulding");
randomButtonBulding.onclick = function() {
const randBulding = rBulding[Math.floor(Math.random() * rBulding.length)];
		buildingInput.value = randBulding;
}
const rSound= [
	"knocking",
	"barking",
	"claping",
	"crying",
	"rustle",
	"laugh",
	"scream"
];
const randomButtonSound = document.getElementById("randomSound");
randomButtonSound.onclick = function() {
const randSound = rSound[Math.floor(Math.random() * rSound.length)];
		soundInput.value = randSound;
}
const rNoun= [
	"fire-place",
	"window",
	"door",
	"roof",
    "tunnel",
    "book",
    "box",
    "bus",
    "closet"
];
const randomButtonNoun = document.getElementById("randomNoun");
randomButtonNoun.onclick = function() {
const randNoun = rNoun[Math.floor(Math.random() * rNoun.length)];
		nounInput.value = randNoun;
}
const rAdj= [
	"spooky",
	"long",
	"narrow",
	"quiet",
	"silent",
	"endless",
	"dusty"
];
const randomButtonAdj = document.getElementById("randomAdj");
randomButtonAdj.onclick = function() {
const randAdj = rAdj[Math.floor(Math.random() * rAdj.length)];
		adjInput.value = randAdj;
}
const rV= [
	"walking",
	"talking",
	"working",
	"laughing",
	"jumping"
];
const randomButtonV = document.getElementById("randomVerb");
randomButtonV.onclick = function() {
const randV = rV[Math.floor(Math.random() * rV.length)];
		verbInput.value = randV;
}
const rAn= [
	"cat",
	"panda",
	"alligator",
	"antelope",
	"fox",
    "bear",
    "chicken"
];
const randomButtonAn = document.getElementById("randomAn");
randomButtonAn.onclick = function() {
const randAn = rAn[Math.floor(Math.random() * rAn.length)];
		animalInput.value = randAn;
}
/*
	html element references
*/
const submitButton = document.getElementById("submit");
const MovieTitleInput = document.getElementById("Movie_title");
const carbrandInput = document.getElementById("car_brand");
const planetInput = document.getElementById("planet");
const superheroInput = document.getElementById("superhero");
const buildingInput = document.getElementById("building");
const soundInput = document.getElementById("sound");
const nounInput = document.getElementById("noun");
const adjInput = document.getElementById("adj");
const verbInput = document.getElementById("verb");
const animalInput = document.getElementById("animal");


/*
	listen for button press
*/
submitButton.onclick = function() {
	/*
		get all of the words, generate our story
	*/
	const message = document.createElement("p");
	message.textContent = " It was a beautiful day in the land of "
                            + MovieTitleInput.value
							+ " so I put on my "
							+ carbrandInput.value
							+ " shoe to go for a walk on "
							+ planetInput.value
							+ " with my best friend "
                            + superheroInput.value
                            + ". As we were walking, we passed a huge "    
                            + buildingInput.value
                            + " where we heard weird " 
                            + soundInput.value
                            + " from inside. " 
                            + superheroInput.value
                            + " and I desided to go investigate. To get in the building we climbed through an open " 
                            + nounInput.value
                            + ". Inside, the hallway was dark and " 
                            + adjInput.value
                            + ". We heard " 
                            + verbInput.value
                            + " coming from upstairs. So, we climbed the stairs. Suddenly, a gust of wind opened a door in front of us and revealed a "
                            + animalInput.value
                            + " who was wearing the exact same  " 
                            + carbrandInput.value
							+ " shoe I was. Suddenly, I woke up. What a weird dream!"
    
    
	document.body.appendChild(message);
};