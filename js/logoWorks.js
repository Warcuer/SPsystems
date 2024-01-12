// const logoContainer = document.querySelector('.clients__gallery');
// const leftArrow = document.querySelector('.arrow__left-clients');
// const rightArrow = document.querySelector('.arrow__right-clients');
// let scrollPosition = 0;
// let visibleLogos = 5; // Начальное количество видимых логотипов
// let totalLogos = 14; // Общее количество логотипов
// let currentIndex = 0; // Индекс текущего видимого логотипа
// let autoScrollInterval; // Интервал автоматической прокрутки
// let isAutoScrolling = true; // Флаг для автоматической прокрутки

// const companyLogos = [
//   '../image/logo/company1.png',
//   '../image/logo/company2.png',
//   '../image/logo/company3.png',
//   '../image/logo/company4.png',
//   '../image/logo/company5.png',
//   // './image/logo/company6.png',
//   '../image/logo/company7.png',
//   '../image/logo/company8.png',
//   '../image/logo/company9.png',
//   '../image/logo/company10.png',
//   '../image/logo/company11.png',
//   '../image/logo/company12.png',
//   '../image/logo/company13.png',
//   '../image/logo/company14.png',
// ];

// function createLogoElements() {
//   logoContainer.innerHTML = '';
//   for (let i = currentIndex; i < currentIndex + visibleLogos; i++) {
//     const logoUrl = companyLogos[i % companyLogos.length];
//     const logoImg = document.createElement('img');
//     logoImg.src = logoUrl;
//     logoImg.alt = 'Company Logo';

//     logoImg.classList.add('clients__img', `clients__img${i}`);
//     logoImg.style.opacity = 1;

//     logoContainer.appendChild(logoImg);

//     setTimeout(() => {
//       logoImg.style.opacity = 1;
//     }, (i - currentIndex) * 100);
//   }
// }

// function startAutoScroll() {
//   if (!isAutoScrolling) {
//     autoScrollInterval = setInterval(() => {
//       scrollGallery(1);
//     }, 2000);
//     isAutoScrolling = true;
//   }
// }

// function stopAutoScroll() {
//   clearInterval(autoScrollInterval);
//   isAutoScrolling = false;
// }

// function scrollGallery(direction) {
//   const logoWidth = 50;

//   const visibleLogos = document.querySelectorAll('.clients__img');
//   visibleLogos.forEach(logo => {
//     logo.style.opacity = 0;
//   });

//   if (direction === -1) {
//     currentIndex = (currentIndex - 1 + companyLogos.length) % companyLogos.length;
//   } else if (direction === 1) {
//     currentIndex = (currentIndex + 1) % companyLogos.length;
//   }

//   createLogoElements();
// }

// leftArrow.addEventListener('click', () => {
//   stopAutoScroll();
//   scrollGallery(-1);
// });

// rightArrow.addEventListener('click', () => {
//   stopAutoScroll();
//   scrollGallery(1);
// });

// // Инициализация галереи
// createLogoElements();
// startAutoScroll(); // Запускаем автоматическую прокрутку при загрузке страницы