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