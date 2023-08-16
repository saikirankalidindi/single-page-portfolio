const showPopupBtn = document.getElementById('showPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popup = document.getElementById('popup');

showPopupBtn.addEventListener('click', function () {
  showPopup();
});

closePopupBtn.addEventListener('click', function () {
  hidePopup();
});

function showPopup() {
  popup.classList.remove('hidden');
}

function hidePopup() {
  popup.classList.add('hidden');
  setTimeout(function() {
    location.reload(); // Refresh the page after the pop-up is closed
  }, 100); // Delay for a short time before refreshing (adjust as needed)
}
