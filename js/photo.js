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
const popupImg = document.getElementById('popup-img');
let swipeLock = false; // Variable to prevent double triggering

// Function to open popup with selected image
function openPopup(index) {
  currentIndex = index;
  popup.style.display = 'flex';
  popupImg.src = allImages[currentIndex];
  popupImg.style.transform = 'translateX(0)'; // Reset image position
  console.log(`Opening popup at index: ${currentIndex}`);
  // Disable background scrolling
  document.body.classList.add('no-scroll');
}

// Function to close popup
function closePopup() {
  popup.style.display = 'none';
  // Enable background scrolling
  document.body.classList.remove('no-scroll');
}

// Function to show previous image
function prevImage() {
  if (swipeLock) return;
  swipeLock = true;
  currentIndex = (currentIndex === 0) ? allImages.length - 1 : currentIndex - 1;
  popupImg.src = allImages[currentIndex];
  popupImg.style.transform = 'translateX(0)';
  console.log(`Previous image at index: ${currentIndex}`);

  setTimeout(() => {
    swipeLock = false;
  }, 300); // Adjust delay as necessary
}

// Function to show next image
function nextImage() {
  if (swipeLock) return;
  swipeLock = true;
  currentIndex = (currentIndex === allImages.length - 1) ? 0 : currentIndex + 1;
  popupImg.src = allImages[currentIndex];
  popupImg.style.transform = 'translateX(0)';
  console.log(`Next image at index: ${currentIndex}`);

  setTimeout(() => {
    swipeLock = false;
  }, 300); // Adjust delay as needed
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

// Variables to track swipe movement
let startX = 0;
let currentX = 0;
let isSwiping = false;

// Touch start event to get initial touch position
popup.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isSwiping = true;
  popupImg.style.transition = 'none'; // Disable transition during drag
  console.log(`Touch start at position: ${startX}`);
});

// Touch move event to drag the image with the swipe
popup.addEventListener("touchmove", (e) => {
  if (!isSwiping) return;
  currentX = e.touches[0].clientX;
  const diff = currentX - startX;

  // Move the image with the finger
  popupImg.style.transform = `translateX(${diff}px)`;
});

// Touch end event to determine if the swipe should change the image
popup.addEventListener("touchend", () => {
  isSwiping = false;
  const diff = currentX - startX;

  // Set a swipe threshold to prevent small accidental swipes
  const threshold = 60;
  console.log(`Touch end at position: ${currentX}, diff: ${diff}`);

  if (diff > threshold) {
    // Swipe right: show previous image
    prevImage();
  } else if (diff < -threshold) {
    // Swipe left: show next image
    nextImage();
  } else {
    // If swipe is too small, return to center
    popupImg.style.transition = 'transform 0.3s ease';
    popupImg.style.transform = 'translateX(0)';
  }
});