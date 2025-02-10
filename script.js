const audio = new Audio("song.mp3"); // Pfad zur MP3-Datei
const button = document.getElementById("btn");

button.addEventListener("click", function () {
	console.log("Button clicked");
	audio.play().catch((error) => {
		console.log("Audio playback failed:", error);
	});
});
