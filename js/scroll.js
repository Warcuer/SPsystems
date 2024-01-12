//Кнопка подняться на вверх
document.addEventListener('DOMContentLoaded', function () {
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  // Показываем или скрываем кнопку в зависимости от положения скролла
  window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  // Плавная прокрутка вверх при клике на кнопку
  scrollTopBtn.addEventListener('click', function () {
    scrollToTop();
  });
});

// Функция для плавной прокрутки вверх
function scrollToTop() {
  const scrollStep = -window.scrollY / (2000 / 60); // 500 - время анимации (миллисекунды), 15 - количество кадров в секунду
  const scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}


//Плавынй скролл до элемента/ов страницы
const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};



//Изменение цвета бургера при попадании на блок
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