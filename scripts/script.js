// Toggle social tooltip

let shareIcons = document.querySelectorAll(".share-icon-container");
let shareIcon = shareIcons[0];
let tooltip = document.getElementById("tooltip");

function toggleTooltip() {
  tooltip.classList.toggle("hidden");
  shareIcon.classList.toggle("active");
}

for (let icon of shareIcons) {
  icon.addEventListener("click", toggleTooltip);
}

// Link sharing implementation

const link = encodeURI(window.location.href);
const msg = encodeURIComponent("Hey! I found this drawer so interesting");
const title = encodeURIComponent(document.querySelector("h1").textContent);

const socials = document.querySelector(".social-links").children;
const facebook = socials[1];
const twitter = socials[2];
const pinterest = socials[3];

facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${link}`;
twitter.href = `https://twitter.com/intent/tweet?text=${msg}&url=${link}`;
pinterest.href = `https://pinterest.com/pin/create/button/?url=${link}&media=${encodeURIComponent(
  "https://m.media-amazon.com/images/I/71+P1yDyRBL._AC_SX679_.jpg"
)}&description=${title}`;
