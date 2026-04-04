// Scroll button
function scrollToWork() {
  document.getElementById("videos").scrollIntoView({
    behavior: "smooth"
  });
}

// Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Video popup
function openVideo(link) {
  document.getElementById("popupVideo").src = link + "?autoplay=1&mute=1";
  document.getElementById("popupVideo").src = link + "?autoplay=1&mute=1";
}

document.getElementById("closeBtn").onclick = () => {
  document.getElementById("popup").style.display = "none";
  document.getElementById("popupVideo").src = "";
};

// Image popup
function openImage(src) {
  document.getElementById("imagePopup").style.display = "flex";
  document.getElementById("popupImg").src = src;
}

document.getElementById("closeImage").onclick = () => {
  document.getElementById("imagePopup").style.display = "none";
};

// Scroll animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => observer.observe(card));

