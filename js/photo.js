// Dynamically gather all image paths from the galleryconst allImages = Array.from(document.querySelectorAll('.photo-grid .photo')).map(img => img.src);
let currentIndex = 0;

const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');

function openPopup(index) {
  currentIndex = index;
  popup.style.display = 'flex';
  popupImg.src = allImages[currentIndex];
}

function closePopup() {
  popup.style.display = 'none';
}

function prevImage() {
  currentIndex = (currentIndex === 0) ? allImages.length - 1 : currentIndex - 1;
  popupImg.src = allImages[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex === allImages.length - 1) ? 0 : currentIndex + 1;
  popupImg.src = allImages[currentIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  // Add event listeners to visible images
  document.querySelectorAll('.photo-grid .photo').forEach((img, index) => {
    img.addEventListener('click', () => openPopup(index));
  });
});

// Close popup when clicking outside the image
popup.addEventListener('click', (e) => {
  if (e.target === popup) closePopup();
});

// Swipe Gesture Supportlet startX = 0;
let isSwiping = false;

// Touch start event
popup.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isSwiping = true;
});

// Touch move event
popup.addEventListener("touchmove", (e) => {
  if (!isSwiping) return;

  const moveX = e.touches[0].clientX;
  const diff = startX - moveX;

  // Swipe threshold to move to the next or previous image
  if (diff > 50) {
    nextImage(); // Swipe left, go to next image
    isSwiping = false;
  } else if (diff < -50) {
    prevImage(); // Swipe right, go to previous image
    isSwiping = false;
  }
});

// Touch end event
popup.addEventListener("touchend", () => {
  isSwiping = false;
});