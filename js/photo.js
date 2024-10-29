const images = [
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
  
  function openPopup(index) {
    currentIndex = index;
    document.getElementById('popup-img').src = images[currentIndex];
    document.getElementById('popup').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('popup-img').src = images[currentIndex];
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('popup-img').src = images[currentIndex];
  }