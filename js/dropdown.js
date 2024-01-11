const dropList = document.querySelectorAll('.header__list-item');
const dropLink = document.querySelectorAll('#dropdown');


document.addEventListener('click', (e) => {
  const isClickInsideDropList = Array.from(dropList).some((list) => list.contains(e.target));
  const isClickInsideDropLink = Array.from(dropLink).some((link) => link.contains(e.target));

  if (!isClickInsideDropList && !isClickInsideDropLink) {
    dropLink.forEach((link) => {
      link.classList.remove('show');
    });
  }
});

dropList.forEach((list, index) => {
  list.addEventListener('click', (e) => {
    dropLink.forEach((link, linkIndex) => {
      if (index === linkIndex) {
        link.classList.toggle('show');
      } else {
        link.classList.remove('show');
      }
    });
    e.stopPropagation();
  });
});