ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.593580, 38.158535],
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './image/icon/icon-map.png',
          // Размеры метки.
          iconImageSize: [30, 42],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      }),

      myPlacemarkWithContent = new ymaps.Placemark([55.593580, 38.158535], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          // iconContent: '12'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: './image/icon/icon-map.png',
          // Размеры метки.
          iconImageSize: [42, 50],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-18, -48],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      // .add(myPlacemark)
      .add(myPlacemarkWithContent);
});