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
