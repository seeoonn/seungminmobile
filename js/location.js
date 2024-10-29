document.addEventListener('DOMContentLoaded', function() {
  var mapOptions = {
      center: new naver.maps.LatLng(35.1805495463039, 128.221150706646), // Coordinates for Merida Wedding Hall
      zoom: 15
  };

  var map = new naver.maps.Map('map', mapOptions);

  var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(35.1805495463039, 128.221150706646),
      map: map
  });
});

function openNaverMap() {
  window.open('https://map.naver.com/p/entry/place/1400137119?c=17.00,0,0,0,dh', '_blank');
}

function copyAddress() {
  // Get the text field
  var address = document.getElementById("address").textContent;

  // Create a temporary textarea element to hold the text to copy
  var tempInput = document.createElement("textarea");
  tempInput.value = address;
  document.body.appendChild(tempInput);

  // Select the text field
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(tempInput);

  // Alert the copied text (optional)
  alert("주소가 복사되었습니다: " + address);
}