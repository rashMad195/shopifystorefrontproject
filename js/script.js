// Change image when thumbnail is clicked
function changeImage(imageSrc) {
  document.getElementById("main-image").src = imageSrc;
}

// Toggle Size Chart Modal
function toggleSizeChart() {
  document.getElementById("size-chart-modal").classList.toggle("active");
}

// Close Size Chart Modal
function closeModal() {
  document.getElementById("size-chart-modal").classList.remove("active");
}

// Change color swatch
function changeColor(color) {
  document.body.style.backgroundColor = color; // Just an example
}

// Change size (can be used to update product label or state)
function changeSize(size) {
  console.log(`Size selected: ${size}`);
}

// Toggle Compare Colors Modal
function toggleCompareColors() {
  document.getElementById("compare-colours-modal").classList.toggle("active");
}

// Close Compare Colors Modal
function closeCompareColors() {
  document.getElementById("compare-colours-modal").classList.remove("active");
}

// Toggle Tabs for Product Information
function toggleTab(tabId) {
  const panels = document.querySelectorAll(".tab-panel");
  panels.forEach(panel => panel.style.display = 'none');

  const activeTab = document.getElementById(tabId);
  activeTab.style.display = 'block';
}
