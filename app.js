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