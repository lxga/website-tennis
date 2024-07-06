/* // DarkMode switch
const sw = document.getElementById("theme-tog gle");
sw.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
}); */

const video = document.getElementById("myVideo");

// Get the button
const btn = document.getElementById("myBtn");

console.log(video.paused);
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
/* blur when hover the login */
const loginBtn = document.querySelector(".loginBtn");
const page = document.querySelector(".all-page-effect");

loginBtn.addEventListener("mouseover", () => {
  page.style.filter = "blur(8px)";
});

loginBtn.addEventListener("mouseout", () => {
  page.style.filter = "blur(0px)";
});
