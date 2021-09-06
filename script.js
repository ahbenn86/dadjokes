const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke(); //We're creating, naming and calling the function to get the joke here.

async function generateJoke() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};

	const res = await fetch("https://icanhazdadjoke.com", config);

	const data = await res.json();

	jokeEl.innerHTML = data.joke;
}
