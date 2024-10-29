//팝업 띄우기
function openPop() {
  document.getElementById("popup_layer").style.display = "block";
 // Add event listener to close the popup when clicking outside of it
 document.addEventListener('click', outsideClickListener);
}



//팝업 닫기
function closePop() {
  document.getElementById("popup_layer").style.display = "none";
  
  // Remove the event listener when the popup is closed
  document.removeEventListener('click', outsideClickListener);
}

// Function to detect clicks outside the popup
function outsideClickListener(event) {
  const popupLayer = document.getElementById("popup_layer");
  const popupBox = document.querySelector(".popup_box");
  if (!popupBox.contains(event.target) && popupLayer.style.display === "block") {
      closePop();
  }
}
