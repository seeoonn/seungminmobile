const allImages = [
  './images/image1.jpg',
  './images/image2.jpg',
  './images/image3.jpg',
  './images/image4.jpg',
  './images/image5.jpg',
  './images/image6.jpg',
  './images/image7.jpg',
  './images/image8.jpg',
  './images/image9.jpg',
  './images/image10.jpg',
  './images/image11.jpg',
  './images/image12.jpg',
  './images/image13.jpg',
  './images/image14.jpg'
];

let currentIndex = 0;
const popup = document.getElementById('popup');
const popupImgContainer = document.getElementById('popup-img-container'); // Wrapper for sliding imagesconst popupImg1 = document.getElementById('popup-img-1'); // Current imageconst popupImg2 = document.getElementById('popup-img-2'); // Next imageconst popupImg3 = document.getElementById('popup-img-3'); // Previous image

// Function to set images for the current, next, and previous positions
function setImages() {
  popupImg1.src = allImages[currentIndex];
  popupImg2.src = allImages[(currentIndex + 1) % allImages.length];
  popupImg3.src = allImages[(currentIndex - 1 + allImages.length) % allImages.length];
}

// Function to open popup with the current image and set up neighbors
function openPopup(index) {
  currentIndex = index;
  popup.style.display = 'flex';
  setImages();
  popupImgContainer.style.transform = 'translateX(0)'; // Center the container
}

// Function to close popup
function closePopup() {
  popup.style.display = 'none';
}

// Function to go to the previous image
function prevImage() {
  currentIndex = (currentIndex === 0) ? allImages.length - 1 : currentIndex - 1;
  setImages();
  popupImgContainer.style.transition = 'transform 0.3s ease';
  popupImgContainer.style.transform = 'translateX(0)';
}

// Function to go to the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % allImages.length;
  setImages();
  popupImgContainer.style.transition = 'transform 0.3s ease';
  popupImgContainer.style.transform = 'translateX(0)';
}

// Add event listeners to images in the gallery
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.photo-grid .photo').forEach((img, index) => {
    img.addEventListener('click', () => openPopup(index));
  });
});

// Close popup when clicking outside the image
popup.addEventListener('click', (e) => {
  if (e.target === popup) closePopup();
});

// Variables to track swipe movementlet startX = 0;
let currentX = 0;
let isSwiping = false;

// Touch start event to get the initial touch position
popup.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isSwiping = true;
  popupImgContainer.style.transition = 'none'; // Disable transition during drag
});

// Touch move event to drag the image group with the swipe
popup.addEventListener("touchmove", (e) => {
  if (!isSwiping) return;

  currentX = e.touches[0].clientX;
  const diff = currentX - startX;
  
  // Move the entire image container with the finger
  popupImgContainer.style.transform = `translateX(${diff}px)`;
});

// Touch end event to determine if the swipe should change the image
popup.addEventListener("touchend", () => {
  isSwiping = false;
  const diff = currentX - startX;
  
  // Set a swipe threshold
  const threshold = 100;
  
  if (diff > threshold) {
    // Swipe right: show previous image
    prevImage();
  } else if (diff < -threshold) {
    // Swipe left: show next image
    nextImage();
  } else {
    // If swipe is too small, return to center
    popupImgContainer.style.transition = 'transform 0.3s ease';
    popupImgContainer.style.transform = 'translateX(0)';
  }
});