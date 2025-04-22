// script.js

function scrollCarousel(direction) {
  const track = document.getElementById("carouselTrack");
  const scrollAmount = 180; // one image width + gap
  track.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".glitch-text");
  header.addEventListener("mouseenter", () => {
    header.style.color = "#ff00ff";
  });
  header.addEventListener("mouseleave", () => {
    header.style.color = "#00ffe5";
  });
  const mintButton = document.getElementById('mintBtn');

  mintButton.addEventListener('click', () => {
    // Placeholder for minting action
    alert('Minting process started... (Connect your wallet to proceed!)');

    // Add actual minting code using Web3.js or ethers.js here for wallet interaction
  });
   
});
  
