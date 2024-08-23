let shareIcons = document.querySelectorAll(".share-icon-container");
let tooltip = document.getElementById("tooltip");

function toggleTooltip() {
  tooltip.classList.toggle("hidden");
}

for (let icon of shareIcons) {
  icon.addEventListener("click", toggleTooltip);
}
