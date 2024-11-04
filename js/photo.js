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

// Add event listeners to visible images
document.querySelectorAll('.photo-grid .photo').forEach((img, index) => {
  img.addEventListener('click', () => openPopup(index));
});

// Close popup when clicking outside the image
popup.addEventListener('click', (e) => {
  if (e.target === popup) closePopup();
});

// Swipe Gesture Support
let startX = 0;
let isSwiping = false;

// Touch start event to get initial touch position
popup.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isSwiping = true;
});

// Touch move event to detect swipe distance and direction
popup.addEventListener("touchmove", (e) => {
  if (!isSwiping) return;

  const moveX = e.touches[0].clientX;
  const diff = startX - moveX;

  // Swipe threshold to change to the next or previous image
  if (diff > 50) {
    // Swipe left: show next image
    nextImage();
    isSwiping = false; // Disable further swiping until touchend
  } else if (diff < -50) {
    // Swipe right: show previous image
    prevImage();
    isSwiping = false; // Disable further swiping until touchend
  }
});

// Reset swipe state after touch ends
popup.addEventListener("touchend", () => {
  isSwiping = false;
});