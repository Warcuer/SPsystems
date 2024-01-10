const popupCallback = document.querySelector('.popup-callback')
const popupMessage = document.querySelector('.popup-message')
const popupClose = document.querySelector('.popup__close')

const popupBtnSubmit = document.querySelectorAll('.popup-btn')

const callbackButton = document.querySelectorAll('.btn__figurative-connection')
const messageButton = document.querySelectorAll('.btn__write-to')

callbackButton.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    popupCallback.classList.add('popup_open')
  })
});

messageButton.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    popupMessage.classList.add('popup_open')
  })
});

popupBtnSubmit.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    popupMessage.classList.remove('popup_open')
    popupCallback.classList.remove('popup_open')
  })
})

popupClose.addEventListener('click', () => {
  popupMessage.classList.remove('popup_open')
  popupCallback.classList.remove('popup_open')
})