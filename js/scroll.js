document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.header__hamb');
  const burgLine = document.querySelector('.header__hamb-line')
  const navLinks = document.querySelector('.header__navigation');
  const sections = document.querySelectorAll('.color-change-section');

  burgerMenu.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });

  window.addEventListener('scroll', function () {
    let scrolledSection = null;

    // Определяем, находится ли пользователь в пределах блока с цветовыми изменениями
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
        scrolledSection = section;
      }
    });

    // Устанавливаем цвет гамбургера в зависимости от блока
    if (scrolledSection) {
      burgLine.style.color = scrolledSection.dataset.burgerColor || '';
    } else {
      // Если не находится внутри блоков с цветовыми изменениями, возвращаем исходный цвет
      burgLine.style.color = '';
    }
  });
});