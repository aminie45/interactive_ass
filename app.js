/*
	html element references
*/
const submitButton = document.getElementById("submit");
const MovieTitleInput = document.getElementById("Movie Title");
const carbrandInput = document.getElementById("car brand");
const planetInput = document.getElementById("planet");
const superheroInput = document.getElementById("superhero");

/*
	listen for button press
*/
submitButton.onclick = function() {
	/*
		get all of the words, generate our story
	*/
	const message = document.createElement("p");
	message.textContent = " It's a beautiful day in the land of "
                            + MovieTitleInput.value
							+ " so i put on my "
							+ carbrandInput.value
							+ " shoe to go for a walk on "
							+ planetInput.value
							+ " with my best friend "
                            + superheroInput.value
                            + "."
	document.body.appendChild(message);
};