let cart = [];

function showSection(sectionId) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

function addToCart(productName) {
  cart.push(productName);
  document.getElementById("cart-count").textContent = `🛒 ${cart.length}`;
  alert(`${productName} added to cart!`);
}
// Slideshow banners
const banner = document.getElementById("banner");
const bannerImages = [
  "images/b4.jpg",
  "images/b7.webp",
  "images/b5.jpg"
];

let currentBanner = 0;
setInterval(() => {
  currentBanner = (currentBanner + 1) % bannerImages.length;
  banner.style.backgroundImage = `url('${bannerImages[currentBanner]}')`;
}, 5000); // Change every 5 seconds
