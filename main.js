const audio = document.getElementById("horror");

function playAudio() {
  audio.play().then(() => {
    console.log("Audio jalan");
  }).catch((err) => {
    console.log("Error:", err);
  });
}

// pakai banyak trigger biar pasti kena
document.addEventListener("click", playAudio, { once: true });
document.addEventListener("touchstart", playAudio, { once: true });
document.addEventListener("scroll", playAudio, { once: true });
