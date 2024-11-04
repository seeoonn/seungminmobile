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

// Function to open popup with selected imagefunction openPopup(index) 
{
  console.log("Opening popup for index:", index); // Debug log
  currentIndex = index;
  popup.classList.add('show'); // Add the show class to display the popup
  popupImg.src = allImages[currentIndex];}

// Function to close popupfunction closePopup() 
{
  console.log("Closing popup"); // Debug log
  popup.classList.remove('show');}// Remove the show class to hide the popup

// Function to show previous imagefunction prevImage()
{
  currentIndex = (currentIndex === 0) ? allImages.length - 1 : currentIndex - 1;
  popupImg.src = allImages[currentIndex];}

// Function to show next imagefunction nextImage() 
{
  currentIndex = (currentIndex === allImages.length - 1) ? 0 : currentIndex + 1;
  popupImg.src = allImages[currentIndex];}

// Add event listeners to images in the gallerydocument.addEventListener("DOMContentLoaded", () => 
{
  document.querySelectorAll('.photo-grid .photo').forEach((img, index) => {
    img.addEventListener('click', () => {
      console.log("Image clicked:", index); // Debug log
      openPopup(index);
    });
  });
};

// Close popup when clicking outside the image
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

// Swipe Gesture Supportlet startX = 0;
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
    nextImage(); // Swipe left to next image
    isSwiping = false;
  } else if (diff < -50) {
    prevImage(); // Swipe right to previous image
    isSwiping = false;
  }
});

// Reset swipe state after touch ends
popup.addEventListener("touchend", () => {
  isSwiping = false;
});