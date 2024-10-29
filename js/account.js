function toggleAccordion(element) {
  // Toggle the active class to rotate the arrow
  element.classList.toggle('active');
  
  // Toggle the visibility of the content
  let content = element.nextElementSibling;
  if (content.style.display === "block") {
      content.style.display = "none";
  } else {
      content.style.display = "block";
  }
}

function copyAccount(accountNumber) {
  // Copy the specific account number to the clipboard
  navigator.clipboard.writeText(accountNumber).then(function() {
      alert('Account number copied: ' + accountNumber);
  }, function(err) {
      console.error('Could not copy text: ', err);
  });
}










function shareKakao() {
  alert("KakaoTalk sharing function goes here.");
}

function copyAddress() {
  const address = "http://127.0.0.1:5500/index.html"; // Replace with actual address
  navigator.clipboard.writeText(address).then(() => {
      alert("주소를 복사했어요!");
  });
}