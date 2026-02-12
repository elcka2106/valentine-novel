document.addEventListener("DOMContentLoaded", function () {

  const phoneNumber = "6285692777133"; // GANTI NOMOR TUJUAN

  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("mainContent");
  const startBtn = document.getElementById("startBtn");
  const giftButtons = document.querySelectorAll(".gift-btn");
  const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicControl");
let isPlaying = false;

  // Start button
  startBtn.addEventListener("click", function () {
    intro.classList.add("hide");

    setTimeout(() => {
      intro.style.display = "none";
      mainContent.classList.remove("hidden");
    }, 800);
  });

  // Gift buttons
  giftButtons.forEach(button => {
    button.addEventListener("click", function () {

      const giftName = this.getAttribute("data-gift");

      const message = `Hai ❤️

Di hari Valentine ini aku memilihkan kamu hadiah spesial berupa ${giftName} 💕

Semoga ini bisa membuat harimu lebih manis dan penuh cinta.

Happy Valentine 💖`;

      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Gunakan location.href supaya tidak diblokir popup
      window.location.href = url;
    });
  });

  // Floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 800);

});

// Autoplay setelah klik start
startBtn.addEventListener("click", function () {
  intro.classList.add("hide");

  setTimeout(() => {
    intro.style.display = "none";
    mainContent.classList.remove("hidden");
  }, 800);

  music.play();
  isPlaying = true;
  musicBtn.innerHTML = "🔊";
});

// Manual control
musicBtn.addEventListener("click", function () {
  if (isPlaying) {
    music.pause();
    musicBtn.innerHTML = "🔈";
  } else {
    music.play();
    musicBtn.innerHTML = "🔊";
  }
  isPlaying = !isPlaying;
});