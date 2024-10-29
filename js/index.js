// script.js

function openRSVP() {
  document.getElementById('rsvp-form').style.display = 'block';
}

function closeRSVP() {
  document.getElementById('rsvp-form').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('rsvp-form');
  if (event.target == modal) {
      modal.style.display = 'none';
  }
}

// Handle form submission
document.getElementById('rsvp').onsubmit = function(event) {
  event.preventDefault();
  alert('RSVP submitted!');
  closeRSVP();
}