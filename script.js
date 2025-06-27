// script.js

let audioPlayed = false;

function flipPage(element) {
  // Flip the clicked page
  element.classList.toggle('flipped');

  // Play music only once on first interaction
  if (!audioPlayed) {
    const audio = document.getElementById('bg-music');
    if (audio) {
      audio.play().then(() => {
        audioPlayed = true;
      }).catch((err) => {
        console.log('Autoplay blocked:', err);
      });
    }
  }
}
