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







Kakao.init('b7c9a8a5782e51858aa5c8ea6c5d146f');

function shareKakao() {
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '태희 승민 결혼식에 초대드립니다🤍',
      description: '2025년 1월 11일 토요일',
      imageUrl: 'https://ifh.cc/g/rKkjhh.jpg',
      link: {
        mobileWebUrl: 'https://taehui-seungmin.life',
        webUrl: 'https://taehui-seungmin.life'
      }
    },
    buttons: [
      {
        title: '모바일 청첩장 보기',
        link: {
          mobileWebUrl: 'https://taehui-seungmin.life',
          webUrl: 'https://taehui-seungmin.life'
        }
      }
    ]
  });
}


function copyAddress() {
  const address = "https://taehui-seungmin.life"; // Replace with actual address
  navigator.clipboard.writeText(address).then(() => {
      alert("주소를 복사했어요!");
  });
}