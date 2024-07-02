const sw = document.getElementById("theme-tog gle");
sw.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
//document.documentElement.classList.remove('dark');

const video = document.getElementById("myVideo");

// Get the button
const btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
