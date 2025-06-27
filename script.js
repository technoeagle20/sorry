// script.js

let musicStarted = false;

function flipPage(element) {
  // Flip the current page
  element.classList.toggle('flipped');

  // Play background music only once after first click
  if (!musicStarted) {
    const audio = document.getElementById("bg-music");
    if (audio) {
      audio.play()
        .then(() => {
          musicStarted = true;
          console.log("Music started");
        })
        .catch(err => {
          console.warn("Autoplay blocked:", err.message);
        });
    }
  }
}
