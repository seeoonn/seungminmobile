document.addEventListener("DOMContentLoaded", () => {
  const allImages = Array.from(document.querySelectorAll('.photo-grid .photo')).map(img => img.src);
  console.log("All images loaded:", allImages); // Check image paths
  
  let currentIndex = 0;
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');

  function openPopup(index) {
    console.log("Opening popup for index:", index); // Debug
    currentIndex = index;
    popup.classList.add('show'); // Show popup
    popupImg.src = allImages[currentIndex];
  }

  function closePopup() {
    popup.classList.remove('show'); // Hide popup
  }

  function prevImage() {
    currentIndex = (currentIndex === 0) ? allImages.length - 1 : currentIndex - 1;
    popupImg.src = allImages[currentIndex];
  }

  function nextImage() {
    currentIndex = (currentIndex === allImages.length - 1) ? 0 : currentIndex + 1;
    popupImg.src = allImages[currentIndex];
  }

  // Add event listeners to visible images
  document.querySelectorAll('.photo-grid .photo').forEach((img, index) => {
    img.addEventListener('click', () => {
      console.log("Image clicked:", index); // Verify click
      openPopup(index);
    });
  });

  // Close popup when clicking outside the image
  popup.addEventListener('click', (e) => {
    if (e.target === popup) closePopup();
  });

  // Swipe Gesture Support
  let startX = 0;
  let isSwiping = false;

  popup.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
  });

  popup.addEventListener("touchmove", (e) => {
    if (!isSwiping) return;

    const moveX = e.touches[0].clientX;
    const diff = startX - moveX;

    if (diff > 50) {
      nextImage();
      isSwiping = false;
    } else if (diff < -50) {
      prevImage();
      isSwiping = false;
    }
  });

  popup.addEventListener("touchend", () => {
    isSwiping = false;
  });
});