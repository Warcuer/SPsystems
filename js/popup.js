const popupCallback = document.querySelector('.popup-callback');
const popupMessage = document.querySelector('.popup-message');
const popupClose = document.querySelectorAll('.popup__close');
const popupBtnSubmit = document.querySelectorAll('.popup-btn');
const callbackButton = document.querySelectorAll('.btn__figurative-connection');
const messageButton = document.querySelectorAll('.btn__write-to');
const popup = document.querySelectorAll('.popup')

popup.forEach((popup) => {
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      closeModal(popup)
    }
  })
})

function closeModal(popup) {
  popup.classList.remove('popup_open')
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    popup.forEach((popup) => {
      if (popup.classList.contains('popup_open')) {
        closeModal(popup);
      }
    });
  }
});

callbackButton.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    popupCallback.classList.add('popup_open');
  });
});

messageButton.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    popupMessage.classList.add('popup_open');
  });
});

popupBtnSubmit.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    popupMessage.classList.remove('popup_open');
    popupCallback.classList.remove('popup_open');
  });
});

popupClose.forEach((btn) => {
  btn.addEventListener('click', () => {
    popupMessage.classList.remove('popup_open');
    popupCallback.classList.remove('popup_open');
  });
});